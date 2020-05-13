export default {
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
}