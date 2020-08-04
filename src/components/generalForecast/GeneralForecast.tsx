import * as React from 'react'
import { history } from 'common/history'

import { formatDate } from 'common/utils'

import './GeneralForecast.scss'
import { DailyWeather } from 'common/types'

interface Props {
  data: DailyWeather
  icon: () => React.ReactNode
  id: number
  city: string
}

export const GeneralForecast: React.FC<Props> = ({ data, icon, id, city }) => {
  const formattedDate = formatDate(data.dt)
  return (
    <div className="general-forecast" onClick={() => history.push(`/${city}/${id}`)}>
      {icon()}
      <p>{formattedDate}</p>
    </div>
  )
}