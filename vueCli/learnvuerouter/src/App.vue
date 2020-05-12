<template>
  <div id="app">
    <!-- 
      router-link：最终在页面会渲染成a标签
      to：跳转的路由
      tag：指定渲染成什么组件
      replace：取消回退
      active-class：指定选中后增加的class。可以直接在路由配置文件中定义linkActiveClass
    -->
    <router-link to="/home" tag="button" replace>首页</router-link>
    <router-link to="/about" tag="button" replace>关于</router-link>
    <router-link :to="'/user/'+username+'/'+age" tag="button" replace>用户</router-link>
    <!-- <router-link :to="{path:'/profile',query:{name:'Beloved',age:20,sex:'男'}}" tag="button" replace>档案</router-link> -->
    <button @click="ProfileClick">档案</button>

    <!-- <button @click="ActiveClick('/home')">首页</button>
    <button @click="ActiveClick('/about')">关于</button> -->

    <!-- 
      组件创建一次后，加入缓存，不频繁创建 
      include：包含    参数是组件的name值，多个用,隔开
      exclude：排除
    -->
    <keep-alive exclude="Profile">
      <!-- router-view：用于占位，根据不同的路由展示不同的组件 -->
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return{
      username: 'Beloved',
      age: 20
    }
  },
  methods: {
    ActiveClick(url){
      console.log(url)
      this.$router.push(url)
      // this.$router.replace(url)
    },
    ProfileClick(){
      this.$router.push({
        path: '/profile',
        query: {
          name: '张恒',
          age: 20,
          sex: '男'
        }
      })
    }
  }
}
</script>

<style>
  .active{
    color: red;
  }
</style>
