import { ReduxActionTypes, DailyWeather } from 'common/types'

export interface ErrorData {
    cod: string
    message: string
}

export interface WeatherData {
    city: {
        id: number
        name: string,
        coord: {
            lon: number
            lat: number
        },
        country: string,
        population: number,
        timezone: number
    },
    cod: string
    message: number,
    cnt: number,
    list: DailyWeather[],
}

export interface ReduxState {
    error: ErrorData
    data: WeatherData
}

export interface ReduxInitialState {
    error: null
    data: null
}

export interface GetWeatherAction {
    type: ReduxActionTypes.getWeather
    payload: WeatherData
}

export interface ErrorAction {
    type: ReduxActionTypes.error,
    error: ErrorData
}

export declare type WeatherAction = GetWeatherAction | ErrorAction