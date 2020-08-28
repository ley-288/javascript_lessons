function isLess(a,b){
	return a < b;
}

isLess(10,15); //true

..

function abTest(a,b){

	if (a < 0 || b < 0){
		return undefined;
	}

	return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

abTest(2,2);

..
//card count
var count = 0;

function cc(card){
	switch(card){
		case 2:
		case 3:
		case 4:
		case 5:
		case 6:
			count++;
			break;
		case 10:
		case "J":
		case "Q":
		case "K":
		case "A":
			count--;
			break;
	}

	var holdbet = 'Hold'
	if (count > 0){
		holdbet = 'Bet'
	}

	return count + " " + holdbet;
}

cc(2); cc(3); cc(7); cc('K'); cc('A');
console.log(cc(4))

..

//objects //properties inside the object. value after colon.

var ourDog = {
	"name": "Camper",
	"legs": 4,
	"tails": 1,
	"friends": ["everything!"]
};

var myDog = {
	"name": "Quincy",
	"legs": 3,
	"tails": 2,
	"friends": []

};

..

var testObj = {
	"hat": "ballcap",
	"shirt": "jersey",
	"shoes": "cleats"
};

var hatValue = testObj.hat; //ballcap (the value of)
var shirtValue = testObj.shirt; //jersey 

..

var testObj = { 
	"an entree": "hamburger",
	"my side": "veggies",
	"the drink": "water"
};

var entreeValue = testObj.hat["an entree"]; //when there is a space in the property we need bracket notation. hamburger
var drinkValue = testObj.shirt['the drink']; //water

..

var testObj = { 
	"9": "Ronaldo",
	"10": "Ronaldinho",
	"11": "Rivaldo"
};

var playerNumber = 9; //
var player = testObj[playerNumber]; //use variable name instead of number

..

var ourDog = {
	"name": "Camper",
	"legs": 4,
	"tails": 1,
	"friends": ["everything!"]
};

ourDog.name = "Happy Camper"; //we can re-sign the name to happy camper.

var myDog = {
	"name": "Coder",
	"legs": 4,
	"tails": 1,
	"friends": ["Code Campers"]

};

myDog.name = "Happy Coder" //new value

..

var ourDog = {
	"name": "Camper",
	"legs": 4,
	"tails": 1,
	"friends": ["everything!"]
};

ourDog.bark = "bow-wow"; //we can a new property. a 5th property

var myDog = {
	"name": "Coder",
	"legs": 4,
	"tails": 1,
	"friends": ["Code Campers"]

};

myDog['bark'] = "woof!" //new property with brackets.

..

var ourDog = {
	"name": "Camper",
	"legs": 4,
	"tails": 1,
	"friends": ["everything!"]
};

delete ourDog.bark; //we can also delete a property.

..

go to 6.js
























