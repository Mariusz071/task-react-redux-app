import { ReduxActionTypes } from "common/types";

import { DailyWeather } from 'common/types'

export interface GetDailyWeatherAction {
    type: ReduxActionTypes.getDailyWeather
    payload: {
        weather: DailyWeather
        city: string
    }
}