module.exports = dataToHashMap = (data) => {
  const hashObj = {};
  data.forEach((row, idx) => {
    if (idx === 0) return; //skip the first row

    //construct new hashObj property from the row
    const productCode = row["Product Code"];
    const barcode = row["Barcode"];
    const description = row["Description"];
    hashObj[productCode] = {
      barcode,
      description,
    };
  });

  return hashObj;
};