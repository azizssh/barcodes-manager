const convertToEan = require("./convertToEan");

const readline = require("readline");
const log = console.log;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const recursiveAsyncReadLine = function () {
  rl.question("Command: ", function (answer) {
    if (answer == "exit")
      //we need some base case, for recursion
      return rl.close(); //closing RL and returning from function.
    const ean = convertToEan(answer);
    log(ean);
    recursiveAsyncReadLine(); //Calling this function again to ask new question
  });
};

recursiveAsyncReadLine(); //we have to actually start our recursion somehow
