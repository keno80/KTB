const state = {
  isCollapse: false,
  searchEngine: localStorage.searchEngine
    ? localStorage.searchEngine
    : 'Google',
  searchUrl: '',
  currentPosition: '',
}

const mutations = {
  toggleSideCollapse(state, status) {
    state.isCollapse = status
  },
  setSearchEngine(state, engine) {
    state.searchEngine = engine
    localStorage.searchEngine = engine
  },
  setSearchUrl(state) {
    state.searchUrl =
      state.searchEngine === 'Baidu'
        ? 'https://www.baidu.com/s?wd='
        : `https://www.${state.searchEngine.toLowerCase()}.com/search?q=`
  },
  setCurrentPosition(state, position) {
    state.currentPosition = position
  },
}

const actions = {
  toggleSideCollapse: ({ commit }, status) =>
    commit('toggleSideCollapse', status),

  setSearchEngine: ({ commit }, engine) => commit('setSearchEngine', engine),

  setSearchUrl: ({ commit }) => commit('setSearchUrl'),

  setCurrentPosition: ({ commit }, position) =>
    commit('setCurrentPosition', position),
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
}
