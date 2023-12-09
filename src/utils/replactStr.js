const replaceStr1 = (str) => {
  return str.replace(/(<br[^>]*>| |\s*)/g, '')
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
}

const replaceStr2 = (str) => {
  return str.replace(/<script.*?>.*?<\/script>/gi, 'aaa')
    .replace(/on\w+="[^"]+"/gi, 'on')
    .replace(/javascript:/gi, 'javascript')
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
}

let str = '<script>alert(document.cookie)</script.*?>'

console.log(replaceStr2(str))
console.log(replaceStr1(str))