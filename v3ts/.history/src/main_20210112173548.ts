import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus';
// import 'element-plus/lib/theme-chalk/index.css';
import './style/element-variables.scss'
import common from './units/common'
import './router/persisson.ts'
import './mock'

createApp(App).use(store).use(router).use(ElementPlus).use(common).mount('#app')
