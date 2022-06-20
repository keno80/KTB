import axios from 'axios'

const instance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 60000,
})

instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

export default instance