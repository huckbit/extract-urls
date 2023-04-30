# extract-urls

[![npm version](https://badge.fury.io/js/extract-urls.svg)](https://badge.fury.io/js/extract-urls)

> Extract all urls recognizing http / https from a string and returns an array of urls.

## To install

### npm

```sh
npm i extract-urls
```

### yarn

```sh
yarn add extract-urls
```

### unpkg

```html
<script src="https://unpkg.com/extract-urls@1.3.4/index.js"></script>
```

## Usage

```javascript
const extractUrls = require("extract-urls");

let text = `You can read https://github.com/huckbit/extract-urls or https://www.npmjs.com/package/extract-urls for more info`;
let urls = extractUrls(text);

console.log(urls);
//=> ['https://github.com/huckbit/extract-urls', 'https://www.npmjs.com/package/extract-urls']
```

## Options

To lowercase urls use the option `true`:

```javascript
let text = `You can read HTTPS://GITHUB.COM/HUCKBIT/EXTRACT-URLS or https://www.npmjs.com/package/extract-urls for more info`;
let urls = extractUrls(text, true);
//=> ['https://github.com/huckbit/extract-urls', 'https://www.npmjs.com/package/extract-urls']
```

## Example application

[https://extracturls.huckbit.com/](https://extracturls.huckbit.com/)
