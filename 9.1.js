//arrow function

const magic = () => new Date();

..

var myConcat = function(arr1, arr2){
	return arr1.concat(arr2);
};

console.log(myConcat([1, 2], [3, 4,5]));

//becomes

const myConcat = (arr1, arr2) => arr1.concat(arr2); //we concatinate (join) the two arrays to make [1,2,3,4,5]

console.log(myConcat([1, 2], [3, 4,5]));

..

const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];

const squareList = (arr) => {
	const squaredIntegers = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x); //to find the ints in the array. not the decimals. then square them.
	return squaredIntegers;
};

const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);

..

//default parameters

const increment = (function(){
	return function increment(number, value = 1){ //if a number isnt passed in it will be set to 1 automatically
		return number + value;
	};
})();
console.log(increment(5,2)); //7
console.log(increment(5)); //6

..

//rest operator

const sum = (function(){
	return function sum(x, y, z){ //3 arguemtents and summing them
		const args = [x, y, z]; //first setting them into an array called args
		return args.reduce((a,b) => a + b, 0); //summing and returning
	};
})();
console.log(sum(1, 2, 3));

const sum = (function(){
	return function sum(...args){ //rest operator automatically stores into an array so no need for array line anymore.
		return args.reduce((a,b) => a + b, 0); //summing and returning
	};
})();
console.log(sum(1, 2, 3, 4)); //before we could only have 3 arguements but now we can have any number of arguments

..

//spread operator

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
(function(){
	arr2 = [...arr1]; //making a copy. instead of making array 2 match array 1, it will copy array 1 before any changes.
	arr1[0] = 'potato' //change array 1. array 2 remains
})();
console.log(arr2);

..

//destructuring

var voxel = {x: 3.6, y: 7.4, z: 6.54}; //obj 3 elements

//var x = vowel.x; //x = 3.6
//var y = vowel.y; //y = 7.4
//var z = vowel.z; //z = 6.54

const { x : a, y : b, z : c } = voxel; // a = 3.6, b = 7.4, c = 6.54

const AVG_TEMPERATURES = {
	today: 77.5,
	tomorrow: 79
};

function getTempOfTmrw(avgTemperatures){
	"use strict"

	const {tomorrow : tempOfTomorrow} = avgTemperatures; //get tomorrow field from avtemperatures object and assign it to tempoftomrrow variable

	return tempOfTomorrow;
}

console.log(getTempOfTmrw(AVG_TEMPERATURES)); // 79

..

const LOCAL_FORECAST = { //nested objects in nested object
	today: { min: 72, max: 83},
	tomorrow { min: 73.3, max: 84.6}
};

function getMaxOfTmrw(forecast){
	"use strict";

	const { tomorrow : {max : maxOfTomorrow}} = forecast; //set the max of tomorrow into maxoftomorrow

	return maxOfTomorrow;
}

console.log(getMaxOfTmrw(LOCAL_FORECAST)); //84.6

..

//assign variables from arrays

const [z, x] = [1,2,3,4,5,6]; //assigning z and x to the first two numbers of array. 1 and 2. it goes in order so to assign 4 we add empty commas to the z,x box
console.log(z, x);


let a = 8, b = 6; 
(() => {
	"use strict";
	[a, b] = [b, a] //switch values.
})();
console.log(a);
console.log(b);

..

//destructing assignment with rest operator

const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) { //passing in the source array and it becomes the list

	const [ , , ...arr] = list; //removes first two items.

	return arr;
}

const arr = removeFirstTwo(source);
console.log(arr); //[3,4,5,6,7,8,9,10]
console.log(source); //[1,2,3,4,5,6,7,8,9,10]

..

const stats = {
	max: 56.778,
	standard_deviation: 4.34,
	median:34.54,
	mode: 23.87,
	min: -0.75,
	average: 35.85
};
const half = (function() {
	return function half({max, min}){ //just 2 of the stats needed
	return (max + min) / 2.0; //
	};
})();
console.log(stats);
console.log(half(stats)); //28.015

..

go to 9.2.js





























