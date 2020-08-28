//while loop

var myArray = [];

var i = 0;
while(i < 5){
	myArray.push(i);
	i++;
}

myArray; // 0, 1, 2, 3, 4

..

//for loop

var ourArray = [];

for (var i = 0; i < 5; i++){ //initialization, i to equal 0, condition, once this evaluates to false we break out of loop, increment i by 1.
	ourArray.push(i);
}

..

var ourArray = [];

for (var i = 0; i < 10; i += 2){ //can increment by another number. here 2.
	ourArray.push(i);
}

// 0, 2, 4, 6, 8

..

//count backwards

var ourArray = [];

for (var i = 10; i > 0; i -= 2){
	ourArray.push(i);
}

..

var ourArr = [9, 10, 11, 12]; //array already exists
var ourTotal = 0;

for (var i = 0; i < ourArray.length; i++){ //start at 0 but going through length. ++ to the total
	ourTotal += ourArr[i];
}

(ourTotal);

//adds total upto 42

..

//nested for loops too access all elements

function multiplyAll(arr){ //defined here
	var product = 1;

	for (val i = 0; i < arr.length; i++){ //3
		for (var j = 0; j < arr[i].length; j++){
			product *= arr[i][j]; //i references outer array, j references inner array
		}
	}
	return produtct;
}

var product = multiplyAll([[1,2], [3,4], [5,6,7]]); //called here, passing in multi dimensional array. 3 elements.

(product);

..

// do while loop

var myArray = [];
var i = 10;

do {
	myArray.push(i);
	i++;
} while (i < 5) 

console.log(i, myArray); //11, [10]. i is 11 and array has 10 added to it

..

var contacts = [
	{
		"firstName": "Akira",
		"lastName": "Laine",
		"number": "0543236543",
		"likes": ["Pizza", "Coding", "Brownie Points"]
	},
	{
		"firstName": "Harry",
		"lastName": "Potter",
		"number": "05992084234",
		"likes": ["Hogwarts", "Magic", "Hagrid"]
	},
	{
		"firstName": "Sherlock",
		"lastName": "Holmes",
		"number": "0234234234",
		"likes": ["Violin", "Intruiging Cases"]
	},
	{
		"firstName": "Kristian",
		"lastName": "Vos",
		"number": "056234636643",
		"likes": ["Javascript", "Gaming", "Foxes"]
	},
];

function LookUpProfile(name,prop){
	for (var i = 0; i < contacts.length; i++){
		if(contacts[i].firstName === name){
			return contacts[i][prop] || "No such property";
		}
	}
	return "No such contact"
}

var data = LookUpProfile("Akira", "likes");

console.log(data);
..

go to 8.js







