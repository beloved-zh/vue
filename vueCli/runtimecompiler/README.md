# 使用ESLint代码检查
有可能和平时编写习惯不相同。
例如：对空格的要求严格。方法必须使用，不使用报错，编译不能通过
```js
function sum (num1, num2) {
  return num1 + num2
}

console.log(sum(10, 20))
```
**关闭ESLint：** 在`config/index.js`中修改`useEslint`为`false`即可
![](http://image.beloved.ink/Typora/20200512143520.png)


