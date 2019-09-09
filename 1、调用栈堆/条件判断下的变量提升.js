// console.log(a)	//undefined
// if( 'a' in window ){
// 	var a = 1;
// }
// console.log(a)	//1

f = function() {return true;}
g = function() {return false;}
~function () {
	if( g() && [] == ![] ){
		f = function () {return false;}
		function g() {return true;}
	}
}();
console.log(f())
console.log(g())
// Uncaught TypeError: g is not a function