const extractUrls = require("./lib/extracUrls");

try {
  console.log(extractUrls(`Links https://www.google.com/ and https://www.google.co.uk/`));
} catch (e) {
  console.log(e);
}
