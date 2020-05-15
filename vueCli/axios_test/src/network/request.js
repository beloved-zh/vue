import axios from 'axios'

export function request(config) {
    // 1.创建axios实例
    const instance = axios.create({
        baseURL : 'http://123.207.32.32:8000',
        timeout : 50000
    })

    // axios拦截器
    // 请求拦截
    instance.interceptors.request.use(
        // 成功
        config => {
            console.log(config);

            // 可以做的处理的事情
            // 1.比如config的一些信息不符合服务器要求，需要修改
            // 2.每次发送网络请求，可以展示等待中的图标
            // 3.登录(token)，一些请求需要携带特殊信息

            // 拦截的请求需要在处理完后，需要放行，否则请求失败
            return config;
        },
        // 失败
        err => {
            console.log(err);
        }
    )

    // 相应拦截
    instance.interceptors.response.use(
        res => {
            console.log(res);

            // 可以在这里处理数据，在返回

            return res.data;
        },
        err => {
            console.log(err);
        }
    )

    // 因为axios返回的就是Promise所以不需要做过多的配置
    // 如果要换成别的插件，在这里使用Promise封装即可
    // 返回实例
    return instance(config)
}