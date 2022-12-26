import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/Login.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('@/views/404.vue')
    },
    {
      path: '/home',
      name: '主页',
      component: () => import('@/Layout/index.vue'),
      redirect: '/dashboard',
      children: [
        {
          path: '/dashboard',
          meta: {
            title: '首页',
            isMenu: true
          },
          component: () => import('@/components/dashboard/Dashboard.vue')
        },
        {
          path: '/docs',
          meta: {
            title: '文档',
            isMenu: true
          },
          component: () => import('@/components/docs/Docs.vue')
        },
        {
          path: '/permission',
          meta: {
            title: '权限',
            isMenu: true
          },
          redirect: '/permission/page',
          children: [
            {
              path: '/permission/page',
              meta: {
                title: '页面权限'
              },
              component: () => import('@/components/permission/page/Page.vue')
            },
            {
              path: '/permission/role',
              meta: {
                title: '角色权限'
              },
              component: () => import('@/components/permission/role/Role.vue')
            }
          ]
        }
      ]
    }
  ]
})

export default router
