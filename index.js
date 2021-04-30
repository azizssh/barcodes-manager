const convertToEan = require("./convertToEan");
require("dotenv").config();
const {PRODUCT_PATH, QUERY_PRODCODE, QUERY_DESCRIPTION} = require('./utils/constants');
const readline = require("readline");
const createProductFolder = require("./utils/createProductFolder");
const addToExcel = require("./addToExcel");
const getValidProductCode = require("./utils/getValidProductCode");
const log = console.log;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const recursiveAsyncReadLine = function () {
  rl.question(QUERY_PRODCODE, function (productCode) {
    const validProductCode = getValidProductCode(productCode)
    if (productCode == "exit")
      //we need some base case, for recursion
      return rl.close(); //closing RL and returning from function.
    const ean = convertToEan(validProductCode);
    log("EAN-13:", ean);
    //Calling this function again to ask new question
    rl.question(QUERY_DESCRIPTION, (desc) => {
      createProductFolder(PRODUCT_PATH, ean, validProductCode);
      addToExcel([validProductCode, desc, ean]);
      recursiveAsyncReadLine();
    });
  });
};

recursiveAsyncReadLine(); //we have to actually start our recursion somehow