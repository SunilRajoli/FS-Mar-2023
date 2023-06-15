/*
Defining method in Javascript object:
            We define method in javascript object. But before defining method, we need to add property in function with same name as method.
*/
function emp(id, name, salary){
    this.id = id;
    this.name = name;
    this.salary = salary;
    this.changeSalary = changeSalary;

    function changeSalary(otherSalary){
        this.salary = otherSalary;
    }
}
e = new emp(101, "Sunil", 45000);
console.log(e.id+" "+e.name+" "+e.salary);
e.changeSalary(55000);
console.log(e.id+" "+e.name+" "+e.salary);