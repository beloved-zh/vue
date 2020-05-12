<template>
  <div>
      <h1>我是Profile组件</h1>
      <ul>
          <li>{{$route.query.name}}</li>
          <li>{{$route.query.age}}</li>
          <li>{{$route.query.sex}}</li>
      </ul>
  </div>
</template>

<script>
export default {
  name: "Profile",
  components: {},
  props: {},
  data() {
    return {};
  },
  watch: {},
  computed: {},
  methods: {},
  beforeCreate() {},
  created() {
    console.log('组件被创建')
  },
  mounted() {},
  destroyed(){
      console.log('组件被销毁')
  }
};
</script>

<style scoped>
</style>