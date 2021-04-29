const fs = require('fs')

const createNeededFiles = (barcode) => {
    //create a folder with barcode in products
    const path = './products/'
    const newFolderPath = `${path}/${barcode}`
    try {
      fs.mkdirSync(newFolderPath, (err) => {
        if (err) console.err(err)
      })
    } catch (err) {
      console.log(err)
      return;
    }
  
    //create desc.txt & title.txt
    fs.closeSync(fs.openSync(`${newFolderPath}/desc.txt`, 'w'))
    fs.closeSync(fs.openSync(`${newFolderPath}/title.txt`, 'w'))
    //create images fldr
    fs.mkdirSync(`${newFolderPath}/images/`, (err) => {
      if (err) console.err(err)
    })
  }

  module.exports = createNeededFiles;
