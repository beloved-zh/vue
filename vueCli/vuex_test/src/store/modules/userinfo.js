export default {
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