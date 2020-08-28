function worldBlanks(myNoun, myAdjective, myVerb, myAdverb) {
	//code
	var result = "";
	result += "The " + myAdjective + " " + myNoun + " "+ myVerb + " to the store " + myAdverb "."
	return result;
}

console.log(worldBlanks("dog", "big", "ran", "quickly")); //calling function
console.log(worldBlanks("bike", "slow", "flew", "slowly"));

..

var ourArray = ["John", 23]; //arrays can contain multiple datatypes
var myArray = [];

..

//nested array //array within an array

var ourArray = [["the universe", 42], ["everything", 101010]];

..

var ourArray = [50, 60, 70];
var ourData = ourArray[0]; //equals 50 // finds element in the array

..

var ourArray = [18,64,99];
ourArray [1] = 45; //our array now equals [18,45,99] //[1] will be the second number

..

var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]]; //3 layer deep array
var myData = myArray[0][0]; //[0] [0] would be 1. [2] [1] would be 8

..

var ourArray = ["Stimpson", "J", "cat"];
ourArray.push(["happy", "joy"]); //push function pushes another array into the array
//our array now equals ["Stimpson", "J", "cat", ["happy", "joy"]]

..

var ourArray = [1,2,3];
var removedFromOurArray = ourArray.pop(); //pop function removes last element. now removedFromOurArray now = 3. ourArray now equals [1,2]

var myArray = [["John", 23], ["cat", 2]];
var removedFromMyArray;

..

var ourArray = ["Stimpson", "J", ["cat"]];
var removedFromOurArray = ourArray.shift(); //shift takes first element. removedFromOurArray now equals "Stimpson" and ourArray now equals ["J", ["cat"]]

..

var ourArray = ["Stimpson", "J", "cat"];
ourArray.shift(); // ourArray now equals ["J", "cat"] //remove first element... then..
ourArray.unshift("Happy"); //our array now equals ["Happy", "J", "cat"] //unshift adds element to beginning of array

..

var myList = [["cereal",3], ["milk", 2], ["bananas", 3], ["juice", 2], ["eggs", 12]]

..

function ourReusableFunction() {
	console.log("Heyya, World");
}

ourReusableFunction(); //calling function

..

function ourFunctionWithArgs(a,b) {
	console.log(a - b);
}

ourFunctionWithArgs(10, 5); //outputs 5

..

go to 3.js

















