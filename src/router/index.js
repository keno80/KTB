// @unocss-include

import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/components/Layout/index.vue'
import Home from '@/views/Home/index.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Layout,
    meta: { title: '首页', icon: 'i-charm:home' },
    children: [
      {
        path: '/',
        name: 'Home',
        component: Home,
        meta: { title: '首页', icon: 'i-charm:home' },
      },
    ],
  },
  {
    path: '/tools',
    component: Layout,
    meta: { title: '工具', icon: 'i-mdi:toolbox-outline' },
    children: [
      {
        path: '/tools',
        name: 'Tools',
        component: () => import('@/views/Tools/index.vue'),
        meta: { title: '工具', icon: 'i-mdi:toolbox-outline' },
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
