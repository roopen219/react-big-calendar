import dateMath from '../../src/utils/dateMath'

import moment from 'moment-timezone'

moment.tz.setDefault(moment.tz.guess())

dateMath.setMoment(moment)

var date = new Date(
  2014 /* year */,
  1 /* month */,
  18 /* day */,
  8 /* hour */,
  25 /* min */,
  30 /* sec */,
  5
) /* ms */

describe('dateMath', function() {
  test('year', () => {
    expect(dateMath.year(date)).toEqual(2014)
  })

  test('month', () => {
    expect(dateMath.month(date)).toEqual(1)
  })

  test('date', () => {
    expect(dateMath.date(date)).toEqual(18)
  })

  test('day', () => {
    expect(dateMath.day(date)).toEqual(2)
  })

  test('hours', () => {
    expect(dateMath.hours(date)).toEqual(8)
  })

  test('minutes', () => {
    expect(dateMath.minutes(date)).toEqual(25)
  })

  test('seconds', () => {
    expect(dateMath.seconds(date)).toEqual(30)
  })

  test('milliseconds', () => {
    expect(dateMath.milliseconds(date)).toEqual(5)
  })

  describe('startOf', function() {
    test('year', () => {
      expect(dateMath.startOf(date, 'year')).toEqual(
        new Date(2014, 0, 1, 0, 0, 0, 0)
      )
    })
  })

  describe('add', function() {
    test('century', () => {
      expect(dateMath.add(date, 1, 'century')).toEqual(
        new Date(2114, 1, 18, 8, 25, 30, 5)
      )
    })

    test('decade', () => {
      expect(dateMath.add(date, 1, 'decade')).toEqual(
        new Date(2024, 1, 18, 8, 25, 30, 5)
      )
    })

    test('year', () => {
      expect(dateMath.add(date, 1, 'year')).toEqual(
        new Date(2015, 1, 18, 8, 25, 30, 5)
      )
    })

    test('hours', () => {
      expect(dateMath.add(date, 1, 'hours')).toEqual(
        new Date(2014, 1, 18, 9, 25, 30, 5)
      )
    })
  })

  test('max', () => {
    expect(dateMath.max(date, new Date(2013, 0, 1, 0, 0, 0, 0))).toEqual(date)
  })

  test('min', () => {
    expect(dateMath.min(date, new Date(2015, 0, 1, 0, 0, 0, 0))).toEqual(date)
  })

  test('eq', () => {
    expect(dateMath.eq(date, new Date(2014, 0, 1, 0, 0, 0, 0), 'year')).toEqual(
      true
    )
  })

  test('neq', () => {
    expect(
      dateMath.neq(date, new Date(2013, 0, 1, 0, 0, 0, 0), 'year')
    ).toEqual(true)
  })

  test('lte', () => {
    expect(
      dateMath.lte(date, new Date(2014, 0, 1, 0, 0, 0, 0), 'year')
    ).toEqual(true)
    expect(
      dateMath.lte(date, new Date(2015, 0, 1, 0, 0, 0, 0), 'year')
    ).toEqual(true)
  })

  test('lt', () => {
    expect(dateMath.lt(date, new Date(2015, 0, 1, 0, 0, 0, 0), 'year')).toEqual(
      true
    )
  })

  test('gte', () => {
    expect(
      dateMath.gte(date, new Date(2014, 0, 1, 0, 0, 0, 0), 'year')
    ).toEqual(true)
    expect(
      dateMath.gte(date, new Date(2013, 0, 1, 0, 0, 0, 0), 'year')
    ).toEqual(true)
  })

  test('gt', () => {
    expect(dateMath.gt(date, new Date(2013, 0, 1, 0, 0, 0, 0), 'year')).toEqual(
      true
    )
  })

  test('inRange', () => {
    expect(
      dateMath.inRange(
        date,
        new Date(2013, 0, 1, 0, 0, 0, 0),
        new Date(2014, 5, 1, 0, 0, 0, 0)
      )
    ).toEqual(true)
    expect(
      dateMath.inRange(
        new Date(2013, 0, 1, 0, 0, 0, 0),
        date,
        new Date(2014, 5, 1, 0, 0, 0, 0)
      )
    ).toEqual(false)
    expect(
      dateMath.inRange(date, null, new Date(2014, 5, 1, 0, 0, 0, 0))
    ).toEqual(true)
    expect(
      dateMath.inRange(date, new Date(2013, 0, 1, 0, 0, 0, 0), null)
    ).toEqual(true)
  })

  describe('diff', function() {
    test('century', () => {
      expect(
        dateMath.diff(dateMath.subtract(date, 10, 'year'), date, 'century')
      ).toEqual(0)
      expect(
        dateMath.diff(dateMath.subtract(date, 100, 'year'), date, 'century')
      ).toEqual(1)
      expect(
        dateMath.diff(
          dateMath.subtract(date, 101, 'year'),
          date,
          'century',
          true
        )
      ).toEqual(1.01)
    })

    test('decade', () => {
      expect(
        dateMath.diff(dateMath.subtract(date, 125, 'month'), date, 'decade')
      ).toEqual(1)
    })

    test('milliseconds', () => {
      expect(dateMath.diff(date, date, 'milliseconds')).toEqual(0)
    })
  })
})
