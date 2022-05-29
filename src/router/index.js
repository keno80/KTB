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
  },
  {
    path: '/test',
    component: Layout,
    redirect: '/test/index',
    meta: { title: '测试页', icon: 'i-charm:cloud' },
    children: [
      {
        path: '/test/index',
        name: 'Test',
        component: () => import('@/views/Test/index.vue'),
        meta: { title: '测试页1', icon: 'i-charm:cloud' },
      },
      {
        path: '/test2/index',
        name: 'Test2',
        component: () => import('@/views/Test/index.vue'),
        meta: { title: '测试页2', icon: 'i-charm:cloud' },
      },
      {
        path: '/test3/index',
        name: 'Test3',
        component: () => import('@/views/Test/index.vue'),
        meta: { title: '测试页3', icon: 'i-charm:cloud' },
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
