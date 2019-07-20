const convertUnit = require('./public/src/lib/convert-unit')

convertUnit('1pt', 'px', 'mdpi') // output : 2.22px
convertUnit('1pt', 'px') // output : 2.22px
convertUnit('1px', 'rem', 'mdpi') // output : 0.0625rem
convertUnit('1px', 'rem') // output : 0.0625rem (mdpi is default dpi)
convertUnit('1px') // output : 0.0625rem (rem is default unit)