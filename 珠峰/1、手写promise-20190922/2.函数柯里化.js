// 柯里化   也是高阶函数的一种
// 柯里化（Currying）是把接受多个参数的函数变换成接受一个单一参数(最初函数的第一个参数)的函数，并且返回接受余下的参数且返回结果的新函数的技术。
//通用的柯里化函数
const currying = (fn, arr = []) => {
    let len = fn.length
    return (...args) => {
        arr = arr.concat(args)
        if(arr.length < len){
            return currying(fn, arr)
        }
        return fn(...arr)
    }
}


const checkType = (content, type) => {
    return Object.prototype.toString.call(content) === `[object ${type}]`
}

let utils = {}
let types = ['Number', 'String', 'Boolean']
types.forEach(type => {
    utils["is"+type] = currying(checkType)(type)
});
console.log( checkType("123", 'String') )
console.log( checkType(123, 'Number') )