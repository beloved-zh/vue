# Element的简单使用

**官方地址：** https://element.eleme.cn/#/zh-CN/component/installation

**npm安装**
```npm
npm i element-ui -S
```

**全局引入**
在`main.js`中写入一下内容
```js
import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';

Vue.use(ElementUI);

new Vue({
  el: '#app',
  render: h => h(App)
});
```
