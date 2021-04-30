module.exports = loadExcel = (excelPath) => {
  const reader = require("xlsx");
  const file = reader.readFile(excelPath); //getting xls file and read it

  const firstSheet = file.SheetNames[0];
  const data = reader.utils.sheet_to_json(file.Sheets[firstSheet]); //returns an array
  return data;
};
