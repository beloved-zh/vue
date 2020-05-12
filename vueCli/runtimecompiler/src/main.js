// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // components: { App },
  // template: '<App/>'
  render: function (createElement) {
    // createElement('标签',{标签的属性},[内容])
    // return createElement('h2', {class: 'box'}, ['hello World', createElement('button', ['按钮'])])
    // 传入对象
    return createElement(App)
  }
})

// function sum (num1, num2) {
//   return num1 + num2
// }

// console.log(sum(10, 20))
