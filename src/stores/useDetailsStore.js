import { ref } from "vue"
import { defineStore } from "pinia"
import { getDetailsAPI } from "@/apis/publicdata.js"

export const useDetailsStore = defineStore('details', () => {
  const itemDetails = ref({})
  const getDetails = async (id) => {
    const res = await getDetailsAPI(id)
    itemDetails.value = res
  }
  return { itemDetails, getDetails }
},
  { persist: true }
)