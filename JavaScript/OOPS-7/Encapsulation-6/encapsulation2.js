//validate the marks of the student.
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
        if(marks < 0 || marks > 100){
            alert("Invalid marks");
        }
        else{
            this.marks = marks;
        }
    }
}
var s = new Student();
s.setName("goat");
s.setMarks(99);
console.log(s.getName()+" "+s.getMarks());