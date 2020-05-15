import Vue from 'vue'
import App from './App'

import axios from 'axios'


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})

// axios基本使用

// axios.defaults.baseURL = 'http://123.207.32.32:8000'
// axios.defaults.timeout = 50000

// axios({
//   url: '/home/multidata'
// }).then(res => {
//   console.log(res);  
// })

// axios并发请求
// axios.all([
//   axios({
//     url: 'http://123.207.32.32:8000/home/multidata'
//   }),
//   axios({
//     url: 'http://123.207.32.32:8000/home/multidata'
//   })
// ]).then(res => {
//   console.log(res);
// })

// axios.all([
//   axios({
//     url: 'http://123.207.32.32:8000/home/multidata'
//   }),
//   axios({
//     url: 'http://123.207.32.32:8000/home/multidata'
//   })
// ]).then(axios.spread((res1,res2) => {
//   console.log(res1);
//   console.log(res2);
// }))

// axios实例
// const instancel = axios.create({
//   baseURL : 'http://123.207.32.32:8000',
//   timeout : 50000
// })

// instancel({
//   url: '/home/multidata'
// }).then(res => {
//   console.log(res);
// })

// 导入封装的模块
import {request} from './network/request'

request({
  url: '/home/multidata'
}).then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
})