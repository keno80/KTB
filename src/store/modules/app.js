const state = {
  isCollapse: false,
}

const mutations = {
  toggleSideCollapse(state, status) {
    state.isCollapse = status
  },
}

const actions = {
  toggleSideCollapse: ({ commit }, status) => commit('toggleSideCollapse', status),
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
}
