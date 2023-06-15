/*
Javacsript Abstraction:
            An abstraction is a way of hiding the implementation details and showing only the functionality to the users.
            In other words, it ignores the irrelevant details and shows only the required one.
Points to remenber:
            We cannot create an instance of Abstract Class.
            It reduces the duplication of code.
*/
function Vehicle(){
    this.vehicleName = "vehicleName";
    throw new error("You cannot create a instance of abstract class");
}
Vehicle.prototype.dispaly = function(){
    return "Vehicle is: "+this.vehicleName;
}
function Bike(vehicleName){
    this.vehicleName = vehicleName;
}
Bike.prototype = Object.create(Vehicle.prototype);
var bike = new Bike("Honda");
console.log(bike.dispaly())