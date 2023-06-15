//Prototype based polymorpism
function A(){

}
A.prototype.display = function(){
    return "A is invoked"
}
function B(){

}
B.prototype.display = function(){
    return "B is invoked"
}
var a = [new A(), new B()];
a.forEach(function(msg){
    console.log(msg.display())
})