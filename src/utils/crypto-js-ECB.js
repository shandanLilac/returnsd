import CryptoJS from "crypto-js"
// const cryptojs=new CryptoJS()

// 加密函数
const enCryptFn = (aseKey, val) => {
  return CryptoJS.AES.encrypt(val, CryptoJS.enc.Utf8.parse(aseKey), {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7
  }).toString()

}
const aseKey = 'qGSIb3DQopAQUAA4'
const pwd = "Ab123456"
const enCryptCode = enCryptFn(aseKey, pwd)
console.log(enCryptCode)

// 解密函数
const deCryptFn = (val) => {
  const aseKey = 'qGSIb3DQopAQUAA4'  // 解密时，密钥必须放在函数体中？
  const a = CryptoJS.AES.decrypt(val, CryptoJS.enc.Utf8.parse(aseKey), {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7
  })
  return CryptoJS.enc.Utf8.stringify(a).toString()
}
console.log(deCryptFn(enCryptCode))
