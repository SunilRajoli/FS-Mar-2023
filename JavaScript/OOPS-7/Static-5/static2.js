//Invoke more than one static method
class Test{
    static display(){
        return "Static method invoked";
    }
    static display2(){
        return "Static method invoked again";
    }
}
console.log(Test.display());
console.log(Test.display2());