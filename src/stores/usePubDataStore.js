import { ref } from "vue"
import { defineStore } from "pinia"
import { getChatroomTagsAPI } from "@/apis/publicdata.js"

export const usePubDataStore = defineStore('pubdata', () => {
  const pubdata = ref([])
  // const topics = ref({})

  const getChatroomTags = async () => {
    const res = await getChatroomTagsAPI()
    pubdata.value = res
  }
  return { pubdata, getChatroomTags }
},
  { persist: true }
)