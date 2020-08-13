"use strict";

module.exports = (str) => {

  const regexp = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/gi;

  if (typeof str !== "string") {

    throw new TypeError(`The str argument should be a string, got ${typeof str}`);

  }

  if (str) {

    //replace new line with space, split on space then filter elements in the array that match the regular expression
    return str.replace(/\n/g, " ").split(" ").filter(item => item.match(regexp).toLowerCase());

  } else {

    undefined;

  }

};