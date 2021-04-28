const lettersToNumbers = (letters) => {
    const offset = 96;
    // 'a' -> 97, we want 'a' to be 1
    //accepting only lowercase
    const lowerLetters = letters.toLowerCase();
    let result = '';
    for(let c of lowerLetters) {
        result += c.charCodeAt(0) - offset
    }

    return result;

}

module.exports =  lettersToNumbers