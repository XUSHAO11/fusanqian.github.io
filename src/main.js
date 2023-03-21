import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '@/assets/style.css'
import App from './App.vue'
// import App from '@/page/line/triplistAdd/bianji-03.vue'
import '@/static/iconfont.css'
import router from './router'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'


// import './assets/main.css'

const app = createApp(App)
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

app.use(createPinia())

app.use(pinia)
app.use(router)
app.use(ElementPlus)
app.mount('#app')




