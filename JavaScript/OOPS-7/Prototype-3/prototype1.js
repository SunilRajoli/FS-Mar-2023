/*
Javascript Prototype:
            Javascript is a prototype based language that faciliates the objects that acquire properties and features from one another.
            Each object contains a prototype object.
syntax:
            ClassName.prototype.methodName
Requirement:
            Whenever an object is created in JavaScript, its corresponding functions are loaded into memory.
            So, a new copy of the function is created on each object creation.
            In a prototype-based approach, all the objects share the same function. This ignores the requirement of creating a new copy of function for each object.
            Thus, the functions are loaded once into the memory.
Prototype Chaining:
            In JavaScript, each object contains a prototype object that acquires properties and methods from it.
            Again an object's prototype object may contain a prototype object that also acquires properties and methods, and so on.
            It can be seen as prototype chaining.
*/
//Add a new method to the constructor function
function Employee(firstname, lastname){
    this.firstname = firstname;
    this.lastname = lastname;
}
Employee.prototype.fullName = function(){
    return this.firstname+" "+this.lastname;
}
var e1 = new Employee("syyyy", "rajoli");
var e2 = new Employee("hyyyyy", "sunil");
console.log(e1.fullName());
console.log(e2.fullName());