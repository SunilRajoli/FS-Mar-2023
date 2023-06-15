/*
Class Expression:
            Another way to define class is using class expression.
            Not mandatory to assign a name of class.
            class expression can be named or unnamed.
            the class expression allows us to fetch the class name.
*/
//unnamed class expression
var emp = class{
    constructor(id, name){
        this.id=id;
        this.name=name;
    }
}
console.log(emp.id);
//Redclaring class
var empl = class{
    constructor(id, name){
        this.id = id;
        this.name = name;

    }
    detail(){
        console.log(this.id+" "+this.name);
    }
}
var e1 = new empl(101, "rajoli");
var e2 = new empl(102, "Sunil");
e1.detail();
e2.detail();
//Redclaring class
var empl = class {
    constructor(id, name){
        this.id = id;
        this.name = name;

    }
    detail(){
        console.log(this.id+" "+this.name);
    }
}
var e1 = new empl(103, "kumar");
var e2 = new empl(104, "haha");
e1.detail();
e2.detail();