/*
Javascript polymorpism:
            The polymorphism is a core concept of an object-oriented paradigm that provides a way to perform a single action in different forms.
            It provides an ability to call the same method on different JavaScript objects.
            As JavaScript is not a type-safe language, we can pass any type of data members with the methods.
*/
//example where a child class object invokes the parent class method.
class A{
    display(){
        console.log("class A is invoked");
    }
}
class B extends A{

}
//An instance of the "B" class is then created called "b" using the "new" keyword.
var b = new B();
b.display();