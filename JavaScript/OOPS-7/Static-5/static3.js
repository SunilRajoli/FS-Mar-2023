//Invoke more than one static method with similar names
class Test{
    static display(){
        return "Static method invoked";
    }
    static display(){
        return "Static method invoked again";
    }
}
console.log(Test.display());