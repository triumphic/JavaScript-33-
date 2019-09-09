function fn1(){
	console.log(this, arguments)
}

//call的特点
//1) 可以改变当前函数的this指向
//2) 还会让当前函数执行

Function.prototype.apply = function(context,args){
	context = context ? Object(context) : window;
	context.fn = this;
	if(!args){
		return context.fn()
	}
	//利用数组的toString的特性
	//eval()可以让字符串执行
	let r = eval('context.fn('+args+')');
	delete context.fn;
	return r;
}
fn1.apply('hello',[ 2,5 ])


//如果多个call会让call方法执行,并且把call中this指向fn2,因此在fn2中打印this为window