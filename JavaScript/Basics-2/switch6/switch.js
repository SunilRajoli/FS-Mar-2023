/*
Javscript Switch:
            Javascript Switch Statements is used to execute one code from multiple statements.
syntax:
        switch(expression){
            case value 1:
                code to be executed
            break;
            case value 2:
                code to be executed
            break;
            .....
            default:
                code to be executed if above values are not matched
        }
*/
var grade = 'B';
var result;
switch(grade){
    case 'A':
        result = "A grade";
    break;
    case 'B':
        result = "B grade";
    break;
    case 'C':
        result = "C grade";
    break;
    default:
        result = "No grade"
}
console.log(result);