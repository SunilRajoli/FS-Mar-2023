//Prototype based encapsulation
//constructor function takes two parameters
function Student(name, marks){
    //function defines two private variables to store name and marks
    var s_name = name;
    var s_marks = marks;
    //function uses Object.defineProperty method to define getters and setters method for namke and marks
    Object.defineProperty(this,"name",{
        get:function(){
            return s_name;
        },
        set:function(value){
            this.name = value;
        }
    });
    Object.defineProperty(this,"marks",{
        get:function(){
            return s_marks;
        },
        set:function(value){
            this.marks = value;
        }
    });
}
//call the constructor function
var s = new Student("hojdjk", 122);
console.log(s.name+" "+s.marks);
