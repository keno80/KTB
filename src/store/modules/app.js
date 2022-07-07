const state = {
  isCollapse: false, // 侧边栏
  searchEngine: localStorage.searchEngine
    ? localStorage.searchEngine
    : 'Google', // 搜索引擎
  searchIcon: localStorage.searchIcon
    ? localStorage.searchIcon
    : 'i-ant-design:google-outlined', // 搜索图标
  searchUrl: '', // 搜索网址
  currentLocation: localStorage.currentLocation
    ? localStorage.currentLocation
    : '', // 当前定位
  weather: localStorage.weather ? JSON.parse(localStorage.weather) : {}, // 天气信息
  mode: sessionStorage.mode ? sessionStorage.mode : 'search', // 展示模式 - 搜索页面/工具页面
  showWidgets: false,
}

const mutations = {
  toggleSideCollapse(state, status) {
    state.isCollapse = status
  },
  setSearchEngine(state, engine) {
    state.searchEngine = engine.name
    state.searchIcon = engine.icon
    localStorage.searchEngine = engine.name
    localStorage.searchIcon = engine.icon
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
  setWidgets(state) {
    state.showWidgets = !state.showWidgets
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
  setWidgets: ({ commit }) => commit('setWidgets'),
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
}
