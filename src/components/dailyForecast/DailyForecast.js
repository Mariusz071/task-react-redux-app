import React from 'react'
import { format } from 'date-fns'
import history from 'common/history'

import './DailyForecast.scss'

const DailyForecast = props => {
  const { data, icon, id } = props
  const date = new Date(data.dt * 1000)
  const formattedDate = format(date, 'EEEE, LLL d')

  return (
    <div className="daily-forecast" onClick={() => history.push(`/weather/${id}`)}>
      {icon()}
      <p>{formattedDate}</p>
    </div>
  )
}

export default DailyForecast
