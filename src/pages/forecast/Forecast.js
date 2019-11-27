import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getWeather } from './ducks/actions'
import get from 'lodash.get'

import Loading from 'components/loading'
import GeneralForecast from 'components/generalForecast'

import icons from 'components/icons'

import './Forecast.scss'

class Forecast extends Component {
  state = {
    loading: true,
  }

  componentDidMount() {
    this.load()
  }

  load = async () => {
    const { getWeather, match, history } = this.props
    this.setState({ loading: true, city: match.params.city })

    await getWeather(match.params.city).catch(err => {
      history.push('/')
    })
    this.setState({ loading: false })
  }

  render() {
    const { weather, match } = this.props
    const { loading, city } = this.state

    if (city !== match.params.city) {
      this.load()
    }

    return (
      <div className="forecast-page">
        {loading ? (
          <Loading />
        ) : (
          <>
            <h2 className="forecast-page__header">{weather.city.name}</h2>
            <div className="forecast-page__forecast">
              {weather.list.map((day, key) => {
                const iconCode = day.weather[0].icon
                const icon = icons[iconCode]
                return <GeneralForecast data={day} city={weather.city.name} icon={icon} key={key} id={day.dt} />
              })}
            </div>
          </>
        )}
      </div>
    )
  }
}

const mapDispatchToProps = {
  getWeather,
}

const mapStateToProps = state => {
  return {
    weather: get(state, 'weather.data'),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Forecast)
