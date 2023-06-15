/*
By using an Object constructor
*/
function emp(id, name, salary){
    this.id = id;
    this.name = name;
    this.salary = salary;
}
e = new emp(101, "Sunil", 45500);
console.log(e.id);
console.log(e.name);
console.log(e.salary);