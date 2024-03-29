/*
Javascript Static method:
            The JavaScript provides static methods that belong to the class instead of an instance of that class.
            So, an instance is not required to call the static method.
            These methods are called directly on the class itself.
Points to remember:
            The static keyword is used to declare a static method.
            The static method can be of any name.
            A class can contain more than one static method.
            If we declare more than one static method with a similar name, the JavaScript always invokes the last one.
            The static method can be used to create utility functions.
            We can use this keyword to call a static method within another static method.
            We cannot use this keyword directly to call a static method within the non-static method.
            In such case, we can call the static method either using the class name or as the property of the constructor.
*/
//using static metod
class Test{
    static display(){
        return "Static method invoked";
    }

}
console.log(Test.display());
