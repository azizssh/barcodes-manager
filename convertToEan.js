const { Ean13Utils } = require("ean13-lib");


const convertToEan = (numStr) => {
    let strippedStr = numStr.replace(/[^0-9]/gi, '')
    strippedStr = strippedStr.slice(0, 12);
    console.log(strippedStr)
    const generatedBarcode = Ean13Utils.generate(strippedStr);
    return generatedBarcode
}


module.exports = convertToEan;