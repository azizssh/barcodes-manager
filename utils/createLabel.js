const labelSizes = require("./labelSizes");

const convertFileToArray = (file) => {
  const fs = require("fs");
  const array = fs.readFileSync(file).toString().split("\n");
  return array;
};

const createLabel = (labelSize, barcode, productCode) => {

  if (!labelSizes.hasOwnProperty(labelSize)) {
    console.log("INCORRECT LABEL SIZE");
    return;
  }

  let labelFile, barcodeIndex, productCodeIndex;

  switch (labelSize) {
    case "SMALL_LABEL_CODE": {
      labelFile = convertFileToArray(__dirname + "\\sampleSmallLabel.dymo");
      barcodeIndex = 62;
      productCodeIndex = 134;
      break;
    }

    case "LARGE_LABEL_CODE": {
      labelFile = convertFileToArray(__dirname + "\\sampleLargeLabel.dymo");
      barcodeIndex = 131;
      productCodeIndex = 70;
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
    productCode.toUpperCase()
  );

  return labelFile;
};

module.exports = createLabel;

// const newFile = createLabel("Address30251", "1916111111018", 'SP-104');
// newFile.forEach((line, idx) => console.log(idx, line))

/*
    <LabelName>Address30251</LabelName>
              <DataString>1916111111018</DataString>
                <Text>GC-008</Text>
*/
