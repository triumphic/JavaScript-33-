Function.prototype.myBind = function(context){
    let self = this;
    let arg = [...arguments].slice(1)
    return function(){
        let newArgs = [...arguments]
        return self.apply(context,arg.concat(newArgs))
    }
}
let obj = {
    name: 'likai'
}
function fn(name,age){
    console.log(this.name+"aaa"+name+"年龄："+age)
}
let bindFn = fn.myBind(obj,'猫')
bindFn(25)