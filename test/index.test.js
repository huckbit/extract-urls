const extractUrls = require("../index.js");

const inputValues = {
  basicString: `You can read https://github.com/huckbit/extract-urls or https://www.npmjs.com/package/extract-urls for more info`,
  strUppercase: `YOU CAN READ HTTPS://GITHUB.COM/HUCKBIT/EXTRACT-URLS OR HTTPS://WWW.NPMJS.COM/PACKAGE/EXTRACT-URLS for more info`,
  URLWithSpecialCharacters: "https://example.com/!'LkhkDA6L!VweK7hsDfl6bQoU3cDjCEg!Lsx",
  numericValue: 7,
  stringWithoutUrls: "you can read a book",
  URLWithMarkdown: "[github](https://github.com/huckbit/extract-urls) [npm](https://www.npmjs.com/package/extract-urls)",
  URLWithMarkdownUppercase: "[github](HTTPS://GITHUB.COM/HUCKBIT/EXTRACT-URLS) [npm](HTTPS://WWW.NPMJS.COM/PACKAGE/EXTRACT-URLS)",
};

const expectedValues = {
  URLsList: ["https://github.com/huckbit/extract-urls", "https://www.npmjs.com/package/extract-urls"],
  URLsWithSpecialCharacters: ["https://example.com/!'LkhkDA6L!VweK7hsDfl6bQoU3cDjCEg!Lsx"],
};

test("Extract urls from the given string", () => {
  expect(extractUrls(inputValues.basicString)).toEqual(expect.arrayContaining(expectedValues.URLsList));
});

test("Expect lowercase url when uppercase is given", () => {
  expect(extractUrls(inputValues.strUppercase, true)).toEqual(expect.arrayContaining(expectedValues.URLsList));
});

test("Empty string to return undefined", () => {
  expect(extractUrls("")).toEqual(undefined);
});

test("String containing no urls to return undefined", () => {
  expect(extractUrls(inputValues.stringWithoutUrls)).toEqual(undefined);
});

test("Matching url containing special characters", () => {
  expect(extractUrls(inputValues.URLWithSpecialCharacters)).toEqual(expect.arrayContaining(expectedValues.URLsWithSpecialCharacters));
});

test("Exception raised when something different from a string is passed", () => {
  expect(() => {
    extractUrls(inputValues.numericValue);
  }).toThrow(TypeError);
});

test("Match URL from Markdown", () => {
  expect(extractUrls(inputValues.URLWithMarkdown)).toEqual(expect.arrayContaining(expectedValues.URLsList));
});

test("Match URL from Markdown when URL is uppercase", () => {
  expect(extractUrls(inputValues.URLWithMarkdownUppercase, true)).toEqual(expect.arrayContaining(expectedValues.URLsList));
});
