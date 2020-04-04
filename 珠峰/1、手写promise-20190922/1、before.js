//高阶函数
// 1) 一个函数传入的参数是一个函数  （回调）
// function a(fn){
//     fn()
// }
// const fn = () => {
//     console.log("高阶函数")
// }
// a(fn)
// 2）返回的是一个函数 （拆分函数）

//函数的brfore  希望将核心的逻辑提取出来，在外面再增加功能
Function.prototype.before = function(beforeFn) {
    return (...args) => {  //箭头函数中没有this指向，没有arguments,会向上级作用域查找
        beforeFn();
        this(...args);   //这里this指向调用者say() , 展开运算符
    }
}
// AOP 切片  装饰
const say = (...args) => {  //剩余运算符，把所有参数组成一个数组
    console.log("说话")
    console.log(...args)
}

const newSay = say.before(() => {
    console.log("您好")
})

const newSay1 = say.before(() => {
    console.log("天气很好")
})

newSay(1,2,3)
newSay1()