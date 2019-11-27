import React, { Component } from 'react'
import { connect } from 'react-redux'
import get from 'lodash.get'

import icons from 'components/icons'
import GeneralForecast from 'components/generalForecast'

import './Forecast.scss'

class Forecast extends Component {
  constructor(props) {
    super(props)
    const { history, weather } = props
    const isLoaded = weather !== null
    if (!isLoaded) return history.push('/')
  }

  render() {
    const { weather } = this.props
    const isLoaded = weather !== null
    if (!isLoaded) return null
    const { city, list } = weather

    return (
      <div className="forecast-page">
        <h2 className="forecast-page__header">{city.name}</h2>
        <div className="forecast-page__forecast">
          {list.map((day, key) => {
            const iconCode = day.weather[0].icon
            const icon = icons[iconCode]
            return <GeneralForecast data={day} icon={icon} key={key} id={day.dt} />
          })}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    weather: get(state, 'weather.data'),
    state: state,
  }
}

export default connect(mapStateToProps, null)(Forecast)
