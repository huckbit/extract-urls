/**
 * Extract Urls from a string
 * @module extractUrls
 * @param {string} str - String to be cleaned.
 * @returns {array} - array containing urls
 */

const extractUrls = function (str) {
  const regexp = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/gi;

  if (typeof str !== "string") {

    throw new TypeError(`The str argument should be a string, got ${typeof str}`);

  }

  if (str) {

    //replace new line with space, split on space and then filter elements in the array that match the regular expression
    return str.replace(/\n/g, " ").split(" ").filter((item) => item.match(regexp));

  }

};

module.exports = extractUrls;
