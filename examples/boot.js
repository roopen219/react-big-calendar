let moment = require('moment-timezone')
let dateMath = require('react-big-calendar/lib/utils/dateMath')

moment.tz.setDefault('Asia/Qatar')
dateMath.setMoment(moment)

require('./App')
