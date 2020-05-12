<template>
  <div id="app">
    <!-- 
      router-link：最终在页面会渲染成a标签
      to：跳转的路由
      tag：指定渲染成什么组件
      replace：取消回退
      active-class：指定选中后增加的class。可以直接在路由配置文件中定义linkActiveClass
    -->
    <!-- <router-link to="/home" tag="button" replace>首页</router-link>
    <router-link to="/about" tag="button" replace>关于</router-link> -->

    <button @click="ActiveClick('/home')">首页</button>
    <button @click="ActiveClick('/about')">关于</button>
    <!-- router-view：用于占位，根据不同的路由展示不同的组件 -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    ActiveClick(url){
      console.log(url)
      this.$router.push(url)
      // this.$router.replace(url)
    }
  }
}
</script>

<style>
  .active{
    color: red;
  }
</style>
