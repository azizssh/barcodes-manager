const convertToEan = require("./convertToEan");
const {
  PRODUCT_PATH,
  QUERY_PRODCODE,
  QUERY_DESCRIPTION,
  EXCEL_FILENAME,
} = require("./utils/constants");
const path = require('path')
const readline = require("readline");
const createProductFolder = require("./utils/createProductFolder");
const addToExcel = require("./addToExcel");
const getValidProductCode = require("./utils/getValidProductCode");
const dataToHashMap = require("./utils/dataToHashMap");
const loadExcel = require("./utils/loadExcel");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const productsHash = dataToHashMap(
  loadExcel(path.resolve(PRODUCT_PATH, EXCEL_FILENAME))
);

const recursiveAsyncReadLine = function () {
  rl.question(QUERY_PRODCODE, function (productCode) {
    const validProductCode = getValidProductCode(productCode);
    if (productCode == "exit")
      //we need some base case, for recursion
      return rl.close(); //closing RL and returning from function.
    const ean = convertToEan(validProductCode);
    //Calling this function again to ask new question
    rl.question(QUERY_DESCRIPTION, (desc) => {
      createProductFolder(PRODUCT_PATH, ean, validProductCode);
      if (!productsHash.hasOwnProperty(validProductCode)) {
        addToExcel([validProductCode, desc, ean]);
      } else {
        console.log('The product is already present in the spreadsheet');
      }
      recursiveAsyncReadLine();
    });
  });
};

recursiveAsyncReadLine(); //we have to actually start our recursion somehow