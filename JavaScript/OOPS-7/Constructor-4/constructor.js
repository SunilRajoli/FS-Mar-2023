/*
Javascript Constructor Method:
            A JavaScript constructor method is a special type of method which is used to initialize and create an object.
            It is called when memory is allocated for an object.
Ponts to remember:
            The constructor keyword is used to declare a constructor method.
            The class can contain one constructor method only.
            JavaScript allows us to use parent class constructor through super keyword.
*/
//Constructor method
class Employee{
    constructor(){
        this.id = 101;
        this.name = "martin"
    }
}
var e1 = new Employee();
console.log(e1.id+" "+e1.name);
//Constructor method:super keyword
//The super keyword is used to call the parent class constructor.
class ComapanyName{
    constructor(){
        this.company = "javapoint";
    }
}
class Employeee extends ComapanyName{
        constructor(id, name){
            super();
            this.id = id;
            this.name = name;
        }
}
var emp = new Employeee(101, "sertey");
console.log(emp.id+" "+emp.name+" "+emp.company);