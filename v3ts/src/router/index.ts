import {createRouter, createWebHistory, createWebHashHistory, RouteRecordRaw} from 'vue-router'

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
    },
    {
        path: '/404',
        name: '404',
        component: () => import('../views/404/404.vue')
    }
]

const router = createRouter({
    // history: createWebHistory(process.env.BASE_URL),
    // history: createWebHistory(),
    history: createWebHashHistory(),
    routes
})

export default router
