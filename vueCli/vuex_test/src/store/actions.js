export default {      
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