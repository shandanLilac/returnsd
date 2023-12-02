import httpInstance from "@/utils/httpInstance"

export const regUserAPI = (uname, pwd, repwd, captext, uuid) => {
  return httpInstance({
    url: '/api/reguser',
    method: 'post',
    data: {
      username: uname,
      password: pwd,
      repwd: repwd,
      captext: captext,
      uuid: uuid
    }
  })
}

export const loginAPI = (uname, pwd, captext, uuid) => {
  return httpInstance({
    url: '/api/login',
    method: 'post',
    data: {
      username: uname,
      password: pwd,
      captext: captext,
      uuid: uuid
    }
  })
}

export const genCaptchaAPI = (uuidv4) => {
  return httpInstance({
    url: '/api/captcha',
    params: {
      uuidv4,
    }
  })
}