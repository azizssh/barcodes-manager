const reader = require('xlsx')
const {EXCEL_FILENAME, PRODUCT_PATH} = require('./utils/constants')
const path = `${PRODUCT_PATH}/${EXCEL_FILENAME}`;
const file = reader.readFile(path)

let data = []

const sheets = file.SheetNames

console.log(sheets.length)

for (let i = 0; i < sheets.length; i++) {
  const temp = reader.utils.sheet_to_json(file.Sheets[file.SheetNames[i]]);
  temp.forEach((res) => {
    data.push(res);
  });
}

// Printing data
// console.log(reader.utils.sheet_to_json(file.Sheets.ProductCodes));

let newProduct = ["TEST123", "testDEsc", "1234567890123"];


const newData = reader.utils.sheet_add_aoa(file.Sheets.ProductCodes, [newProduct], {origin:-1})

reader.writeFile(file, path);