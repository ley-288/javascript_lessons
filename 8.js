//fractions

function randomFraction(){



	return Math.random();
}

console.log(randomFraction())

..

//random whole number

var randomNumberBetween0and19 = Math.floor(Math.random() * 20); //floor rounds down. not including 20 because we rounds down so 19.

function randomWholeNum(){


	return Math.floor(Math.random() * 10);
}

console.log(randomWholeNum());

..

function ourRandomRange(ourMin, ourMax) {

	return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;
}

ourRandomRange(1,9);

function randomRange(myMin, myMax){

	return 0;
}

var myRandom = randomRange(5, 15);

console.log(myRandom);

..

function convertToInteger(str){
	return parseInt(str);

}
convertToInteger("56")

..

function convertToInteger(str){
	return parseInt(str, 2);

}
convertToInteger("10011")

..

go to 9.js











