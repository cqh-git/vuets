import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    redirect: '/home',
    components: {
      sideBar: () => import('../views/layout/sideBar.vue'),
      headBody: () => import('../views/layout/headBody.vue'),
    },
    children: [
      {
        name: '/home',
        path: '/home',
        component: () => import('../views/home/home.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/login.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
