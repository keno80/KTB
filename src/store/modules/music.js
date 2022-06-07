const state = {
  trackIDList: [], // 歌曲列表
  index: 0, // 当前播放歌曲的 trackIDList 下标
}

const mutations = {
  setTracksIDist(state, trackIDList) {
    state.trackIDList = trackIDList
  },
  setIndex(state, index) {
    state.nowPlaying = index
  },
}

const actions = {
  setTracksIDist({ commit }, trackIDList) {
    commit('setTracksIDist', trackIDList)
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
