# Convert Unit Library

[![flow](https://img.shields.io/badge/%20-flow-green.svg)](https://flow.org/)
[![javascript](https://img.shields.io/badge/%20-javascript-yellow.svg)](https://flow.org/)

Convert unit is a library for convert unit

### Getting Started

Use the `npm` or `yarn` to install dependencies.

```
$ npm install
```
 or
```
$ yarn install
```



flow check
```
$ npm run flow:check
```
----
in `package.json`
```
"flow:build": "flow-remove-types ./public/src/lib/convert-unit/flow-typed -d ./public/src/lib/convert-unit/ --all --pretty",
```

This script will get all files from `./public/src/lib/convert-unit/flow-typed`, remove types and output the resulting files into `./public/lib/convert-unit` folder. and then please run:
```
$ npm run flow:build
```
```
$ npm start
```
---
Here is a description of an imaginary function convertUnit :
```javascript
convertUnit(convertFrom, [convertTo], [dpi])
```
### List of units support :

- density independen pixel (dp)
- pixel (px)
- scale independen pixel (sp)
- millimeter (mm)
- inch (in)
- point (pt)
- remme (rem)

`convertTo` & `dpi` are optional parameters, `convertTo` will be filled by default with **rem** and
`dpi` will be default with **mdpi**.

check `./index.js` file:
```javascript
const convertUnit = require('./public/src/lib/convert-unit')
```
*Code Examples:*
```javascript
convertUnit('1pt', 'px', 'mdpi') // output : 2.22px
```
```javascript
convertUnit('1pt', 'px') // output : 2.22px
```
```javascript
convertUnit('1px', 'rem', 'mdpi') // output : 0.0625rem
```
```javascript
convertUnit('1px', 'rem') // output : 0.0625rem (mdpi is default dpi)
```
```javascript
convertUnit('1px') // output : 0.0625rem (rem is default unit)
```
## Authors

* **Dwi Agustianto** - [convert-unit-library](https://github.com/agusID/convert-unit-library)

See also the list of [contributors](https://github.com/agusID/convert-unit/contributors) who participated in this project.