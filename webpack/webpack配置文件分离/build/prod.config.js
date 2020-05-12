// 开发时依赖
const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin')
const webpack = require('webpack')
const webpackMerge = require('webpack-merge')
const baseConfig = require('./base.config')


module.exports = webpackMerge(baseConfig, {
    plugins: [
      // 版权信息配置
      new webpack.BannerPlugin('最终版权归Beloved'),
      // 打包后在dist目录下生成index.html文件
      // npm install html-webpack-plugin --save-dev
      new HtmlWebpackPlugin({
        template: 'index.html'
      }),
      // 压缩js代码
      // npm install uglifyjs-webpack-plugin@1.1.1 --save-dev
      new UglifyjsWebpackPlugin()
    ]
})