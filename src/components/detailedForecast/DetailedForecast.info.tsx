import * as React from 'react'

import icons from 'components/icons'
import { formatDate } from 'common/utils'
import { DailyWeather } from 'common/types'

import './DetailedForecast.info.scss'

interface Props {
  data: {
    weather: DailyWeather
    city: string
  }
}
export const DetailedForecastInfo: React.FC<Props> = ({ data }) => {
  const { weather, dt, temp, humidity } = data.weather

  const icon = icons[weather[0].icon]
  const date = formatDate(dt)
  const description = weather[0].description
  const minTemp = Math.round(temp.min)
  const maxTemp = Math.round(temp.max)
  const humidityInfo = humidity

  return (
    <div className="detailed-forecast" >
      <div className="detailed-forecast__header">
        {icon()}
        < p > {date} </p>
      </div>
      <p> {data.city} </p>
      <p> {description} </p>
      <p> min temp: {minTemp}&#8451; </p>
      <p> max temp: {maxTemp}&#8451; </p>
      <p> humidity: {humidityInfo} </p>
    </div>
  )
}
