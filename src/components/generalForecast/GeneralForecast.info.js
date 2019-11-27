import React from 'react'
import history from 'common/history'

import { formatDate } from 'common/utils'

import './GeneralForecast.info.scss'

const GeneralForecastInfo = ({ data, icon, id, city }) => {
  const formattedDate = formatDate(data.dt)
  return (
    <div className="general-forecast" onClick={() => history.push(`/${city}/${id}`)}>
      {icon()}
      <p>{formattedDate}</p>
    </div>
  )
}

export default GeneralForecastInfo
