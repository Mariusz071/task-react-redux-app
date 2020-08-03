import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getDailyWeather } from './ducks/actions'
import { DetailedForecastInfo } from 'components/detailedForecast'
import Loading from 'components/loading'

import './DetailedForecast.scss'

class DetailedForecast extends Component {
  state = {
    loading: true,
  }

  async componentDidMount() {
    const { getDailyWeather, match } = this.props
    await getDailyWeather(match.params.city, match.params.id)
    this.setState({ loading: false })
  }

  render() {
    const { dailyWeather } = this.props
    const { loading } = this.state

    return (
      <div className="detailed-forecast-page">
        {loading ? <Loading /> : <DetailedForecastInfo data={dailyWeather} />}
      </div>
    )
  }
}

const mapDispatchToProps = {
  getDailyWeather,
}
const mapStateToProps = (state, currentProps) => ({
  dailyWeather: state.dailyWeather.data,
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DetailedForecast)
