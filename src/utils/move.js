import invariant from 'invariant'
import { navigate } from './constants'
import VIEWS from '../Views'
import dateMath from './dateMath'

export default function moveDate(View, { action, date, today, ...props }) {
  View = typeof View === 'string' ? VIEWS[View] : View

  switch (action) {
    case navigate.TODAY:
      date = today || dateMath.moment()
      break
    case navigate.DATE:
      break
    default:
      invariant(
        View && typeof View.navigate === 'function',
        'Calendar View components must implement a static `.navigate(date, action)` method.s'
      )
      date = View.navigate(date, action, props)
  }
  return date
}
