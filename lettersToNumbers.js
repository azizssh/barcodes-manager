const lettersToNumbers = (letters) => {
  const offset = 96;
  // 'a' -> 97, we want 'a' to be 1
  //accepting only lowercase
  const lowerLetters = letters.toLowerCase();
  let result = "";
  let sum = 0;
  let multiplier = 1;
  for (let c of lowerLetters) {
    sum += multiplier * c.charCodeAt(0);
    multiplier *= 10;
  }

  result += sum % 1000000;

  return result;
};

module.exports = lettersToNumbers;
