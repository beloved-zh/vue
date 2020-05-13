# Promise
是ES6的新特性。**Promise是异步编程的一种解决方案**

**Promise三种状态**
- pending：等待状态，比如正在进行网络请求，或者定时器没有到时间
- fulfill：满足状态，当主动回调了resolve时，就处于该状态，并且会回调.then()
- reject：拒绝状态，当主动回调了reject时，就处于该状态，并且回调了.catch()

**Promise的基本写法**

```js
// 参数 -> 函数(resolve,reject)
// resolve,reject本身也是函数
new Promise((resolve,reject) => {
    setTimeout(() => {
        // 成功的时候调用
        resolve('Hello World')

        // 失败的时候调用
        reject('我是错误信息')
    }, 1000);
}).then((data) => {
    console.log(data)
}).catch((err) => {
    console.log(err)
})
```

**Promise的特殊写法**

```js
// 将两个回调都写在then里
new Promise((resolve, reject) => {
    setTimeout(() => {
        //resolve('Hello Vue')

        reject('error message')
    }, 1000);
}).then(data => {
    console.log(data)
},err =>{
    console.log(err)
})
```