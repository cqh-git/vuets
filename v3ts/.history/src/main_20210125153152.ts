import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus';
import VueI18n from 'vue-i18n'
// import 'element-plus/lib/theme-chalk/index.css';
// import './style/element-variables.scss'
import common from './units/common'
import './router/persisson.ts'
import './mock'
// 覆盖element-ui sass变量的文件夹

const i18n = new VueI18n({
  locale: 'zh-CN',    // 语言标识
  messages: {
    'zh-CN': require('@/components/language/lang/zh'),   // 通过require引入中文语言包
    'en-US': require('./lang/en')    // 通过require引入英文语言包
  }
})

// 主题换肤
import './style/element-variables.scss'

// 主题换肤
import { initThemeColor } from './themeColorClient'
initThemeColor()

createApp(App).use(store).use(router).use(VueI18n).use(ElementPlus).use(common).mount('#app')
