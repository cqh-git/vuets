import {createApp} from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import ElementPlus from 'element-plus';
import VueI18n from '@/components/language/index'
// 主题换肤
import './style/element-variables.scss'
import common from './units/common'
import './router/persisson.ts'
import './mock'

import componentObj from '@/component';
import directiveObj from "@/directive";
import mittBus from '@/plugIns';

const app = createApp(App)
console.log(app,createApp)
app.config.globalProperties.mittBus = mittBus
//自定义组件
Object.entries(componentObj).forEach(([key, value]) => {
    app.component(key, value)
})
//自定义指令
Object.entries(directiveObj).forEach(([key, value]) => {
    app.directive(key, value)
})
app.use(store).use(router).use(VueI18n).use(ElementPlus).use(common).mount('#app')

// 初始化换肤功能
import {initThemeColor} from './units/themeColorClient'

initThemeColor()
