export default {
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