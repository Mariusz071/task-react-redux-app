import React, { Component } from 'react'
import { connect } from 'react-redux'

import DailyForecast from 'components/dailyForecast'
import icons from 'components/icons'

import './Forecast.scss'

class Forecast extends Component {
  componentWillMount() {
    //redirects to / when there is no weather forecast loaded to the state
    const { history, weather } = this.props
    if (!weather.city) history.push('/')
  }



  render() {
    const { weather } = this.props
    const { city, list } = weather

    //prevents from crashing when gointg straight to /weather url without typing any city
    const isLoaded = !!Object.keys(weather).length

    return (
      <div className="forecast-page">
        {isLoaded && (
          <>
            <h2 className="forecast-page__header">{city.name}</h2>
            <div className="forecast-page__forecast">
              {list.map((day, key) => {
                const iconCode = day.weather[0].icon
                const icon = icons[iconCode]
                return <DailyForecast data={day} icon={icon} key={key} />
              })}
            </div>
          </>
        )}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  weather: state.weather
})
export default connect(mapStateToProps, null)(Forecast)
