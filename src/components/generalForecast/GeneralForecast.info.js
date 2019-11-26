import React from 'react'
import history from 'common/history'

import { formatDate } from 'common/utils'

import './GeneralForecast.info.scss'

const GeneralForecastInfo = ({ data, icon, id }) => {
  const formattedDate = formatDate(data.dt)

  return (
    <div className="general-forecast" onClick={() => history.push(`/weather/${id}`)}>
      {icon()}
      <p>{formattedDate}</p>
    </div>
  )
}

export default GeneralForecastInfo
