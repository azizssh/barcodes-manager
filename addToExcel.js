/*
* Adding data to the end of the existing Excel .xlsx worksheet
*/

const reader = require("xlsx");

const { EXCEL_FILENAME, PRODUCT_PATH } = require("./utils/constants");

const addToExcel = (dataAr) => {
  const path = `${PRODUCT_PATH}/${EXCEL_FILENAME}`; //path to the output xls

  const file = reader.readFile(path); //getting xls file and read it

  //aoa adds array of array
  reader.utils.sheet_add_aoa(file.Sheets.ProductCodes, [dataAr], {
    origin: -1,
  });

  reader.writeFile(file, path);
};


module.exports = addToExcel