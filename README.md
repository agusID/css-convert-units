# CSS Convert Units
[![Build Status](https://img.shields.io/travis/agusID/css-convert-units/master)](https://img.shields.io/travis/agusID/css-convert-units/master)
[![npm](https://img.shields.io/npm/v/css-convert-units?style=flat-square)](https://www.npmjs.com/package/css-convert-units)
[![npm downloads](https://img.shields.io/npm/dt/css-convert-units?style=flat-square)](https://www.npmjs.com/package/css-convert-units)
[![GitHub license](https://img.shields.io/github/license/agusID/css-convert-units.svg?style=flat-square)](https://github.com/agusID/css-convert-units/blob/master/LICENSE)

**CSS Convert Units** is a library for convert css unit to another unit.

### Getting Started

Use the `npm` or `yarn` to install dependencies.

```bash
$ npm i css-unit-converter
```
 or
```bash
$ yarn add css-unit-converter
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
let convertUnit = require('css-convert-units')
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
## Maintainers
<p>
  <a href="https://github.com/agusID"><img 
  width="50" src="https://avatars3.githubusercontent.com/u/13955708?s=460&v=4" alt="Dwi Agustianto">
  </a>
</p>

**Dwi Agustianto** - [@agusID](https://github.com/agusID)

See also the list of [contributors](https://github.com/agusID/css-convert-units/contributors) who participated in this project.