function fn1(){
	console.log(this, arguments)
}
function fn2(){
	console.log(this,2)
}

//call的特点
//1) 可以改变当前函数的this指向
//2) 还会让当前函数执行

Function.prototype.call = function(context){
	context = context ? Object(context) : window;
	context.fn = this;
	let args = [];
	for( let i = 1 ; i < arguments.length ; i++ ){
		args.push( 'arguments['+i+']' )
	}
	//利用数组的toString的特性
	//eval()可以让字符串执行
	let r = eval('context.fn('+args+')');
	delete context.fn;
	return r;
}
fn1.call('hello', '1','2')
fn1.call.call(fn2,'1','23')


//如果多个call会让call方法执行,并且把call中this指向fn2,因此在fn2中打印this为window