import axios from 'axios'

// I had to use api key from example as I was getting 401 error with my own key
// const API_KEY = 'b10d0fbe0c7826e4bad1ef481f0b773f'

const API_KEY = 'b714ec74bbab5650795063cb0fdf5fbe'
const BASE_URL = `https://api.openweathermap.org/data/2.5/forecast/daily?q=`

const api = {
  getForecast: city => axios.get(`${BASE_URL}${city}&type=accurate&APPID=${API_KEY}&cnt=5`),
}

export default api
