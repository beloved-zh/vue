// 1.使用commonjs的模块化规范
const {add,mul} = require('./js/mathUtils.js')

console.log(add(10,20));
console.log(mul(10,20));


// 2.ES6模块化规范
import {name,age,height} from './js/info';

console.log(name)
console.log(age)
console.log(height)


// 3.依赖css模块
require('./css/normal.css')

// 4.依赖less文件
require('./css/special.less')