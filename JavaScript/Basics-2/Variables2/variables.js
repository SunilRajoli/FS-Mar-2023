/* 
Javascript Variables:
        It is simply a name of storage location.

Types of variables:
        It has two types:
        local vaiable
        global variable

There are some rules declaring javascript variables(known as identifiers)
        Name must start with a letter, underscore, $ sign.
        Javascript variables are case sensitive, x and X are different
*/
var x = 30;
var y = 27;
var z = x + y;
console.log(z);

/*
Local Variable:
        Javascript local variable declared inside a block or function. It can accessible within function or block only.
*/
function abc(){
        var x = 10; //local variable
}

/*
Global Variable:
        A javascript variable is declared outside the function. It can accessible from any function.
*/
var data = 200; //global variable
function a(){
        console.log(a);
}
function b(){
        console.log(b);
}
a(); //calling function
b();
/*
Declaring Javascript variable within function
        To declare js variable within the function, use window.object
*/
function m(){
        window.value = 100; //declaring global variable bu window object
}
function n(){
        alert(window.value); //accessing global variable from other function
}
m();
n();