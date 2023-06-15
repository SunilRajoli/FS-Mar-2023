/*
Javascript Inheritance:
            The JavaScript inheritance is a mechanism that allows us to create new classes on the basis of already existing classes.
            It provides flexibility to the child class to reuse the methods and variables of a parent class.
            The JavaScript extends keyword is used to create a child class on the basis of a parent class.
            It facilitates child class to acquire all the properties and behavior of its parent class.
Points to remember:
            It maintains an IS-A relationship.
            The extends keyword is used in class expressions or class declarations.
            Using extends keyword, we can acquire all the properties and behavior of the inbuilt object as well as custom classes.
            We can also use a prototype-based approach to achieve inheritance.
*/
//extends keyword.
//we extends date object to display todays date
class Moment extends Date{
    constructor(){
        //the constructor of moment class calls the super() method which calls the constructor of parent Date class with no arguments
        super();
    }
}
var m = new Moment();
console.log("Current Time: ")
console.log(m.getDate()+"/"+(m.getMonth()+1)+"/"+m.getFullYear());
console.log(m.toLocaleDateString());