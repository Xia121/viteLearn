import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import axios from 'axios'
import services from './services'
import './index.css'
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';

const app = createApp(App)

app.config.globalProperties.$services = services
app.config.globalProperties.$axios=axios

app
    .use(store)
    .use(services)
    .use(ElementPlus)
    .mount('#app')
