const state = {
  isCollapse: false,
  searchEngine: localStorage.searchEngine ? localStorage.searchEngine : 'google',
}

const mutations = {
  toggleSideCollapse(state, status) {
    state.isCollapse = status
  },
  setSearchEngine(state, engine) {
    state.searchEngine = engine
    localStorage.searchEngine = engine
  }
}

const actions = {
  toggleSideCollapse: ({ commit }, status) => commit('toggleSideCollapse', status),
  setSearchEngine: ({ commit }, engine) => commit('setSearchEngine', engine)
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
}
