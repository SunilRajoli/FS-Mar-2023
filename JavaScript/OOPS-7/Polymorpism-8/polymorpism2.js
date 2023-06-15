//example where a child and parent class contains the same method. Here, the object of child class invokes both classes method.
class A{
    //create method
    display(){
        console.log("A is invoked")
    }
}
class B extends A{
    //method
    display(){
        console.log("B is invoked")
    }
}
//an array is created that contains two objects
var a = [new A(), new B()];
//forEach() method is called on the "a" array, which loops through each object in the array and calls the "display" method on each object.
a.forEach(function(msg){
    msg.display();
})