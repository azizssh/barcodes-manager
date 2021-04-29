const labels = require('./constants');

const createLabel = (labelSize, barcode, productCode) = {

}

module.exports = createLabel;


var fs = require("fs");
const labelIndex = 5;
const barcodeIndex = 62;
const productCodeIndex = 134;
var array = fs.readFileSync("sampleLabel.dymo").toString().split("\n");

console.log(array[labelIndex])
console.log(array[barcodeIndex]);
console.log(array[productCodeIndex]);

/*
    <LabelName>Address30251</LabelName>
              <DataString>1916111111018</DataString>
                <Text>GC-008</Text>
*/