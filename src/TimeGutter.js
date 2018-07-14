import cn from 'classnames'
import PropTypes from 'prop-types'
import React, { Component } from 'react'

import * as TimeSlotUtils from './utils/TimeSlots'
import { dateFormat } from './utils/propTypes'
import localizer from './localizer'
import TimeSlotGroup from './TimeSlotGroup'

export default class TimeGutter extends Component {
  static propTypes = {
    min: PropTypes.object.isRequired,
    max: PropTypes.object.isRequired,
    timeslots: PropTypes.number.isRequired,
    step: PropTypes.number.isRequired,
    getNow: PropTypes.func.isRequired,

    timeGutterFormat: dateFormat,
    culture: PropTypes.string,
    resource: PropTypes.string,
  }

  constructor(...args) {
    super(...args)

    const { min, max, timeslots, step } = this.props
    this.slotMetrics = TimeSlotUtils.getSlotMetrics({
      min,
      max,
      timeslots,
      step,
    })
  }

  componentWillReceiveProps(nextProps) {
    const { min, max, timeslots, step } = nextProps
    this.slotMetrics = this.slotMetrics.update({ min, max, timeslots, step })
  }

  renderSlot = (value, idx) => {
    if (idx !== 0) return null
    const { timeGutterFormat, getNow, culture } = this.props

    const isNow = this.slotMetrics.dateIsInGroup(getNow(), idx)
    return (
      <span className={cn('rbc-label', isNow && 'rbc-now')}>
        {localizer.format(value, timeGutterFormat, culture)}
      </span>
    )
  }

  render() {
    const { culture, resource } = this.props

    return (
      <div className="rbc-time-gutter rbc-time-column">
        {this.slotMetrics.groups.map((grp, idx) => {
          return (
            <TimeSlotGroup
              key={idx}
              group={grp}
              culture={culture}
              resource={resource}
              renderSlot={this.renderSlot}
            />
          )
        })}
      </div>
    )
  }
}
