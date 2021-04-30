const convertToEan = require("./convertToEan");
require("dotenv").config();

const readline = require("readline");
const createProductFolder = require("./utils/createProductFolder");
const addToExcel = require("./addToExcel");
const log = console.log;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const recursiveAsyncReadLine = function () {
  let productCode = "",
    ean = "",
    desc = "";
  rl.question("Enter product name:\n", function (answer) {
    if (answer == "exit")
      //we need some base case, for recursion
      return rl.close(); //closing RL and returning from function.
    productCode = answer;
    ean = convertToEan(answer);
    log("EAN-13:", ean);
    //Calling this function again to ask new question
    rl.question("Enter product description:\n", (answer) => {
      desc = answer;
      createProductFolder(process.env.PRODUCTS_PATH, ean, productCode);
      addToExcel(productCode, desc, ean);
      recursiveAsyncReadLine();
    });
  });
};

recursiveAsyncReadLine(); //we have to actually start our recursion somehow
