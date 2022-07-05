const fs = require('fs')

const files = [
  // 修复证书失效的问题
  {
    path: 'nw-builder/lib/versions.js',
    replace: {
      7: "process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';"
    }
  }
]

files.forEach(file => {
  const path = `./node_modules/${file.path}`
  if (!fs.existsSync(path)) {
    return
  }
  console.log(path)
  const content = fs.readFileSync(path).toString().split('\n')
  const lines = Object.keys(file.replace)
  lines.forEach(line => {
    content[line - 1] = file.replace[line]
  })
  fs.writeFileSync(path, content.join('\n'))
})

console.log('组件修复完成')
