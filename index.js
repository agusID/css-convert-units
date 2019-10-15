// list of all units and their identifying string
const units = {
  dp: 'dp',
  pixel: 'px',
  sp: 'sp',
  mm: 'mm',
  inch: 'in',
  point: 'pt',
  remme: 'rem',
}

/**
 * @param  {any} unit
 * @return {number}
 */
const remmeUnit = (unit) => {
  let value = 0
  switch (unit) {
    case units.pixel:
      value = 0.0625 // 1px = 0.0625rem
      break
    case units.dp:
      value = 3.89189189 // 1dp = 3.89189189rem
      break
    case units.point:
      value = 0.0833333963255 // 1pt = 0.0833333963255rem
      break
    default:
      value = 0.0625
      break
  }
  return value
}

/**
 * @param  {any} unit
 * @return {number}
 */
const pixelUnit = (unit) => {
  let value = 0
  switch (unit) {
    case units.remme:
      value = 16 // 1rem = 16pixel (base)
      break
    case units.mm:
      value = 6.3 // 1mm = 6.30pixel
      break
    case units.inch:
      value = 160 // 1inch = 160.00pixel
      break
    case units.point:
      value = 2.22 // 1point = 2.22pixel
      break
    case units.dp:
    case units.sp:
    default:
      value = 1
      break
  }
  return value
}

/**
 * @param  {any} unit
 * @return {number}
 */
const dpUnit = (unit) => {
  let value = 0
  switch (unit) {
    case units.point:
    case units.pixel:
      value = 2.22 // 1 px = 1 pt = 2.22 dp
      break
    case units.inch:
      value = 160 // 1 inch = 160.0 dp
      break
    case units.mm:
      value = 6.3 // 1 mm = 6.3 dp
      break
    case units.remme:
    default:
      value = 0.2 // 1 rem = 0.2 dp
      break
  }
  return value
}

/**
 * @param  {any} unit
 * @return {number}
 */
const ptUnit = (unit) => {
  let value = 0
  switch (unit) {
    case units.remme:
      value = 12 // 1 rem = 12 pt
      break
    case units.mm:
      value = 1.83 // 1 mm = 1.83 pt
      break
    case units.inch:
      value = 72 // 1 in = 72 pt
      break
    case units.dp:
    case units.pixel:
    case units.sp:
    default:
      value = 0.45
      break
  }
  return value
}

/**
 * @param  {any} unit
 * @return {number}
 */
const spUnit = (unit) => {
  let value = 0
  switch (unit) {
    case units.remme:
      value = 16 // 1 rem = 16px (base 16px)
      break
    case units.point:
      value = 2.22 // 1 pt = 2.22 sp
      break
    case units.inch:
      value = 160 // 1 inch = 160.00 sp
      break
    case units.mm:
      value = 6.3 // 1 mm = 6.30 sp
      break
    case units.dp:
    case units.pixel:
    default:
      value = 1
      break
  }
  return value
}

/**
 * @param  {any} unit
 * @return {number}
 */
const mmUnit = (unit) => {
  let value = 0
  switch (unit) {
    case units.inch:
      value = 25.4 // 1 inch = 25.40 mm
      break
    case units.point:
      value = 0.35 // 1 pt = 0.35 mm
      break
    case units.pixel:
    case units.dp:
    case units.sp:
    default:
      value = 0.16
      break
  }
  return value
}

/**
 * @param  {any} unit
 * @return {number}
 */
const inchUnit = (unit) => {
  let value = 0
  switch (unit) {
    case units.mm:
      value = 0.04 // 1 mm = 0.04 inch
      break
    case units.dp:
    case units.pixel:
    case units.point:
    default:
      value = 0.01
      break
  }
  return value
}

/**
 * @param  {string | number} convertFrom
 * @param  {string|number} convertTo?
 * @param  {string} dpi?
 * @return {string}
 */
const convertUnit = (
  convertFrom,
  convertTo,
  dpi,
) => {
  if (!dpi) dpi = 'mdpi'
  if (!convertTo) convertTo = 'rem'
  let unitResult = convertTo

  // check convertTo param is exists
  const checkUnit = Object.values(units).find(x => x === convertTo)
  unitResult = checkUnit === undefined ? units.remme : convertTo
  const baseUnit = Number(
    convertFrom.toString().replace(/[^0-9.]+/g, ''),
  ) // get the numeric value
  let unitFrom = convertFrom.toString().replace(/[0-9.]/g, '') // get unit
  unitFrom = unitFrom.length === 0 ? 'px' : unitFrom
  let result = 0
  let addition = 1
  switch (unitResult) {
    case units.remme:
      // 1px = 0.0625rem with default pixel size is 16px
      addition = remmeUnit(unitFrom)
      break
    case units.dp:
      addition = dpUnit(unitFrom)
      break
    case units.pixel:
      addition = pixelUnit(unitFrom)
      break
    case units.sp:
      addition = spUnit(unitFrom)
      break
    case units.mm:
      addition = mmUnit(unitFrom)
      break
    case units.inch:
      addition = inchUnit(unitFrom)
      break
    case units.point:
      addition = ptUnit(unitFrom)
      break
  }
  result = baseUnit * addition
  return `${result}${unitResult}`
}

module.exports = convertUnit
