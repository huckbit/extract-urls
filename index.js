/**
 * Extract Urls from a string
 * @module extractUrls
 * @param {string} str - String to be cleaned.
 * @returns {array} - array containing urls
 */

const extractUrls = function (str) {
  if (str) {
    const regexp = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/gi;

    //replace new line with space, split on space and then filter elements in the array that match the regular expression
    return str.replace(/\n/g, " ").split(" ").filter((item) => item.match(regexp));

  } else {
    throw `Empty string`;
  }
};

module.exports = extractUrls;
