import Calendar from './Calendar'
import EventWrapper from './EventWrapper'
import BackgroundWrapper from './BackgroundWrapper'
import { set as setLocalizer } from './localizer'
import momentLocalizer from './localizers/moment'
import globalizeLocalizer from './localizers/globalize'
import move from './utils/move'
import { views, navigate } from './utils/constants'
import dateMath from './utils/dateMath'

Object.assign(Calendar, {
  setLocalizer,
  globalizeLocalizer,
  setMoment: dateMath.setMoment,
  momentLocalizer,
  Views: views,
  Navigate: navigate,
  move,
  components: {
    eventWrapper: EventWrapper,
    dayWrapper: BackgroundWrapper,
    dateCellWrapper: BackgroundWrapper,
  },
})

export default Calendar
