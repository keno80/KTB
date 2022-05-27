import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'

import 'element-plus/theme-chalk/src/dark/css-vars.scss'
import '@/styles/css-vars.scss'
import 'uno.css'

createApp(App).use(router).mount('#app')