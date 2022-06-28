const state = {
  isCollapse: false, // 侧边栏
  searchEngine: localStorage.searchEngine
    ? localStorage.searchEngine
    : 'Google', // 搜索引擎
  searchUrl: '', // 搜索网址
  currentLocation: localStorage.currentLocation
    ? localStorage.currentLocation
    : '', // 当前定位
  weather: localStorage.weather ? JSON.parse(localStorage.weather) : {}, // 天气信息
  mode: sessionStorage.mode ? sessionStorage.mode : 'search', // 展示模式 - 搜索页面/工具页面
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
  setWeather(state, weather) {
    state.weather = weather
    localStorage.weather = JSON.stringify(weather)
  },
  setMode(state, mode) {
    state.mode = mode
    sessionStorage.mode = mode
  },
}

const actions = {
  toggleSideCollapse: ({ commit }, status) =>
    commit('toggleSideCollapse', status),

  setSearchEngine: ({ commit }, engine) => commit('setSearchEngine', engine),

  setSearchUrl: ({ commit }) => commit('setSearchUrl'),

  setCurrentLocation: ({ commit }, location) =>
    commit('setCurrentLocation', location),
  setWeather: ({ commit }, weather) => commit('setWeather', weather),
  setMode: ({ commit }, mode) => commit('setMode', mode),
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
}
