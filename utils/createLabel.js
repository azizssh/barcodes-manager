const [SMALL_LABEL_CODE] = require("./constants");

const convertFileToArray = (file) => {
  const fs = require("fs");
  const array = fs.readFileSync(file).toString().split("\n");
  return array;
};

const createLabel = (
  labelSize,
  barcode,
  productCode
) => {
  const labelFile = convertFileToArray(__dirname + "\\sampleSmallLabel.dymo");
  const labelIndex = 5;
  const barcodeIndex = 62;
  const productCodeIndex = 134;

  labelFile[labelIndex]=labelFile[labelIndex].replace(SMALL_LABEL_CODE, labelSize);
  console.log(labelFile[labelIndex])
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
