import axios from 'axios'

const API_KEY = 'b10d0fbe0c7826e4bad1ef481f0b773f'
const BASE_URL = `https:api.openweathermap.org/data/2.5/weather?q=`

// api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=b10d0fbe0c7826e4bad1ef481f0b773f
// api.openweathermap.org/data/2.5/weather?q=london,uk&APPID=b10d0fbe0c7826e4bad1ef481f0b773f

const api = {
  getForecast: city => axios.get(`${BASE_URL}${city},uk&APPID=${API_KEY}`),
}

export default api
