const fs = require("fs");
const {SMALL_LABEL_CODE, LARGE_LABEL_CODE } = require("./labelSizes");
const  createLabel = require('./createLabel')
const path = require('path')

const createLabelFile = (labelSize, array=[], path) => {
  let file;
  if (labelSize === SMALL_LABEL_CODE) {
    file = fs.createWriteStream(path + "small-label.dymo");
  } else if (labelSize === LARGE_LABEL_CODE) {
    file = fs.createWriteStream(path + "large-label.dymo");
  } else {
    console.log("INCORRECT LABELSIZE SETTINGS");
    return;
  }
  file.on("error", (err) => console.log(err));
  array.forEach((line) => file.write(line + "\n"));
  file.close();
};

const createProductFolder = (
  productsFolder = "./products/",
  barcode,
  productCode
) => {
  //create a folder with barcode in products
  const productsPath = `${productsFolder}/${barcode}-${productCode.toUpperCase()}/`;
  if (!fs.existsSync(productsPath)) {
    //create
    fs.mkdirSync(productsPath, {recursive: true});
  }

  //get arrays
  const smallLabel = createLabel("SMALL_LABEL_CODE", barcode, productCode);
  const largeLabel = createLabel("LARGE_LABEL_CODE", barcode, productCode);
  //write arrays to files
  createLabelFile(SMALL_LABEL_CODE, smallLabel, productsPath);
  createLabelFile(LARGE_LABEL_CODE, largeLabel, productsPath);
};

module.exports = createProductFolder;
