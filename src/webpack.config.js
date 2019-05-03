var webpack = require('webpack')
var path = require('path') // 保证任何情况下都能获取到正确的路径，不会因启动程序的路径不同而报错

module.exports = {
  entry: path.join(__dirname, "./js/app/index.js"),
  output: {
    path: path.join(__dirname, "../public/js/"),
    filename: 'index.js'
  },
  module: {
    rules: [
      {
        test: /\.less$/, // 匹配以.less结尾的文件
        use: ["style-loader", "css-loader", "less-loader"] // 从后往前解析
      }
    ]
  },
  resolve: {
    alias: {
      jquery: path.join(__dirname, "./js/libs/jquery-2.0.3.min.js"),
      mod: path.join(__dirname, "./js/mod"),
      less: path.join(__dirname, "./less"),
    }
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery'
    })
  ]
}