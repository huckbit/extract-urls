# extract-urls

> Extract all urls recognizing http / https from a string and returns an array of urls.

## To install

```bash
npm i extract-urls
```

## Usage

```javascript
const extractUrls = require("extract-urls");

let text = `You can read https://github.com/huckbit/extract-urls or https://www.npmjs.com/package/extract-urls for more info`;
let urls = extractUrls(text);

console.log(urls);
//=> ['https://github.com/huckbit/extract-urls', 'https://www.npmjs.com/package/extract-urls']
```
