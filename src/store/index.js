import { createStore } from 'vuex'
import app from './modules/app'
import music from './modules/music'

const store = createStore({
  modules: {
    app,
    music
  },
})

export default store
