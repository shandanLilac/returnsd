import httpInstance from "@/utils/httpInstance"

export const testAPI = () => {
  return httpInstance({
    url: 'home/category/head'
  })
}