"use strict";

module.exports = (str) => {
  const regexp = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/gi;

  if (typeof str !== "string") {
    throw new TypeError(
      `The str argument should be a string, got ${typeof str}`
    );
  }

  if (str) {
    return str
      .replace(/\n/g, " ")
      .split(" ")
      .filter((item) => item.match(regexp))
      .map((item) => item.toLowerCase());
  } else {
    undefined;
  }
};
