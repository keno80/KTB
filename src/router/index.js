// @unocss-include

import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/components/Layout/index.vue'
import Home from '@/views/Home/index.vue'

const routes = [
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'Home',
        component: Home,
        meta: { title: '首页', icon: 'i-charm:home' },
      },
    ],
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
