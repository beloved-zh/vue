<template>
  <div class="hello">
    <h1>HelloWorld</h1>
      <el-button :plain="true" @click="open">打开消息提示</el-button>
      <el-button :plain="true" @click="openVn">VNode</el-button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data(){
    return{
       dialogVisible: false
    }
  },
  methods: {
    open() {
      this.$message('这是一条消息提示');
    },

    openVn() {
      const h = this.$createElement;
      this.$message({
        message: h('p', null, [
          h('span', null, '内容可以是 '),
          h('i', { style: 'color: red' }, 'VNode')
        ])
      });
    }
  }
}
</script>


</style>
