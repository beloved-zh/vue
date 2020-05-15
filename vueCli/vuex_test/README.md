# vuex
Vuex是一个专门为Vue.js应用程序开发的**状态管理模式**

它采用**集中式存储管理**应用和所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化 

**其实就是多个组件要共享的变量存储在一个对象里面**

**Vuex状态管理图示**

![](http://image.beloved.ink/Typora/20200513140234.png)

**项目结构图**

![](http://image.beloved.ink/Typora/20200513160514.png)

**安装**
```npm
npm install vuex --save
```

## 使用
为了方便管理，在`src`目录下创建`store\index.js`文件。vuex的配置都在这这里
```js
import Vue from 'vue'
import Vuex from 'vuex'

// 1.安装插件
Vue.use(Vuex)

// 2.创建对象
const store = new Vuex.Store({
    state: {
        // 保存状态
    },
    mutations: {
        // Vuex的属性不能直接修改，要通过这个修改
        // 同步操作
    },
    actions: {
        // 异步操作这里实现
    },
    getters: {
        // 类似于组件的计算属性
    },
    modules: {
        // 划分模块
    }
})

// 3.导出store对象
export default store
```
在main.js挂载
```js
import Vue from 'vue'
import App from './App'
import store from './store'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
```

## mutations

**vuex中的属性不能直接修改，要通过mutations取修改，这样可以记录每次的操作**
```js
// -----------------Vuex----------------
state: {
    counter: 10
},
mutations: {
    // 方法
    increment(state){
        state.counter++
    },
    decrement(state){
        state.counter--
    },
    addCounter(state, num){
        state.counter += num
    },
    addStu(state, stu){
        console.log(stu.name)
        state.students.push(stu)
    }
}
// --------------components----------------
// 使用
// <h2>{{$store.state.counter}}</h2>
// <button @click="add(5)">+5</button>
// <button @click="addStu">添加学生</button>
// 修改
addition(){
    this.$store.commit('increment')
},
// 传入单个参数
add(num){
    this.$store.commit('addCounter',num)
},
// 传入对象
addStu(){
    const stu = {id: 5, name: 'Beloved', age: 20}
    this.$store.commit('addStu',stu)
}
```
每一次的操作都有记录
![](http://image.beloved.ink/Typora/20200513141940.png)

**特殊的提交风格**
```js
// -----------------Vuex----------------
addCounter(state, payload){
    console.log(payload)
    // state.counter += num
}
// --------------components----------------
add(num){
    // 普通提交风格
    // this.$store.commit('addCounter',num)

    this.$store.commit({
    type: 'addCounter',
    num,
    age: 20
    })
}
```
![](http://image.beloved.ink/Typora/20200513150153.png)



## State单一状态树
- 如果所有的状态信息保存到多个Store对象中，那么之后的管理和维护将变得困难
- Vuex使用单一状态数来管理应用层级的全部状态
- 单一状态树能够直接的方式找到某个状态的片段，方便管理和维护

## Getters基本使用
类似于组件的计算属性
```js
getters: {
    more20stu(state){
        return state.students.filter(stu => stu.age > 20)
    },
    // 传入getters
    more20stuLength(store, getters){
        return getters.more20stu.length
    },
    // 自定义传入参数
    moreAgeStu(state){
        // return function(age){
        //     return state.students.filter(stu => stu.age > age)
        // }
        return age => {
            return state.students.filter(stu => stu.age > age)
        }
    },
}


// 使用
<h2>getters内容</h2>
<!-- 获取年龄大于20 -->
<h4>{{$store.getters.more20stu}}</h4>
<h4>数量：{{$store.getters.more20stuLength}}</h4>
<h4>自定义参数：{{$store.getters.moreAgeStu(10)}}</h4>
```

## actions
在mutations中执行了异步操作，虽然数据发生了改变，但是vue监视不到改变的操作。异步操作要在actions中执行
```js
// -----------------Vuex----------------
actions: {      
    decrement(context, payload){
        // setTimeout(() => {
        //     // 调用同步方法
        //     context.commit('decrement')
        //     // 打印参数
        //     console.log(payload.message)
        //     // 执行回调函数
        //     payload.success()
        // }, 1000);

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // 调用同步方法
                context.commit('decrement')
                // 打印参数
                console.log(payload)

                resolve("我是回调函数的参数")
            }, 2000);
        })
    }
}
// --------------components----------------
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
```

## modules
- Vue使用单一状态树，那么就会有很多的参数在一个里面
- 当应用变得复杂时，store就变得非常乱
- 可以在modules中定义不同的模块，每个模块都拥有自己的state、mutation、action、getters

```js
// -----------------Vuex----------------
modules: {
    // 最终是将userinfo中的内容放到state中
    userinfo
}

const userinfo = {
    state:{
        name: '张恒',
        age: 20
    },
    mutations: {
        updateName(state,payload){
            state.name = payload
        }
    },
    actions: {
        // 这里的context只是这个模块的
    },
    getters: {
        fullname1(state){
            return state.name + '111'
        },
        fullname2(state,getters){
            return getters.fullname1 + '222'
        },
        fullname3(state,getters,rootState){
            return getters.fullname2 + rootState.counter
        }
    }
}
// --------------components----------------
// 使用和正常的没有区别
// <h1>modules使用</h1>
// <button @click="updateName">修改姓名</button>
// <h2>姓名：{{$store.state.userinfo.name}}</h2>
// <h2>年龄：{{$store.state.userinfo.age}}</h2>
// <h2>{{$store.getters.fullname1}}</h2>
// <h2>{{$store.getters.fullname2}}</h2>
// <h2>{{$store.getters.fullname3}}</h2>
```