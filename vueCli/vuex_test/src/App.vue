<template>
  <div id="app">
    <h1>modules使用</h1>
    <button @click="updateName">修改姓名</button>
    <h2>姓名：{{$store.state.userinfo.name}}</h2>
    <h2>年龄：{{$store.state.userinfo.age}}</h2>
    <h2>{{$store.getters.fullname1}}</h2>
    <h2>{{$store.getters.fullname2}}</h2>
    <h2>{{$store.getters.fullname3}}</h2>

    <h1>我是App组件</h1>
    <h2>{{$store.state.counter}}</h2>
    <button @click="addition">+</button>
    <button @click="subtraction">-</button>
    <button @click="add(5)">+5</button>
    <button @click="addStu">添加学生</button>
    <h2>getters内容</h2>
    <!-- 获取年龄大于20 -->
    <h4>{{$store.getters.more20stu}}</h4>
    <h4>数量：{{$store.getters.more20stuLength}}</h4>
    <h4>自定义参数：{{$store.getters.moreAgeStu(10)}}</h4>
    <HelloVue/>
  </div>
</template>

<script>
import HelloVue from './components/HelloVue'

export default {
  name: 'App',
  data(){
    return{
      
    }
  },
  methods: {
    updateName(){
      this.$store.commit('updateName','乔欣')
    },
    addition(){
      this.$store.commit('increment')
    },
    subtraction(){
      // this.$store.commit('decrement')
      // this.$store.dispatch('decrement',{
      //   // 参数
      //   message: '我是携带参数',
      //   // 回调函数
      //   success: () => {
      //     console.log('我是回调函数')
      //   }
      // })
      this.$store.dispatch('decrement','我是携带参数')
      .then(res => {
        console.log('回调函数执行了')
        console.log(res)
      })
    },
    // 传入单个参数
    add(num){
      // 普通提交风格
      // this.$store.commit('addCounter',num)

      this.$store.commit({
        type: 'addCounter',
        num,
        age: 20
      })
    },
    // 传入对象
    addStu(){
      const stu = {id: 5, name: 'Beloved', age: 20}
      this.$store.commit('addStu',stu)
    }
  },
  components: {
    HelloVue
  }
}
</script>

<style>

</style>
