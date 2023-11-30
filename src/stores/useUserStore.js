import { ref } from "vue"
import { defineStore } from "pinia"
import { loginAPI } from "@/apis/user"

export const useUserStore = defineStore('userInfo', () => {
  const userInfo = ref({})
  const login = async (uname, pwd, captcha, uuid) => {
    const res = await loginAPI(uname, pwd, captcha, uuid)
    userInfo.value = res.data
  }
  const cleanStore = () => {
    userInfo.value = {}
  }
  return { userInfo, login, cleanStore }
},
  { persist: true }
)
