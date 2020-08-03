import axios from 'axios'
import { WeatherResponse } from './types'

const API_KEY = 'b714ec74bbab5650795063cb0fdf5fbe'
const BASE_URL = `https://api.openweathermap.org/data/2.5/forecast/daily?q=`

const api = {
  getForecast: city => axios.get<WeatherResponse>(`${BASE_URL}${city}&type=accurate&units=metric&APPID=${API_KEY}&cnt=5`),
}

export default api
