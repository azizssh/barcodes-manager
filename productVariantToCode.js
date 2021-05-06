//gets any product variant name and converts it to the code
//that will be used to generate barcode

const lettersToNumbers = require("./lettersToNumbers");

function productVariantToCode(str, limit) {
  let result = "";
  const halfLimit = Math.floor(limit / 2);

  let letters = str.replace(/[^a-zA-Z]/gi, "").slice(0, halfLimit);
  let numbers = str.replace(/[^0-9]/gi, "").slice(0, halfLimit);
  //turn letters into numbers
  letters = lettersToNumbers(letters).slice(0, halfLimit);
  let len = letters.length + numbers.length;
  const dif = limit - len;

  result = letters + (dif > 0 ? '1'.repeat(dif) : '') + numbers
  return result;
}

module.exports = productVariantToCode;
