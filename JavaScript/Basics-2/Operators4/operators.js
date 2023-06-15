/*
Javascript Operators:
            Javascript operators are symbols used to perform operations on operands.

Types of operators:
            six types of operators:
            Arthemetic operators
            comparison(Relational) operators
            Bitwise operators
            Logical operators
            Assignment operators
            Special operators
*/
/*
Javascript Arthemetic operators:
            Javascript Arthemetic operations are used to perform arthemetic operations on operands.
*/
var sum = 10 + 20; //addition + 30
var sub = 20 - 30; //subtraction - -10
var mul = 10 * 20; //multiplication * 200
var div = 40 / 20; //division / 2 
var mod = 20 % 10; //modulus(Remainder) % 0
var inc = 20++; //increment ++ 20 + 1 = 21
var dec = 10--; //decrement -- 10 - 1 = 9
/*
Javascript comparison operators:
            Javascript comparison operator compares the two operands.
*/
if(10 == 20){}; //equal to == returns false
if(10 === 20){}; //identical or same datatype === returns false
if(10 != 20){}; //not equal to != returns true
if(10 !== 20){}; //not identical or not same datatype !== returns false
if(20 > 30){}; //greater than > returns false
if(20 < 30){}; // less than < returns true
if(20 >= 30){}; //greater than or equal to >= return false
if(20 <= 30){}; //less than or equal to <= return true
/*
Javascript Bitwise operations:
            Javascript operators provides Bitwise operations on operands.
*/
if(10 == 20 & 20 == 30){}; //Bitwise AND & return false
if(10 == 20 | 10 == 10){}; //Biwise OR | return true
if(10 == 20 ^ 10 == 30){}; //Bitwise XOR ^ return false
if(~10){}; //Bitwise NOT ~ -10
if(10 << 2){}; //Bitwise Left Shift << 40
if(10 >> 2){}; //Bitwise Right Shift >> 2
/*
Javascript Logical operators:
            The following operators are known as logical operators.
*/
if(10 == 20 && 20 == 30){}; //Logical AND && return false
if(10 == 20 || 20 == 30){}; //Logical OR || return false
if(!(10 == 20)){}; // Logical NOT ! return true
/*
Javascript Assignment operators:
            The following operators are known as Assignment operators.
*/
(10 + 10) = 20; //Assign = 
a += 20; //Add and Assign +=
a -= 10; //Sub and Assign -=
a *= 20; //Mul and Assign *=
a /= 2; //Divide and Assign /=
a %= 20; //Modulus and Assign %=
/*
Javascript Special operators:
            The following operators are known as Special operators.

(?:) - conditional operator return value based on condition.
, - comma operator allows multiple expressions to be evaluted as single statement.
delete - delete operator deletes a property from object.
in - in operator checks if object has given property.
instanceOf - checks if object is instance of given type.
new - creates new instance(object).
typeof - checks type of object.
void - it discards the expressions return value.
yield - ckecks what is returned in the generator by generator's iterator.
*/
