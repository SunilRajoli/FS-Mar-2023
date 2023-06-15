/*
Javascript Class:
            In Javascript classes are special type of function.
            we can define class just like function declaration and function expression.
class contains two syntaxes:
            class declaration
            class expression
*/
/*
class declaration:
            A class is defined by a class declaration.
            A class keyword is to declare a class with any particular name.
            The name of the class is always start with upper case.
*/
//Declaring class
class Employee{
    //initilizing an object
    constructor(id, name){
        this.id = id;
        this.name = name;
    }
    //Declaring a method
    detail(){
        console.log(this.id + " " + this.name);
    }
}
//Passing object to a variable
var e1 = new Employee(101, "Sunil");
var e2 = new Employee(102, "kumar");
//calling a function
e1.detail();
e2.detail();
