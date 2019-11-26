import React, { Component } from 'react'
import { connect } from 'react-redux'
import keyBy from 'lodash.keyby'
import get from 'lodash.get'

import DetailedForecastInfo from 'components/detailedForecast'

import './DetailedForecast.scss'

class DetailedForecast extends Component {
  constructor(props) {
    super(props)
    const { history, dailyWeather } = props
    if (!dailyWeather) history.replace('/')
  }

  render() {
    const { dailyWeather, city } = this.props

    if (!dailyWeather) return null

    return (
      <div className="detailed-forecast-page">
        <DetailedForecastInfo data={dailyWeather} city={city} />
      </div>
    )
  }
}

const mapStateToProps = (state, currentProps) => {
  const weather = keyBy(state.weather.list, 'dt')
  const dayId = currentProps.match.params.id
  return {
    dailyWeather: get(weather, dayId),
    city: get(state, 'weather.city.name'),
  }
}

export default connect(mapStateToProps, null)(DetailedForecast)
