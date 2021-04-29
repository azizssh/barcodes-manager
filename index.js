const convertToEan = require("./convertToEan");

const readline = require("readline");
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
      console.log(ean, productCode, desc);
      recursiveAsyncReadLine();
    });
  });
};

recursiveAsyncReadLine(); //we have to actually start our recursion somehow
