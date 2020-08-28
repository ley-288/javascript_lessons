//Global scope

//Declare variable
var myGlobal = 10;

function fun1(){
	//assign 5 to oopsGlobal here // variable declared in a function
	oopsGlobal = 5;
}

//only chanfe code above this line
function fun2(){
	var outpur = "";
	if (typeof myGlobal != "undefinded"){ //if variable undefined. in this case no because we defined it as 10.. then run..
		output += "myGlobal: " + myGlobal; //"myGlobal: " + 10.
	}
	if (typeof oopsGlobal != "undefined"){
		output += " oopsGlobal: " + oopsGlobal;
	}
	console.log(output);
}
fun1();
fun2();

..

function myLocalScope(){ //value only exists inside function
	var myVar = 5;
	console.log(myVar);
}
myLocalScope();

console.log(myVar); //cannot find the value outside of function, this command will return an error. needs to be deleted.

..

var outerWear = "t-shirt"; //global variable declared out of function

function myOutfit(){
	var outerWear = "sweater"; //local variable

	return outerWear;
}

console.log(myOutfit()); //going to say sweater becuase local variable takes precedence over global variable

..

function minusSeven(num){
	return num - 7;
}

console.log(minusSeven(10)); //returns 3

..

var sum = 0;
function addThree(){
	sum = sum + 3; // would return undefined since sum is without a value
}

..
//returned value

var changed = 0;

function change(num){
	return (num + 5) / 3;
}

changed = change(10); //call function and store in "changed"

var processed = 0;

function processArg(num){
	return (num + 3) / 5;
}

processed = processArg(7) //now processed equals the mumber of this mathemathical expression

..

function nextInLine(arr, item) {
	arr.push(item);	//we took the arr(testArr) that was passed in. pushed on the item we want to add. 6.
	return arr.shift(); //to remove first item..
}

var testArr = [1,2,3,4,5];

console.log("Before: " + JSON.stringify(testArr)); // JSON.stringify changes an array into a string for easier printing to screen. 1,2,3,4,5
console.log(nextInLine(testArr, 6)); //add the next item, we declare as 6
console.log("After: " + JSON.stringify(testArr)); //the return value. array with shift. so 2,3,4,5,6

..

function welcomeToBooleans(){
	return false;
}

..

function ourTrueOrFalse(isItTrue){
	if (isItTrue){
		return "Yes, true";
	}
	return "No, false";
}

function trueOrFalse(wasThatTrue){
	if (wasThatTrue){
		return "Yes, true";
	}
	return "No, false";

}

trueOrFalse(true); //we pass in true. so console will return "yes, true"

..

function testEqual(val){
	if (val == 12){
		return "Equal";
	}
	return "Not Equal";
}

testEqual(10); //Not Equal

..

function testStrict(val){
	if (val === 7){
		return "Equal"
	}
	return "Not Equal"
}

testStrict(10);

// === strict equality operator. 3 === 3 is true while 3 === '3' is false becuase its not strictly exact

..

function comapreEquality(a,b){
	if (a == b){
		return "Equal";
	}
	return "Not Equal";
}

console.log(comapreEquality(10, "10")); //will be equal because == can compare ints and strings. === would be not equal as it doesnt covert types

..

function testNotEqual(a,b){
	if (val != 99){
		return "Equal";
	}
	return "Not Equal";
}

console.log(testNotEqual(10); // does type conversion and is not Equal. 10 not equal to 99

..

function testStrictNotEqual(val){

	if(val !== 17){

		return "Not Equal";
	}
	return "Equal";
}

console.log(testStrictNotEqual(10)) //will run not Equal

..

function testGreaterThan(val){
	if (val > 100){
		return "Over 100";
	}
	if (va > 10 ){
		return "Over 10";
	}

	return "10 or Under";
}

console.log(testGreaterThan(10)); //10 or under

..

function testGreaterThanOrEqual(val){
	if (val >= 20){
		return "20 or over";
	}
	if (val >= 10){
		return "10 or over";
	}

	return "Less than 10";
}

console.log(testGreaterThanOrEqual(10)); //10 or over

..

function testLessThan(val){
	if (val < 25){
		return "Under 25";
	}
	if (val < 55){
		return "Under 55";
	}

	return "55 or Over";
}

console.log(testLessThan(10)); //

..

function testLessThanOrEqual(val){
	if (val <= 12){
		return "Smaller than or equal to 12";
	}
	if (val <= 24){
		return "Smaller than or equal to 24";
	}

	return "More than 24";
}

console.log(testLessThanOrEqual(10)); //Smaller than or equal to 12

..

go to 4.js






