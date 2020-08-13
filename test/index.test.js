const extractUrls = require("../index.js");

const str = `You can read https://github.com/huckbit/extract-urls or https://www.npmjs.com/package/extract-urls for more info`;
const numericValue = 7;
const expected = ["https://github.com/huckbit/extract-urls", "https://www.npmjs.com/package/extract-urls"];

test("Extract urls from the given string", () => {

  expect(extractUrls(str)).toEqual(expect.arrayContaining(expected));

});


test("Empty string to return undefined", () => {

  expect(extractUrls("")).toEqual(undefined);

})

test("Exception raised when something different from a string is passed", () => {

  expect(() => { extractUrls(numericValue) }).toThrow(TypeError);

})
