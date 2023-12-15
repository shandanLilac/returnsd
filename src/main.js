import { createApp } from "vue"
import App from './App.vue'
import router from "./router"
import '@/style/common.scss'
import { createPinia } from "pinia"
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import '@/assets/font/iconfont1/iconfont'
import '@/assets/font/iconfont1/iconfont.css'
import '@/assets/font/iconfont2/iconfont'
import '@/assets/font/iconfont2/iconfont.css'


const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

const app = createApp(App)

app.use(router)
app.use(pinia)

app.mount("#app")