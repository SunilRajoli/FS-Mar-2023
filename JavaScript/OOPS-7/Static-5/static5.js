//Invoke a static method within the non-static method
class Test{
    static display(){
        return "static method invoked";
    }
    show(){
        console.log(Test.display());
    }
}
var t = new Test();
t.show();