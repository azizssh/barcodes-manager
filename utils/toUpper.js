var readline = require('readline');
var log = console.log;
const fs = require('fs')

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});



var recursiveAsyncReadLine = function () {
  rl.question('Command: ', function (answer) {
    if (answer == 'exit') //we need some base case, for recursion
      return rl.close(); //closing RL and returning from function.
    console.log(answer.toUpperCase())
    recursiveAsyncReadLine(); //Calling this function again to ask new question
  });
};

recursiveAsyncReadLine(); //we have to actually start our recursion somehowa