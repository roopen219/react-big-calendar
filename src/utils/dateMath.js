let moment

const UNIT_MAP = {
  century: 'years',
  decade: 'years',
}

const UNIT_MULTIPLIER = {
  century: num => num * 100,
  decade: num => num * 10,
}

const UNIT_DIVIDER = {
  century: num => num / 100,
  decade: num => num / 10,
}

export default {
  moment: null,
  setMoment(_moment) {
    moment = _moment
    this.moment = _moment
  },

  year(date) {
    return +moment(date).format('YYYY')
  },

  month(date) {
    return +moment(date).format('M') - 1
  },

  date(date) {
    return +moment(date).format('D')
  },

  day(date) {
    return +moment(date).format('d')
  },

  hours(date) {
    return +moment(date).format('H')
  },

  minutes(date) {
    return +moment(date).format('m')
  },

  seconds(date) {
    return +moment(date).format('s')
  },

  milliseconds(date) {
    return +moment(date).format('SSS')
  },

  startOf(date, unit) {
    return moment(date).startOf(unit)
  },

  endOf(date, unit) {
    return moment(date).endOf(unit)
  },

  add(date, num, unit) {
    return moment(date).add(
      UNIT_MULTIPLIER[unit] ? UNIT_MULTIPLIER[unit](num) : num,
      UNIT_MAP[unit] || unit
    )
  },

  subtract(date, num, unit) {
    return moment(date).subtract(
      UNIT_MULTIPLIER[unit] ? UNIT_MULTIPLIER[unit](num) : num,
      UNIT_MAP[unit] || unit
    )
  },

  max(date1, date2) {
    return moment.max(moment(date1), moment(date2))
  },

  min(date1, date2) {
    return moment.min(moment(date1), moment(date2))
  },

  eq(date1, date2, unit) {
    return moment(date1).isSame(moment(date2), unit)
  },

  neq(date1, date2, unit) {
    return !this.eq(date1, date2, unit)
  },

  lte(date1, date2, unit) {
    return moment(date1).isSameOrBefore(moment(date2), unit)
  },

  lt(date1, date2, unit) {
    return moment(date1).isBefore(moment(date2), unit)
  },

  gte(date1, date2, unit) {
    return moment(date1).isSameOrAfter(moment(date2), unit)
  },

  gt(date1, date2, unit) {
    return moment(date1).isAfter(moment(date2), unit)
  },

  inRange(date, min, max, unit) {
    unit = unit || 'day'
    return (
      (!min || this.gte(date, min, unit)) && (!max || this.lte(date, max, unit))
    )
  },

  diff(date1, date2, unit, asFloat) {
    let diff = Math.abs(moment(date1).diff(date2, UNIT_MAP[unit] || unit))
    diff = UNIT_DIVIDER[unit] ? UNIT_DIVIDER[unit](diff) : diff

    return asFloat ? diff : Math.round(diff)
  },
}
