/**
 * 过滤特殊字符
 * @param {*} str -- 原始字符，用户输入的内容
 * @returns -- 返回过滤掉特殊符号的字符。
 */
export const replaceStr = (str) => {
  return str
    // .replace(/<script><\/script>/gi, '')
    // .replace(/on\w+="[^"]+"/gi, 'on')
    .replace(/javascript/gi, 'java-script')
    .replace(/&/g, "&amp;")
    .replace(/\)/g, "&lpar;")
    .replace(/\(/g, "&rpar;")
    .replace(/\//g, "&sol;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
}