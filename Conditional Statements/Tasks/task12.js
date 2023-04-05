//print given numbers in descending order
var x = 10;
var y = 7;
var z = -3;
if(x > y && x > z){
    console.log(x);
    if(y > z){
        console.log(y);
        console.log(z);
    }
}
if(y > z && y > x){
    console.log(y);
    if(z > x){
        console.log(z);
        console.log(x);
    }
}
if(z > x && z > y){
    console.log(z);
    if(x > y){
        console.log(x);
        xonsole.log(y);
    }
}