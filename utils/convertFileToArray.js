module.exports = convertFileToArray = (file) => {
  const fs = require("fs");
  const array = fs.readFileSync(file).toString().split("\n");
  return array;
};
