const extractUrls = require("../index.js");

const str = `You can read https://github.com/huckbit/extract-urls or https://www.npmjs.com/package/extract-urls for more info`;
const strUppercase = `YOU CAN READ HTTPS://GITHUB.COM/HUCKBIT/EXTRACT-URLS OR HTTPS://WWW.NPMJS.COM/PACKAGE/EXTRACT-URLS for more info`;
const urlsWithSpecialChars = "https://example.com/!'LkhkDA6L!VweK7hsDfl6bQoU3cDjCEg!Lsx";
const urlsWithinMarkdown = `# extract-urls
[![npm version](https://github.com/huckbit/extract-urls)](https://www.npmjs.com/package/extract-urls)`;
const urlsEndingWithBracket = "https://github.com/huckbit/')";
const numericValue = 7;
const strWithoutUrls = "you can read a book";
const expected = [
  "https://github.com/huckbit/extract-urls",
  "https://www.npmjs.com/package/extract-urls",
];
const urlsEndingWithBracketExpected = ["https://github.com/huckbit/')"];
const urlsWithSpecialCharsExpected = [
  "https://example.com/!'LkhkDA6L!VweK7hsDfl6bQoU3cDjCEg!Lsx",
];

test("Extract urls from the given string", () => {
  expect(extractUrls(str)).toEqual(expect.arrayContaining(expected));
});

test("Expect lowercase url when uppercase is given", () => {
  expect(extractUrls(strUppercase, true)).toEqual(
    expect.arrayContaining(expected)
  );
});

test("Empty string to return undefined", () => {
  expect(extractUrls("")).toEqual(undefined);
});

test("String containing no urls to return undefined", () => {
  expect(extractUrls(strWithoutUrls)).toEqual(undefined);
});

test("Matching url containing special characters", () => {
  expect(extractUrls(urlsWithSpecialChars)).toEqual(
    expect.arrayContaining(urlsWithSpecialCharsExpected)
  );
});

test("Match URL from Markdown sample", () => {
  expect(extractUrls(urlsWithinMarkdown)).toEqual(
      expect.arrayContaining(expected)
    );
});

test("Match URL with trailing bracket", () => {
  expect(extractUrls(urlsEndingWithBracket)).toEqual(
    expect.arrayContaining(urlsEndingWithBracketExpected)
  );
});

test("Exception raised when something different from a string is passed", () => {
  expect(() => {
    extractUrls(numericValue);
  }).toThrow(TypeError);
});
