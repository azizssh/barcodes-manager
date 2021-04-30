const getValidProductCode = require('./getValidProductCode')

it('returns empty string if string is not provided', ()=>{
    expect(getValidProductCode({})).toBe('')
})

it('returns empty string if an empty string is provided', ()=>{
    expect(getValidProductCode('')).toBe('')
})

it('turns the string to uppercase letters', ()=> {
    expect(getValidProductCode('abcdEFgh')).toBe('ABCDEFGH')
})

it('gets rid of special characters', ()=> {
    expect(getValidProductCode('/\\a*,<>b!@#$%^&* c+=')).toBe('AB&C')
})