import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import userinfo from './modules/userinfo'


// 1.安装插件
Vue.use(Vuex)


const state = {
    counter: 10,
    students: [
        {id: 1, name: '张三', age: 18},
        {id: 2, name: '李四', age: 24},
        {id: 3, name: '王五', age: 29},
        {id: 4, name: '小明', age: 13}
    ]
}

// 2.创建对象
const store = new Vuex.Store({
    state,
    mutations,
    actions,
    getters,
    modules: {
        // 最终是将userinfo中的内容放到state中
        userinfo
    }
})

// 3.导出store对象
export default store