const reader = require("xlsx");
const { EXCEL_FILENAME, PRODUCT_PATH } = require("./utils/constants");

const addToExcel = (productCode, description, barcode) => {
  const path = `${PRODUCT_PATH}/${EXCEL_FILENAME}`;

  const file = reader.readFile(path);

  let newProduct = [productCode, description, barcode];
  reader.utils.sheet_add_aoa(file.Sheets.ProductCodes, [newProduct], {
    origin: -1,
  });

  reader.writeFile(file, path);
};


module.exports = addToExcel