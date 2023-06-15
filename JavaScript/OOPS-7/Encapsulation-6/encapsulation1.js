/*
Javascript Encapsulation:
            Javascript Encapsulation is a process of binding data(i.e, variables) with the functions acting on it.
            It allows us to control the data and validate it.
            To achieve the encapsulation-
                use var keyword to make data members private.
                use setter method to set the data and use getter method to get theb data.
The encapsulation allows us to handle an object using the following properties:
            Read/Write-we use setter methods to write the data and getter methods read that data.
            Read-we use getter methods only.
            Write-we use setter methods only.
*/
//encapsulation that contains two data members with its setter and getter methods.
class Student{
    constructor(){
        var name;
        var marks;
    }
    getName(){
        return this.name;
    }
    setName(name){
        this.name = name;
    }
    getMarks(){
        return this.marks;
    }
    setMarks(marks){
        this.marks = marks;
    }
}
var s = new Student();
s.setName("john");
s.setMarks(75);
console.log(s.getName()+" "+s.getMarks());
