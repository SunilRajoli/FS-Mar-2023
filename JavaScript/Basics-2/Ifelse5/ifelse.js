/*
Javascript IfElse Statement:
            It is used to execute code whether the condition is true or false.
There are three forms of if statements:
            if
            if else
            if else if
*/
/*
Javascript if statement:
            It evaluates the code if expression is true.
syntax:
            if(exoression){
                code to be evaluated
            }
*/
var a = 20;
if(a > 10){
    console.log("Value is greater than 10");
}
/*
Javascript ifElse statement:
            It evaluates the code whether the condition is true or false.
syntax:
            if(expression){
                code to be evaluated if condition is true
            }
            else{
                code to be evaluated if condition is flase
            }
*/
//find given number is even or odd
var i = 25;
if(i%2==0){
    console.log("Given number is even number");
}
else{
    console.log("Given number is odd number");
}
/*
Javascript ifelse if statement:
            It evaluates the code if the expression is true from several expressions.
syntax:
            if(expression1){
                code to be evaluated if expression1 is true
            }  
            else if(expression2){  
                code to be evaluated if expression2 is true  
            }  
            else{  
                code to be evaluated if expression3 is true  
            } 
*/
var y=20;
if(y==10){  
    console.log("y is equal to 10");  
}  
else if(y==15){  
    console.log("y is equal to 15");  
}  
else if(y==20){  
    console.log("y is equal to 20");  
}  
else{  
    console.log("y is not equal to 10, 15 or 20");  
}  