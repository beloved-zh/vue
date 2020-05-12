// 开发时依赖
const webpackMerge = require('webpack-merge')
const baseConfig = require('./base.config')

module.exports = webpackMerge(baseConfig, {
    // 搭建本地服务器热部署
    // npm install --save-dev webpack-dev-server@2.9.1
    devServer: {
      contentBase: './dist', // 为那个文件夹提供本地服务
      port: 8080, // 端口
      inline: true // 页面实时刷新
    }
})