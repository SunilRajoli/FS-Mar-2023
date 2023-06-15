//Invoke static method within the constructor
class Test{
    constructor(){
            console.log(Test.display());
            console.log(this.constructor.display());
    }
    static display(){
        return "static method invoked";
    }
}
var t = new Test();