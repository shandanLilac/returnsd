import httpInstance from "@/utils/httpInstance"

// 发布评论
export const issueTheViewAPI = (a, b, c) => {
  return httpInstance({
    url: '/auth/issue',
    method: 'post',
    data: {
      cate_id: a,
      topic_id: b,
      content: c
    }
  })
}

// 预备增加话题
export const preAddTopicAPI = (a, b) => {
  return httpInstance({
    url: '/auth/pretopic',
    method: 'post',
    data: {
      id: a,
      title: b
    }
  })
}