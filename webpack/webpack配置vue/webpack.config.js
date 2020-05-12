// 获取项目路径
const path = require('path')
const webpack = require('webpack')

module.exports = {
    entry: './src/main.js',
    output: {
        // path是绝对路径
        path: path.resolve(__dirname,'dist'),
        filename: 'bundle.js',
        publicPath: 'dist/'  //这个参数会在所有的url地址前加上dist路径
    },
    module: {
        rules: [
          {
            test: /\.css$/,
            // css-loader只负责将css文件进行加载
            // style-loader将模块的导出作为样式添加到 DOM 中
            // 使用多个loader时，是从右向做读。先使用的在右边
            use: [ 'style-loader','css-loader' ]
          },
          {
            test: /\.less$/,
            // 使用顺序从下向上
            use: [{
                loader: "style-loader" // 将css文件进行渲染
            }, {
                loader: "css-loader" // 将css文件进行加载
            }, {
                loader: "less-loader" // 将less转换为css文件
            }]
          },
          {
            test: /\.(png|jpg|gif)$/,
            use: [
              {
                loader: 'url-loader',
                options: {
                  // 当图片小于limit时，会将图片编译成base64字符串形式
                  // 当图片大于limit时，要使用file-loader模块进行加载
                  // file-loader安装即可，不用配置，重新打包之后，发现图片路径不对
                  // file-loader会将图片复制在dist目录并重新生成32未hash值重命名，配置publicPath即可
                  limit: 8192,
                  // 指定打包后的格式   将图片打包在img目录下
                  // [name]使用原来的文件名 [hash:8]拼接一个8位的hash值 [ext]使用原来的扩展名
                  name: 'img/[name].[hash:8].[ext]'
                }
              }
            ]
          },
          {
            // ES6转ES5
            // 使用babel安装对应的loader
            // npm install --save-dev babel-loader@7 babel-core babel-preset-es2015
              test: /\.js$/,
              // exclude:排除  排除依赖的一些库的es6语法
              // include:包含
              exclude: /(node_modules|bower_components)/,
              use:{
                  loader: 'babel-loader',
                  options:{
                      presets: ['es2015']
                  }
              }
          },
          {
            test: /\.vue$/,
            use: ['vue-loader']
          }
        ]
    },
    resolve: {
      // 使这些文件在引入的时候，可以省略后缀
      extensions: ['.js','.css','.vue'],
      // alias：别名
      alias: {
        'vue$': 'vue/dist/vue.esm.js'
      }
    },
    plugins: [
      new webpack.BannerPlugin('最终版权归Beloved')
    ]
}