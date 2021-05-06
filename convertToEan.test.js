const convertToEan = require('./convertToEan');

it('should return valid ean when code is provided', ()=> {
  expect(convertToEan("RWT-420-S-001")).not.toBe(null || undefined);
})