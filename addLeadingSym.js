const addLeadingSym = (numStr, sym, limit) => {
  const len = numStr.length;
  let validEan = "";
  if (numStr.length < limit) {
    const symbolsNeeded = limit - len;
    let prefix = "";
    for (let i = 0; i < symbolsNeeded; i++) {
      prefix += sym;
    }

    // add leading sym and str
    validEan = prefix + numStr;
  }

  return validEan;
};

module.exports = addLeadingSym