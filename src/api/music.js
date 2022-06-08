import axios from 'axios'

const baseURL = 'https://musicapi.chkai.xyz'

export default {
  getToplist() {
    return axios.get(`${baseURL}/toplist`)
  },
  getPlaylistDetail(id) {
    return axios.get(`${baseURL}/playlist/detail?id=${id}`)
  },
  getSongDetail(id) {
    return axios.get(`${baseURL}/song/detail?ids=${id}`)
  },
  getSongUrl(id) {
    return axios.get(`${baseURL}/song/url?id=${id}`)
  }
}
