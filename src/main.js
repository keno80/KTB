import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'

import 'element-plus/theme-chalk/src/dark/css-vars.scss'
import '@/styles/css-vars.scss'
import 'uno.css'

createApp(App).use(router).use(store).mount('#app')
