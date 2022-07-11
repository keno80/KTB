import axios from '@/utils/https'

const QLocationApi = 'https://geoapi.qweather.com'
const QweatherApi = 'https://devapi.qweather.com'
const AmapApi = 'https://restapi.amap.com/'

export default {
  getCategory() {
    return axios.get('/ktb/category')
  },

  // 高德地图IP定位
  getAmapIp(data) {
    return axios.get(`${AmapApi}/v3/ip?key=${data.key}`)
  },

  // 和风天气获取定位城市的信息
  getQweatherCity(data) {
    return axios.get(
      `${QLocationApi}/v2/city/lookup?key=${data.key}&location=${data.location}`
    )
  },

  // 和风天气获取天气信息
  getQweather(data) {
    return axios.get(
      `${QweatherApi}/v7/weather/now?key=${data.key}&location=${data.location}`
    )
  },
}
