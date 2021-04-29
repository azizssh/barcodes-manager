const labels = require("./constants");

const convertFileToArray = (file) => {
  const fs = require("fs");
  const array = fs.readFileSync(file).toString().split("\n");
  return array;
};

const createLabel = (
  labelSize = labels.SMALL_LABEL_CODE,
  barcode,
  productCode
) => {
  if (labels.indexOf(labelSize) === -1) {
    console.log("LABEL SIZE IS INCORRECT");
    return;
  }
  const labelFile = convertFileToArray("sampleLabel.dymo");
  const labelIndex = 5;
  const barcodeIndex = 62;
  const productCodeIndex = 134;

  labelFile[labelIndex]=labelFile[labelIndex].replace(labels.SMALL_LABEL_CODE, labelSize);
  labelFile[barcodeIndex] = labelFile[barcodeIndex].replace("1234567890123", barcode);
  labelFile[productCodeIndex] = labelFile[productCodeIndex].replace("PRODCODE", productCode.toUpperCase());

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
