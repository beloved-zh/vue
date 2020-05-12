<template>
  <div>
      <h1>我是首页</h1>
      <h2>我是首页内容，哈哈哈哈哈</h2>
      <router-link to="/home/news" >新闻</router-link>
      <router-link to="/home/message" >消息</router-link>
      <router-view/>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {};
  },
  watch: {},
  computed: {},
  methods: {},
  beforeCreate() {},
  created() {},
  mounted() {},
  activated(){
    console.log("组件活跃")
  },
  deactivated(){
    console.log("组件不活跃")
  }
};
</script>

<style scoped>
</style>