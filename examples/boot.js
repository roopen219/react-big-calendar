let moment = require('moment-timezone')
let dateMath = require('react-big-calendar/lib/utils/dateMath')

moment.tz.setDefault(moment.tz.guess())
dateMath.setMoment(moment)

require('./App')
