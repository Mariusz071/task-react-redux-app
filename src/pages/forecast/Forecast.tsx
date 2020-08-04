import * as React from 'react'
import { connect } from 'react-redux'
import { getWeather } from './ducks/actions'
import { RouteComponentProps } from 'react-router-dom'
import get from 'lodash.get'

import Loading from 'components/loading'
import GeneralForecast from 'components/generalForecast'
import { WeatherData } from './types'
import { MatchParams } from 'common/types'
import icons from 'components/icons'

import './Forecast.scss'





interface ReduxProps {
  weather: WeatherData
}

interface ActionHandlers {
  getWeather: (city: string) => any
}

const _Forecast: React.FC<ReduxProps & RouteComponentProps<MatchParams> & ActionHandlers> = ({ weather, match, getWeather, history }) => {
  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    const load = async () => {
      await getWeather(match.params.city)
      setLoading(false)
    }
    load()
  }, [getWeather, history, match.params.city])

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

const mapDispatchToProps = {
  getWeather,
}

const mapStateToProps = (state): { weather: WeatherData } => ({
  weather: get(state, 'weather.data'),
})

export const Forecast = connect(mapStateToProps, mapDispatchToProps)(_Forecast)