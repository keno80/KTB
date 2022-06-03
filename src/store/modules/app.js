const state = {
  isCollapse: false,
  searchEngine: localStorage.searchEngine
    ? localStorage.searchEngine
    : 'Google',
  searchUrl: '',
  currentLocation: localStorage.currentLocation ? localStorage.currentLocation : '',
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
  setCurrentLocation(state, location) {
    state.currentLocation = location
    localStorage.currentLocation = location
  },
}

const actions = {
  toggleSideCollapse: ({ commit }, status) =>
    commit('toggleSideCollapse', status),

  setSearchEngine: ({ commit }, engine) => commit('setSearchEngine', engine),

  setSearchUrl: ({ commit }) => commit('setSearchUrl'),

  setCurrentLocation: ({ commit }, location) =>
    commit('setCurrentLocation', location),
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
}
