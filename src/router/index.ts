import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      meta: {
        title: '登录'
      },
      component: () => import('@/views/Login.vue')
    },
    {
      path: '/home',
      name: '主页',
      meta: {
        title: '主页'
      },
      component: () => import('@/Layout/index.vue'),
      redirect: '/dashboard',
      children: [
        {
          path: '/dashboard',
          meta: {
            title: '首页'
          },
          component: () => import('@/components/dashboard/index.vue')
        }
      ]
    }
  ]
})

export default router
