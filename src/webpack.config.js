var webpack = require('webpack')
var path = require('path') // 保证任何情况下都能获取到正确的路径，不会因启动程序的路径不同而报错

module.exports = {
  entry: path.join(__dirname, "js/app/index.js"),
  output: {
    path: path.join(__dirname, "../public/js/"),
    filename: 'index.js'
  }
}