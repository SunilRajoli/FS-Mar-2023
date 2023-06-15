//Add a new property to the constructor function
function Employee(firstname, lastname){
    this.firstname = firstname;
    this.lastname = lastname;
}
Employee.prototype.company = "javapoint";
var e1 = new Employee("styyyy", "seriiijrnnv");
var e2 = new Employee("ewrastd", "agrstje");
console.log(e1.firstname+" "+e1.lastname+" "+e1.company);
console.log(e2.firstname+" "+e2.lastname+" "+e2.company);