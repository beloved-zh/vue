<template>
  <div>
      <h1>我是用户信息页</h1>
      <h2>用户名：{{username}}</h2>
      <h2>年龄：{{$route.params.age}}</h2>
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
  computed: {
      username(){
          return this.$route.params.name
      }
  },
  methods: {},
  beforeCreate() {},
  created() {},
  mounted() {}
};
</script>

<style scoped>
</style>