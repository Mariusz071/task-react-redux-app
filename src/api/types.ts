import { DailyWeather } from 'common/types'

interface Error {
    cod: string
    message: string
}

export interface WeatherResponse {
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

interface Weather {
    error: Error
    data: WeatherResponse

}

export interface ReduxState {
    weather: Weather
}