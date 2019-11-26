import React, { Component } from 'react'
import { connect } from 'react-redux'
import keyBy from 'lodash.keyby'

import './DetailedForecast.scss'

class DetailedForecast extends Component {
  render() {
    const { dailyWeather } = this.props
    return (
      <div className="detailed-forecast-page">
        <h2>detailedforecast</h2>
        <div>{JSON.stringify(dailyWeather, 2, 2)}</div>
      </div>
    )
  }
}

const mapStateToProps = (state, currentProps) => {
  const weather = keyBy(state.weather.list, 'dt')
  const dayId = currentProps.match.params.id
  const dailyWeather = weather[dayId]

  return {
    dailyWeather,
  }
}

export default connect(
  mapStateToProps,
  null
)(DetailedForecast)
