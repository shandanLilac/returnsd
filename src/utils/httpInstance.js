import axios from "axios"

const httpInstance = axios.create({
  // baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
  baseURL: 'http://127.0.0.1',
  timeout: 5000,
})

httpInstance.interceptors.request.use(config => {
  // 可以在这里配置请求头
  return config
}, e => Promise.reject(e)
)

httpInstance.interceptors.response.use(res => res.data, e => {
  return Promise.reject(e)
})

export default httpInstance