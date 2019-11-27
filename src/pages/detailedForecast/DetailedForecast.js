import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getWeather } from './ducks/actions'
import keyBy from 'lodash.keyby'
import get from 'lodash.get'

import DetailedForecastInfo from 'components/detailedForecast'
import Loading from 'components/loading'

import './DetailedForecast.scss'

class DetailedForecast extends Component {
  state = {
    loading: true,
  }

  async componentDidMount() {
    const { getWeather, match } = this.props
    await getWeather(match.params.city, match.params.id)
    this.setState({ loading: false })
  }

  render() {
    const { dailyWeather, city } = this.props
    const { loading } = this.state

    return (
      <div className="detailed-forecast-page">
        {loading ? <Loading /> : <DetailedForecastInfo data={dailyWeather} city={city} />}
      </div>
    )
  }
}

const mapDispatchToProps = {
  getWeather,
}
const mapStateToProps = (state, currentProps) => {
  const weather = keyBy(get(state, 'weather.data.list'), 'dt')
  const dayId = currentProps.match.params.id
  return {
    dailyWeather: get(weather, dayId),
    city: get(state, 'weather.data.city.name'),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DetailedForecast)
