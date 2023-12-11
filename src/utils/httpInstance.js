import axios from "axios"
import { ElMessage } from "element-plus"
import 'element-plus/theme-chalk/el-message.css'
import { useUserStore } from "@/stores/useUserStore.js"
import { ElLoading } from "element-plus"
import 'element-plus/theme-chalk/el-loading.css'
import { optionsObj } from "@/assets/ElLoading/loading-option"

const httpInstance = axios.create({
  baseURL: 'http://127.0.0.1:3007',
  timeout: 20000,
})

let loadingstance = null
httpInstance.interceptors.request.use(config => {
  loadingstance = ElLoading.service(optionsObj)
  const userStore = useUserStore()
  const token = userStore.userInfo.result?.token || ''
  if (token) config.headers.Authorization = token
  return config
}, e => Promise.reject(e)
)

httpInstance.interceptors.response.use(response => {
  loadingstance.close()
  return response
}, (error) => {
  // 超出 2xx 范围的状态码都会触发该函数。
  // 对响应错误做点什么
  ElMessage({ type: 'warning', message: error.response.data.msg })
  loadingstance.close()
  return Promise.reject(error)
})


export default httpInstance