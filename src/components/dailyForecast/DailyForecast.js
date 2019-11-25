import React from 'react'
import { format} from 'date-fns'

import './DailyForecast.scss'

const DailyForecast = props => {
  const { data, icon } = props
  const date = new Date(data.dt*1000)
  const formattedDate = format(date, 'EEEE, LLL d')

  return (
    <div className="daily-forecast">
      {icon()}
      <p>{formattedDate}</p>
    </div>
  )
}

export default DailyForecast
