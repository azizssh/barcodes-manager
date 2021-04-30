const convertFileToArray = require("./convertFileToArray");

const createLabel = (labelSize, barcode, productCode) => {
  let labelFile, barcodeIndex, productCodeIndex;

  //impure
  const setLabel = (sampleFile, barcodeI, productI) => {
    labelFile = convertFileToArray(sampleFile);
    barcodeIndex = barcodeI
    productCodeIndex = productI
  }

  switch (labelSize) {
    case "SMALL_LABEL_CODE": {
      setLabel(__dirname+'\\sampleSmallLabel.dymo', 62, 134)
      break;
    }

    case "LARGE_LABEL_CODE": {
      setLabel(__dirname + "\\sampleLargeLabel.dymo", 131, 70);
      break;
    }
    default:
      return console.log("Something went wrong...");
  }

  labelFile[barcodeIndex] = labelFile[barcodeIndex].replace(
    "1234567890123",
    barcode
  );
  labelFile[productCodeIndex] = labelFile[productCodeIndex].replace(
    "PRODCODE",
    productCode
  );

  return labelFile;
};

module.exports = createLabel;
