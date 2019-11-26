import React from 'react'

import icons from 'components/icons'
import { formatDate } from 'common/utils'

import './DetailedForecast.info.scss'

const DetailedForecastInfo = ({ data, city }) => {
  const icon = icons[data.weather[0].icon]
  const date = formatDate(data.dt)
  const description = data.weather[0].description
  const minTemp = Math.round(data.temp.min)
  const maxTemp = Math.round(data.temp.max)
  const humidity = data.humidity

  return (
    <div className="detailed-forecast">
      {icon()}
      <p>{date}</p>
      <p>{city}</p>
      <p>{description}</p>
      <p>min temp: {minTemp}&#8451;</p>
      <p>max temp: {maxTemp}&#8451;</p>
      <p>humidity: {humidity}</p>
    </div>
  )
}

export default DetailedForecastInfo
