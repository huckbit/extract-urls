"use strict";
/* to fix issue with 191e6eca187e59605d494de867f4537b24cf3bf1 added clean up for possible brackets when using markdown that is not possible to cover with the first regex  */

module.exports = (str, lower = false) => {
  const regexp = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()'@:%_\+.~#?!&//=]*)/gi;
  const bracketsRegexp = /[()]/g;

  if (typeof str !== "string") {
    throw new TypeError(`The str argument should be a string, got ${typeof str}`);
  }

  if (str) {
    let urls = str.match(regexp);
    if (urls) {
      return lower ? urls.map((item) => item.toLowerCase().replace(bracketsRegexp, "")) : urls.map((item) => item.replace(bracketsRegexp, ""));
    } else {
      undefined;
    }
  } else {
    undefined;
  }
};
