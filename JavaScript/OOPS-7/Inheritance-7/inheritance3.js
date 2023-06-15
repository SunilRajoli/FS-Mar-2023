//custom class
//we declare sub-class that extends the properties of its parent class.
class Bike{
    constructor(){
        this.company = "Honda";
    }
}
class Vehicle extends Bike{
    constructor(name, price){
        super();
        this.name = name;
        this.price = price;
    }
}
var v = new Vehicle("John", 165000);
console.log(v.name+" "+v.price+" "+v.company);