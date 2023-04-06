//program check a given number is armstrong number or not
var x = 153


var sum = 0
var temp = x
while(x > 0){
    var n = x%10
    sum = sum + (n * n * n)
    x = Math.floor(x/10)

}
if(sum == temp){
    console.log("Given number is a Armstrong Number")
}else{
    console.log("Given number is not a Armstrong Number")
}