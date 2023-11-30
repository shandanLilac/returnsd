/**
 * crypto-js-CBC
 * 注意：CBC模式必须要偏移量iv
 */
import CryptoJS from "crypto-js"

export const encryptFn = (val) => {
  const key = CryptoJS.enc.Utf8.parse('bjsqyhhycbxqrhxq')
    , iv = CryptoJS.enc.Utf8.parse('zslwbmywjmswqyfw')
    , srcs = CryptoJS.enc.Utf8.parse(val)
  return CryptoJS.AES.encrypt(srcs, key, {
    iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.ZeroPadding
  }).toString()
}
// const obj = {
//   a: 111,
//   b: 222
// }
// const a = encryptFn('Ab123456')
// console.log(a)
// const b = encryptFn(obj.toString())
// console.log(b)

export const decryptFn = (val) => {
  const key = CryptoJS.enc.Utf8.parse('bjsqyhhycbxqrhxq')
    , iv = CryptoJS.enc.Utf8.parse('zslwbmywjmswqyfw')
  return CryptoJS.AES.decrypt(val, key, {
    iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.ZeroPadding
  }).toString(CryptoJS.enc.Utf8)
}
// console.log(decryptFn(a))
// const obj1 = JSON.stringify(decryptFn(b))
// console.log(JSON.parse(obj1))