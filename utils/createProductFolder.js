const fs = require("fs");
const [ SMALL_LABEL_CODE, LARGE_LABEL_CODE ] = require("./constants");
const  createLabel = require('./createLabel')

const createLabelFile = (labelSize, array=[]) => {
  let file;
  if (labelSize === SMALL_LABEL_CODE) {
    file = fs.createWriteStream("small-label.dymo");
  } else if (labelSize === LARGE_LABEL_CODE) {
    file = fs.createWriteStream("large-label.dymo");
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
  const productsPath = `${productsFolder}/${barcode}-${productCode}/`;
  if (!fs.existsSync(productsPath)) {
    //create
    fs.mkdirSync(productsPath);
  }

  //get arrays
  const smallLabel = createLabel(SMALL_LABEL_CODE, barcode, productCode);
  const largeLabel = createLabel(LARGE_LABEL_CODE, barcode, productCode);
  console.log('largelabel', largeLabel[5])
  //write arrays to files
  createLabelFile(SMALL_LABEL_CODE, smallLabel);
  createLabelFile(LARGE_LABEL_CODE, largeLabel)
};

module.exports = createProductFolder;
