const extractUrls = require("../index.js");

const str = `this string contains to urls. This is the first one https://www.huckbit.com the second one https://cssloaders.com`;
const num = 7;
const expected = ["https://www.huckbit.com", "https://cssloaders.com"];

test("Extract urls from the given string", () => {

  expect(extractUrls(str)).toEqual(expect.arrayContaining(expected));

});


test("Exception raised when something different from a string is passed", () => {

  expect(extractUrls(num)).toThrow(TypeError);

})


