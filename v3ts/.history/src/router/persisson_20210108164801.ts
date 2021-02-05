import router from './index'
import store from '../store/index'
import { getToken } from '../storage'
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
NProgress.configure({
    easing: 'ease', // 动画方式    
    speed: 500, // 递增进度条的速度    
    showSpinner: false, // 是否显示加载ico    
    trickleSpeed: 200, // 自动递增间隔    
    minimum: 0.3 // 初始化时的最小百分比
})
router.beforeEach(async (to, from, next) => {
    const token = getToken();
    if (token) {
        if (!store.getters.menus.length) {
            const menus = await store.dispatch('getMenus');
            menus.forEach((son: any) => router.addRoute(son));
            next({ ...to })
        } else {
            NProgress.start();
            next()
        }
    } else {
        if (to.path === '/login') {
            next()
        } else {
            next({ path: '/login' })
        }
    }
})
router.afterEach(() => {
	// 在即将进入新的页面组件前，关闭掉进度条
	NProgress.done()
})
