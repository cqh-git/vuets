import {createRouter, createWebHistory, createWebHashHistory, RouteRecordRaw} from 'vue-router'

export const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        redirect: '/home',
        components: {
            sideBar: () => import('../views/layout/sideBar.vue'),
            headBody: () => import('../views/layout/headBody.vue'),
        },
        meta: {
            type: 1,
            level: 1,
            title: '首页'
        },
        children: [
            {
                name: '/home',
                path: '/home',
                component: () => import('../views/home/home.vue'),
                meta: {
                    type: 1,
                    level: 1,
                    title: '首页'
                },
            }
        ]
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/login/login.vue'),
        meta: {title: ''}
    },
    {
        path: '/404',
        name: '404',
        component: () => import('../views/404/404.vue'),
        meta: {title: ''}
    }
]

const router = createRouter({
    // history: createWebHistory(process.env.BASE_URL),
    // history: createWebHistory(),
    history: createWebHashHistory(),
    routes
})

export default router
