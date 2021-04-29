const fs = require('fs')

const createProductFolder = ([barcode, productCode, ...extra]) => {
    //create a folder with barcode in products
    const productsPath = process.env.PRODUCTS_PATH || './products/'
    const newFolderName = `${productsPath}/${barcode}-${productCode}`
    try {
      fs.mkdirSync(newFolderName)
    } catch (err) {
      console.log(err)
      return;
    }
  }

  module.exports = createProductFolder;