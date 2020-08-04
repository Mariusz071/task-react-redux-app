import * as React from 'react'
import { connect } from 'react-redux'
import { RouteComponentProps } from 'react-router-dom'

import { getDailyWeather } from './ducks/actions'
import { DetailedForecastInfo } from 'components/detailedForecast'
import { Loading } from 'components/loading'
import { DailyWeather, MatchParams } from 'common/types'

import './DetailedForecast.scss'

interface ReduxProps {
  dailyWeather: {
    weather: DailyWeather,
    city: string
  }
}


interface ActionHandlers {
  getDailyWeather: (city: string, id: string) => void
}
const _DetailedForecast: React.FC<ReduxProps & RouteComponentProps<MatchParams> & ActionHandlers> = ({ dailyWeather, getDailyWeather, match }) => {
  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    const load = async () => {
      await getDailyWeather(match.params.city, match.params.id)
      setLoading(false)
    }
    load()
  }, [getDailyWeather, match])

  return (
    <div className="detailed-forecast-page">
      {loading ? <Loading /> : <DetailedForecastInfo data={dailyWeather} />}
    </div>
  )
}

const mapDispatchToProps = {
  getDailyWeather,
}
const mapStateToProps = (state): { dailyWeather: { weather: DailyWeather, city: string } } => ({
  dailyWeather: state.dailyWeather.data,
})


export const DetailedForecast = connect(
  mapStateToProps,
  mapDispatchToProps
)(_DetailedForecast)

