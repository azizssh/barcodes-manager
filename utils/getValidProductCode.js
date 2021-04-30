const getValidProductCode = (prodCode) => {
    if(typeof prodCode !== 'string' || prodCode.length <1) {
        return ''
    }
    const validProdCode = prodCode.toUpperCase().replace(/[^A-Z0-9-_&.()]/gi, "");
    return validProdCode;
}

module.exports = getValidProductCode