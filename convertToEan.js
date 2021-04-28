const { Ean13Utils } = require("ean13-lib");
const { EAN_LIMIT } = require("./constants");
const productVariantToCode = require("./productVariantToCode");

const convertToEan = (productName) => {
  //convert productName to code
  const encodedProduct = productVariantToCode(productName, EAN_LIMIT)
  const generatedBarcode = Ean13Utils.generate(encodedProduct);
  return generatedBarcode.toString();
};

module.exports = convertToEan;