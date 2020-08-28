//Ternerary operator

// condition -- ? -- if true : if false : else;

function checkEqual(a, b){
	return a === b ? true : false

	//same as return a === b;
}

checkEqual(1, 2);

..

function checkSign(num){

	return num > 0 ? "positive" : num < 0 ? "negative" : "zero" //two ternerary operators
}

checkSign(10);

..

//let vs var. var is less workable. it calls the function once locally and then stops.

var catName = "Quincy";
var quote;

var catName = "Beau";

function catTalk(){
	"use strict";

	catName = "Oliver";
	quote = catName + " says Meow!";
}

catTalk();

//however!

let catName = "Quincy"; //let it be
let quote;

catName = "Beau"; //reset

function catTalk(){
	"use strict";

	catName = "Oliver";
	quote = catName + " says Meow!";
}

catTalk();

..

function checkScope(){
	"use strict";
	var i = "function scope";
	if (true){
		i = "block scope";
		console.log("Block scope i is: ", i);
	}
	console.log("Function scope i is: ", i);
	return i;
}

checkScope(); //Block scope i is "block scope", Function scope i is "block scope"

//however!

function checkScope(){
	"use strict";
	let i = "function scope";
	if (true){
		let i = "block scope";
		console.log("Block scope i is: ", i);
	}
	console.log("Function scope i is: ", i);
	return i;
}

checkScope(); //Block scope i is "block scope", Function scope i is "function scope"

..

function printManyTimes(str){
	"use strict";

	var sentence = str + " is cool!";

	sentence = str + " is amazing!" //reassigned. possible with var and let but not with const

	for(var i = 0; i < str.length; i+=2){
		console.log(sentence);
	}
}

printManyTimes("freeCodeCamp");

..

//const constant variables cannot be reassigned but arrays can be changed

const s = [5, 7, 2];
function editInPlace(){
	"use strict"

	s[0] = 2;
	s[1] = 5;
	s[2] = 7;
}
editInPlace();

..

//obj.freeze prevents value mutation

function freezeObj(){ //created constant
	"use strict"
	cont MATH_CONSTANTS = {
		PI: 3.14
	};

	Object.freeze(MATH_CONSTANTS); //now cannot change

	try{ //so will skip try
		MATH_CONSTANTS.PI = 99;
	} catch ( ex ){ //and go here to log error
		console.log(ex);
	}
	return MATH_CONSTANTS.PI;
}

const PI = freezeObj();

console.log(PI);

..

go to 9.1.js















