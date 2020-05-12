import Vue from 'vue'
import Router from 'vue-router'

// import Home from '@/components/Home'
// import About from '@/components/About'
// import User from '@/components/User'

const Home = () => import('@/components/Home')
const HomeNews = () => import('@/components/HomeNews')
const HomeMessage = () => import('@/components/HomeMessage')

const About = () => import('@/components/About')
const User = () => import('@/components/User')
const Profile = () => import('@/components/Profile')


// 1.通过Vue.use(插件)  安装插件
Vue.use(Router)

// 2.创建Router对象 
const routes = [
  {
    path: '/',
    // 重定向
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: {
      title: '首页'
    },
    beforeEnter:(to, from, next) => {
      console.log('路由独享守卫')
      next()
    },
    children: [
      {
        path: '/',
        redirect: 'news',
      },
      {
        path: 'news',
        name: 'HomeNews',
        component: HomeNews
      },
      {
        path: 'message',
        name: 'HomeMessage',
        component: HomeMessage
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: {
      title: '关于'
    }
  },
  {
    path: '/user/:name/:age',
    name: 'User',
    component: User,
    meta: {
      title: '用户'
    }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    meta: {
      title: '档案'
    }
  }
]

const router = new Router({
  // 配置路由和组件之间的应用关系
  routes,
  // 去除url的hash 去除#
  mode: 'history',
  linkActiveClass: 'active'
})

// 前置钩子(hook) 设置每个页面的title
router.beforeEach((to, from, next) => {
  // 从from跳转到to
  document.title = to.matched[0].meta.title
  // 必须主动调用next函数
  next()
})

// 3.将Router对象传入到vue实例
export default router



