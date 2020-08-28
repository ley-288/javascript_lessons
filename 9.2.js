const person = {
	name: "Zodiac Hasbro",
	age: 56
};

//template literal with multi line and string interpolation
const greeting = `Hello, my name is ${person.name}!
I am ${person.age} years old.`; //back ticks option + \ allows multi line string

console.log(greeting);

const result = {
	success:["max-length", "no-amd", "prefer-arrow-functions"],
	failure:["no-var", "var-on-top", "linebreak"],
	skipped:["id-blacklist", "no-dup-keys"]
};
function makeList(arr){ //
	const resultDisplayArray = [];
	for(let i = 0; i < arr.length; i++);{
		resultDisplayArray.push(`<li class="text-warning">${arr[i]}</li>`)
	}

	return resultDisplayArray;
	}
}

/**
* makeList(result.failure) should return:
* [`<li class="text-warning">no-var</li>`,
*  `<li class="text-warning">var-on-top</li>`,
*  `<li class="text-warning">linebreak</li>`]
**/

const resultDisplayArray = makeList(result.failure);

console.log(resultDisplayArray)

..

//returns an object

const createPerson = (name, age, gender) => {

	return{
		name: name,
		age: age,
		gender: gender
	};
};
console.log(createPerson("Zodiac Hasbro", 56, "male"));

//instead!

const createPerson = (name, age, gender) => ({ name, age, gender});
console.log(createPerson("Zodiac Hasbro", 56, "male")); //returns same thing

..

const bicycle = {
	gear: 2,
	setGear: function(newGear){
		"use strict";
		this.gear = newGear;
	}
};

bicycle.setGear(3);
console.log(bicycle.gear);

//instead


const bicycle = {
	gear: 2,
	setGear(newGear){
		"use strict";
		this.gear = newGear;
	}
};

bicycle.setGear(3);
console.log(bicycle.gear);

..

//create object the old way

var SpaceShuttle = function(targetPlanet){
	this.targetPlanet = targetPlanet;

}

var zeus = new SpaceShuttle('Jupiter');

console.log(zeus.targetPlanet)

//instead

class SpaceShuttle{
	constructor(targetPlanet){
		this.targetPlanet = targetPlanet;
	}
}

var zeus = new SpaceShuttle('Jupiter');

console.log(zeus.targetPlanet)

//and

function makeClass(){
	class Vegetable {
		constructor(name){
			this.name = name;
		}
	}

	return Vegetable;
}
const Vegetable = makeClass();
const carrot = new Vegetable('carrot');
console.log(carrot.name);

..

class Book {
	constructor(author){
		this._author = author;
	}
	//getter
	get writer(){
		return this._author;
	}
	//setter
	set writer(updatedAuthor){
		this._author = updatedAuthor
	}
}

..

function makeClass(){
	class Thermostat{
		constructor(temp){
			this._temp = 5/9 * (temp - 32);  //this means this variable only accessible in this class.
		}

		get temperature(){
			return this._temp;
		}

		set temperature(updatedTemp){
			this._temp = updatedTemp;
		}
	}
	return Thermostat;
}

const Thermostat = makeClass();
const thermos = new Thermostat(76); //76 goes into the constructor (temp)
let temp = thermos.temperature;
thermos.temperature = 26;
temp = thermos.temperature;
console.log(temp);

..

export const captitalizeString = str => str.toUpperCase() //pass in this function str. then execute

import { captitalizeString} from "./string_function" //or wherever
const cap = captitalizeString("hello!");

console.log(cap);

..

//to export a function

const captitalizeString = (string) => {
	return string.charAt(0).toUpperCase() + strin.slice(1); //capitalisez only first letter
}

export {captitalizeString};

export const foo = "bar";
export const bar = "foo";

..

//import everything

import * as captitalizeStrings from "./filename";

..

export default function subtract(x,y) {return x - y;}

..

import subtract from "math_functions";

subtract(7,4);

..
































