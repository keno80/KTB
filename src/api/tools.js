import axios from '@/utils/https'

export default {
  getCategory() {
    return axios.get('/ktb/category')
  },
}
