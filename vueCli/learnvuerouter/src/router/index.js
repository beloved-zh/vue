import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import About from '@/components/About'

// 1.通过Vue.use(插件)  安装插件
Vue.use(Router)

// 2.创建Router对象并导出
export default new Router({
  // 3.配置路由和组件之间的映射关系
  routes: [
    {
      path: '/',
      // 重定向
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ],
  // 去除url的hash 去除#
  mode: 'history',
  linkActiveClass: 'active'
})
