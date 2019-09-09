/*
变量提升：
var fn;   =>只对等号左边进行变量提升
sum = aaaaaaaa;
*/ 
sum()	//2
// fn()	//Uncaught TypeError: fn is not a function
//=>匿名函数之函数表达式
var fn = function() {
	console.log(1)
}	//代码执行到此时，会把函数值复制给fn

fn()

//=>普通函数
function sum() {
	console.log(2)
}

