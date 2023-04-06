//print the fibonacci number series upto given number
var n = 17
var prev = 0
var curr = 1
while(curr <= n){
    console.log(curr)
    var next = prev + curr
    prev = curr
    curr = next
}