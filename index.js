"use strict";


module.exports = (str, lower = false) => {
  // The regex matches URLs, but also URLs enclosed in either () or '', which will later be removed
  // A URLs ending in ) or ' is valid, but unlikely the indended URL is preceeeded by a matching symbol
  const regexp = /[(']?https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()'@:%_\+.~#?!&//=]*)/gi;

  if (typeof str !== "string") {
    throw new TypeError(
      `The str argument should be a string, got ${typeof str}`
    );
  }

  if (str) {
    let urls = str.match(regexp);

    // Remove any enclosing characters that may overlap with URL characters
    if (urls) {
      urls = urls.map((url) => {
        if ((url.slice(0,1) == '\'' && url.slice(-1) == '\'') || (url.slice(0,1) == '(' && url.slice(-1) == ')')) {
          return url.slice(1, -1);
        } else {
          return url;
        }
      });
    };

    if (urls) {
      return lower ? urls.map((item) => item.toLowerCase()) : urls;
    } else {
      undefined;
    }
  } else {
    undefined;
  }
};
