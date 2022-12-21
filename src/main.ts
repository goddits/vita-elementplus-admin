import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import './styles/main.scss'

import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)
const Pinia = createPinia()

// icon图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(Pinia).use(ElementPlus).use(router).mount('#app')
