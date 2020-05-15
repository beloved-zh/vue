# axios

中文官网：http://www.axios-js.com/

## axios请求方式
![](http://image.beloved.ink/Typora/20200515124507.png)

## 安装
```npm
npm install axios --save
```

# axios基本使用
```js
// 导入axios
import axios from 'axios'

// 默认是get请求
// axios返回的是Promise可以直接使用then来接受回调函数
axios({
  url: 'http://123.207.32.32:8000/home/multidata'
}).then(res => {
  console.log(res);  
})

// get请求，参数可以直接拼接在url，也可以写在params
axios({
  url: 'http://123.207.32.32:8000/home/data',
  method: 'get',
  // 只针对get请求
  params: {
      type: 'pop',
      page: 1
  }
}).then(res => {
  console.log(res);  
})
```
![](http://image.beloved.ink/Typora/20200515141855.png)

# axios发生并发请求
- 使用axios.all，可以放入多个请求的数组  
    ```js
    axios.all([
        axios({
            url: 'http://123.207.32.32:8000/home/multidata'
        }),
        axios({
            url: 'http://123.207.32.32:8000/home/multidata'
        })
    ]).then(res => {
        console.log(res);
    })
    ```
    ![](http://image.beloved.ink/Typora/20200515143023.png)
- axios.all([])返回的结果是一个数组，使用axios.spread可将数组[res1,res2]展开为res1,res2
    ```js
    axios.all([
        axios({
            url: 'http://123.207.32.32:8000/home/multidata'
        }),
        axios({
            url: 'http://123.207.32.32:8000/home/multidata'
        })
    ]).then(axios.spread((res1,res2) => {
        console.log(res1);
        console.log(res2);
    }))
    ```
    ![](http://image.beloved.ink/Typora/20200515143806.png)

# axios全局配置
在开发中很多参数都是固定的，比如域名，请求头这些。这些参数可以利用axios的全局配置抽取出来

**常见的配置选项**
![](http://image.beloved.ink/Typora/20200515145035.png)

```js
// axios({
//   baseURL: 'http://123.207.32.32:8000',
//   timeout: 90000,
//   url: '/home/multidata'
// }).then(res => {
//   console.log(res);  
// })

// 抽取配置
axios.defaults.baseURL = 'http://123.207.32.32:8000'
axios.defaults.timeout = 50000

// 发生请求的时候不用写，默认会有
axios({
  url: '/home/multidata'
}).then(res => {
  console.log(res);  
})
```
![](http://image.beloved.ink/Typora/20200515144829.png)

# axios的实例
```js
const instance1 = axios.create({
  baseURL : 'http://123.207.32.32:8000',
  timeout : 50000
})

instance1({
  url: '/home/multidata'
}).then(res => {
  console.log(res);
})
```
![](http://image.beloved.ink/Typora/20200515150452.png)

# axios模块开发
为了后期便于维护，开发，将axios封装
在`src`下创建`network/request.js`文件
```js
import axios from 'axios'

export function request(config) {
    // 1.创建axios实例
    const instance = axios.create({
        baseURL : 'http://123.207.32.32:8000',
        timeout : 50000
    })

    // 因为axios返回的就是Promise所以不需要做过多的配置
    // 如果要换成别的插件，在这里使用Promise封装即可
    // 返回实例
    return instance(config)
}
```
使用的时候导入即可
```js
// 导入封装的模块
import {request} from './network/request'

request({
  url: '/home/multidata'
}).then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
})
```

# axios拦截器
axios提供了拦截器，用于在发生请求或得到相应后，进行处理

**四种状态**

- 请求成功
- 请求失败
- 相应成功
- 相应失败

```js
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
```
![](http://image.beloved.ink/Typora/20200515155424.png)
