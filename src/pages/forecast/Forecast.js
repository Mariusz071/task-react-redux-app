import React, { Component } from 'react'
import { connect } from 'react-redux'

import DailyForecast from 'components/dailyForecast'

class Forecast extends Component {
  componentWillMount() {
    const { history, weather } = this.props
    if (!weather.city) history.push('/')
  }
  render() {
    const { weather } = this.props
    const { city, list } = weather

    return (
      <div className="forecast-page">
        {city && (
          <>
            <h2>{city.name}</h2>
            {list.map((day, key) => {
              return <DailyForecast data={day} />
            })}
          </>
        )}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  weather: state.weather,
})
export default connect(
  mapStateToProps,
  null
)(Forecast)
