function testLogicalAnd(val){

	if(val <= 50 && val >= 25){
		return "Yes";
	}

	return "No";
}

testLogicalAnd(10);

..

function testLogicalOr(val){

	if (val < 10 || val > 20){ // ||or
		return "Outside";
	}

	return "Inside";
}

testLogicalOr(15); //Inside

..

function testelse(val){

	if (val > 5){
	result = "Bigger than 5";
	} else {
		result = "5 or Smaller";
	}

	return result;
}

testElse(4); //5 or Smaller

..

function testElseIf(val){
	if (val > 10){
		return "Greater than 10"; 
	} else if (val < 5){
		return "Smaller than 5";
	} else {
		return "Between 5 and 10"
	}
}

testElseIf(7);

..

function orderMyLogic(val){
	if (val < 5){
		return "Less than 5"; 
	} else if (val < 10){
		return "Less than 10";
	} else {
		return "Greater or equal to 10"
	}
}

orderMyLogic(7); //logical order matters becuase once the first condition is met, it wont process the next condition. so smallest first in this case ie 5 before 10

..

//chained statements

function testSize(num){
	if (num < 5){
		return "Tiny"
	} else if (num < 10){
		return "Small"
	} else if (num < 15){
		return "Medium"
	} else if (num < 20){
		return "Large"
	} else {
		return "Huge"
	}

	return "Change Me";
}

testSize(7);

..

var names = ["Hole in one", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home"]
function golfScore(par, strokes){
	if (strokes == 1){
		return names[0]
	} else if (strokes <= par - 2){
		return names[1]
	} else if (strokes == par - 1){
		return names[2]
	} else if (strokes == par){
		return names[3]
	} else if (strokes == par + 1){
		return names[4]
	} else if (strokes == par + 2){
		return names[5]
	} else (strokes >= par + 3){
		return names[6]
	}
}

golfScore(5, 4); //par is 5, strokes are 4.

..

function caseInSwitch(val){
	var = answer "";
	switch(val){
		case 1:
			answer = "alpha";
			break;
		case 2:
			answer = "beta";
			break;
		case 3:
			answer = "gamma";
			break;
		case 4:
			answer = "delta";
			break;
	}
	return answer;
}

caseInSwitch(1); //alpha

..

function switchOfStuff(val){
	var = answer "";
	switch(val){
		case "a":
			answer = "apple";
			break;
		case "b":
			answer = "bird";
			break;
		case "c":
			answer = "cat";
			break;
		default:
			answer = "stuff";
			break;
	}
	return answer;
}

switchOfStuff("a"); //default answwer is set to empty string. so no input here will output empty string. we can change value to default

..

function sequentialSizes(val){

	var answer = "";
	switch(val){
		case 1:
		case 2:
		case 3:
			answer = "low";
			break;
		case 4:
		case 5:
		case 6:
			answer = "mid";
			break;
		case 7:
		case 8:
		case 9:
			answer = "high";
			break;
	}
}

sequentialSizes(1); //low

..

//switch statements can be easier to manage and follow than if else statements

function chainToSwitch(val){
	var answer = "";

	switch(val){
		case "bob":
			answer = "Marley";
			break;
		case 42:
			answer = "The Answer";
			break;
		case 1:
			answer = "There is no #1";
			break;
		case 99:
			answer = "Missed me by this much";
			break;
		case 7:
			answer = "Ate 9";
			break;
	}
}

..

go to 5.js

