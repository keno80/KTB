import axios from 'axios'

const baseURL = ''

const instance = axios.create({
  baseURL,
  timeout: 60000,
})

instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

export default instance