import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus';
import VueI18n from '@/components/language/index'
// 主题换肤
import './style/element-variables.scss'
// import 'element-plus/lib/theme-chalk/index.css';
import common from './units/common'
import './router/persisson.ts'
import './mock'
// 覆盖element-ui sass变量的文件夹

// 主题换肤
import { initThemeColor } from './units/themeColorClient'
initThemeColor()

createApp(App).use(store).use(router).use(VueI18n).use(ElementPlus).use(common).mount('#app')
