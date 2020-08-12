const extractUrls = require("../lib/extracUrls");

test("get urls from the given string", () => {
  const str = `this string contains to urls. This is the first one https://www.huckbit.com the second one https://cssloaders.com`;
  const expected = ["https://www.huckbit.com", "https://cssloaders.com"];
  expect(extractUrls(str)).toEqual(expect.arrayContaining(expected));
});
