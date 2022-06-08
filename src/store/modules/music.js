const state = {
  tracksList: [], // 歌曲列表
  index: localStorage.index ? localStorage.index : 0, // 当前播放歌曲的 trackIDList 下标
}

const mutations = {
  setTracksList(state, tracksList) {
    state.tracksList = tracksList
  },
  setIndex(state, index) {
    state.index = index
    localStorage.index = index
  },
}

const actions = {
  setTracksList({ commit }, tracksList) {
    commit('setTracksList', tracksList)
  },
  setIndex({ commit }, index) {
    commit('setIndex', index)
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
}
