const extractUrls = require("../index.js");

const str = `You can read https://github.com/huckbit/extract-urls or https://www.npmjs.com/package/extract-urls for more info`;
const strUppercase = `YOU CAN READ HTTPS://GITHUB.COM/HUCKBIT/EXTRACT-URLS OR HTTPS://WWW.NPMJS.COM/PACKAGE/EXTRACT-URLS for more info`;
const numericValue = 7;
const expected = [
  "https://github.com/huckbit/extract-urls",
  "https://www.npmjs.com/package/extract-urls",
];

test("Extract urls from the given string", () => {
  expect(extractUrls(str)).toEqual(expect.arrayContaining(expected));
});

test("Expect lowercase url when uppercase is given", () => {
  expect(extractUrls(strUppercase)).toEqual(expect.arrayContaining(expected));
});

test("Empty string to return undefined", () => {
  expect(extractUrls("")).toEqual(undefined);
});

test("Exception raised when something different from a string is passed", () => {
  expect(() => {
    extractUrls(numericValue);
  }).toThrow(TypeError);
});
