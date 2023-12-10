import axios from "axios"
import { ElMessage } from "element-plus"
import 'element-plus/theme-chalk/el-message.css'
import { useUserStore } from "@/stores/useUserStore.js"
// import { ElLoading } from "element-plus"

const httpInstance = axios.create({
  baseURL: 'http://127.0.0.1:3007',
  timeout: 5000,
})

// let loadinstance = null
httpInstance.interceptors.request.use(config => {
  // loading
  // loadinstance = ElLoading.service({ fullscreen: true })
  // 可以在这里配置请求头
  const userStore = useUserStore()
  const token = userStore.userInfo.result?.token || ''
  if (token) config.headers.Authorization = token
  return config
}, e => Promise.reject(e)
)

httpInstance.interceptors.response.use(response => {
  // 2xx 范围内的状态码都会触发该函数。
  // 对响应数据做点什么
  // loadinstance.close()
  return response
}, (error) => {
  console.log(error)
  // 超出 2xx 范围的状态码都会触发该函数。
  // 对响应错误做点什么
  ElMessage({ type: 'warning', message: error.response.data.msg })
  return Promise.reject(error)
})


export default httpInstance