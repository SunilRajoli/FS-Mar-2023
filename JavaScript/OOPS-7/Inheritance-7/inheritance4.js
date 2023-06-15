//Prototype based inheritance
//constructor function
function Bike(company){
        this.company = company;
}
Bike.prototype.getCompany = function(){
    return this.company;
}
//Another constructor function
function Vehicle(name, price){
    this.name = name;
    this.price = price;
}
var bike = new Bike("Honda");
Vehicle.prototype = bike; //Bike treats as a parent of vehicle
var vehicle = new Vehicle("Shine", 700000);
console.log(vehicle.getCompany()+" "+vehicle.name+" "+vehicle.price);