var a; //declare (a is declared)
var b = 2; //declaring and assigning. 2 is being assigned to 2
console.log(a) // will = null
a = 7; //now value assigned to a
b = a; //now value assigned to b
console.log(a) // will show 7

..

// declarations

var stUdLyCapVar;

//assignmets

STUDLYCAPVAR = 10; //not the same variable because JS is case sensitive

..

var sum = 10 + 10;
console.log(sum) //will log 20

..

var difference = 45 - 33;

..

var product = 8 * 0;

..

var quotient = 66 / 22;

..

var myVar = 67
myVar ++; //will increment variable by 1. now 68

..

myVar --; //decrement

..

var ourDecimal = 5.7;
var myDecimal = 0.009;

..

var product = 2.0 * 2.5;
console.log(product) //will reveal product value 5.

..

var remainder;
remainder = 11 % 3; //modulus will be 2. the remainder of the sum

..

var a = 3;
var b = 17;
var c = 12;

//only modify below this line

a = a + 12; // a += 12
b = 9 + b; // b += 9
c = c + 7; // c += 7 // we are declaring and assigning the variable

..

-= // for subtraction

b = b - 15; // b -= 15 // subtracts that number from previous value and assigns new value to that variable

..

a = a * 5 // a *= 5

..

a = a / 12 // a /= 12

..

\""\ to put quotations into a string

..

' "" ' also works

..

 // \' single quote 
// \" double quote 
\\ backslash
\n new line
\r carriage return
\t tab
\b backspace
\f form feed

var myStr = "FirstLine\n\t\\SecondLine\nThirdLine"

..

var ourStr = "I come first. " + "I come second. ";
var myStr = "This is the start." + "This is the end" //one long string

..

var ourStr = "I come first";
ourStr += "I come second"; //adds new line to end of variable string

..

var myName = "Leyton"
var ourStr = "Hello, " + myName + ", how are you?";

..

var anAdjective = "awesome!";
var ourStr = "javascript is ";
ourStr += anAdjective; // "javascript is awesome!" //meaning we change the value of 'ourStr' by adding the second string.

..

var firstNameLength = 0; //we need 2 variables. one to take integer, one to take the string
var firstName = "Ada";

firstNameLength = firstName.length; //so the integer is going to equal that of the first name using .length property.

var lastNameLength = 0;
var lastName = "Lovelace";

//only change code after declaring and assigning values

lastNameLength = lastName;
console.log(lastNameLength) //then requesting that integer ...will return 8 (in this case)

..

//bracket notations

var firstLetterOfFirstName = "";
var firstName = "Ada";

firstLetterOfFirstName = firstName[0];

var firstLetterofLastName = "";
var lastName = "Lovelace";

firstLetterofLastName = lastName[0]; //and so on for different letters of string name.

..

//strings cannot be altered once created.
var myStr = "Jello World";
//but can be changed later
myStr = "Hello World";

..

//can find the last letter based on string length

var firstName = "Ada";
var lastLetter = firstName[firstName.length - 1]; //-1 because of 0. then -whichever number to find relative letter.

..

Go To 2.js!


