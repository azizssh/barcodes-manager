const fs = require('fs')
const path = require('path').win32

const createProductFolder = (productsFolder, barcode, productCode) => {
    //create a folder with barcode in products
    const productsPath = `${productsFolder}/${barcode}-${productCode}/`;
    if(!fs.existsSync(productsPath)) {
      //create
      fs.mkdirSync(productsPath);
    }
  }

  module.exports = createProductFolder;