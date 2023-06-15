//display the year value from the given date.
class Moment extends Date{
    constructor(year){
        super(year);
    }
}
var m = new Moment("August 16, 1947 20:22:10");
console.log("Year value : ");
console.log(m.getFullYear());