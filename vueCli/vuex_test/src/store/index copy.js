import Vue from 'vue'
import Vuex from 'vuex'

// 1.安装插件
Vue.use(Vuex)

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

// 2.创建对象
const store = new Vuex.Store({
    state: {
        counter: 10,
        students: [
            {id: 1, name: '张三', age: 18},
            {id: 2, name: '李四', age: 24},
            {id: 3, name: '王五', age: 29},
            {id: 4, name: '小明', age: 13}
        ]
    },
    mutations: {
        // 方法
        increment(state){
            state.counter++
        },
        decrement(state){
            // 模拟异步操作  错误写法
            // setTimeout(() => {
            //     state.counter--
            // }, 1000);
            state.counter--
        },
        addCounter(state, payload){
            console.log(payload)
            
            // 普通
            // state.counter += num
        },
        addStu(state, stu){
            console.log(stu.name)
            state.students.push(stu)
        }
    },
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
    },
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
    },
    modules: {
        // 最终是将userinfo中的内容放到state中
        userinfo
    }
})

// 3.导出store对象
export default store