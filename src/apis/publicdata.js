import httpInstance from "@/utils/httpInstance"

export const getChatroomTagsAPI = () => {
  return httpInstance({
    url: '/api/tags'
  })
}

export const getDetailsAPI = (id, pagnum = 1) => {
  return httpInstance({
    url: '/api/details',
    params: {
      id,
      pagnum
    }
  })
}

// chatroom 列表数据
export const getTopicListAPI = (id, pagnum = 1) => {
  return httpInstance({
    url: '/api/toplist',
    params: {
      id,
      pagnum
    }
  })
}