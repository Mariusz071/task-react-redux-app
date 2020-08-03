interface Weather {
    id: number,
    main: string,
    description: string,
    icon: string
}

export interface RouteElement {
    path: string
    component: any,
    exact?: boolean
}

export enum ReduxActionTypes {
    getWeather = 'GET_WEATHER',
    error = 'ERROR',
    getDailyWeather = 'GET_DAILY_WEATHER'
}

export interface DailyWeather {
    dt: number,
    sunrise: number,
    sunset: number,
    temp: {
        day: number,
        min: number,
        max: number,
        night: number,
        eve: number,
        morn: number
    },
    feels_like: {
        day: number,
        night: number,
        eve: number,
        morn: number
    },
    pressure: number,
    humidity: number,
    weather: Weather[],
    speed: number,
    deg: number,
    clouds: number,
    pop: number,
    rain?: number
}

export declare type RoutingConfig = RouteElement[]