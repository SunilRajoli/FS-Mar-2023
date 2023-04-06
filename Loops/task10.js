//program to print reverse of digits of numbers
var x = 12456;
var temp = 0; 
var n;
while(x>0){
    n = x%10;
    temp = temp * 10 + n;
    x = Math.floor(x/10);
}
console.log(temp);