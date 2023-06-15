/*
Javascript function object:
            In javascript, the function constructor is to create new function object.
            it executes the code globally.
            If we call the constructor directly, a function is created dynamically and in a unsecured way.
syntac:
            new Function([args1[, args2[, ..., argsn]],] functionBody)
functionBody represents function definition
*/
var add = new Function("num1", "num2", "return num1 + num2");
console.log(add(27, 45));