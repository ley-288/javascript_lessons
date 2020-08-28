function phoneticLookup(val){
	var result = "";

	var lookup = {
		"alpha": "Adams",
		"bravo": "Boston",
		"charlie": "Chicago",
		"delta": "Denver",
		"echo": "Easy",
		"foxtrot": "Frank"
	};
	result = lookup[val];

	return result;

}

phoneticLookup("charlie");

//instead of this switch statement. object setup.

/*	switch(val){
		case "alpha":
			result = "Adams";
			break;
		case "bravo":
			result = "Boston";
			break;
		case "charlie":
			result = "Chicago";
			break;
		case "delta":
			result = "Denver";
			break;
		case "echo":
			result = "Easy";
			break;
		case "foxtrot":
			result = "Frank";
			break;
	}

}
*/

..
//check if obj has a property

var myObj = { //object
	gift: "pony",
	pet: "kitten",
	bed: "sleigh"
};

function checkObj(checkProp){
	if (myObj.hasOwnProperty(checkProp)){ //myObj is object above. pass in (checkProp).
		return myObj[checkProp]; //return the value of that property.
	} else {
		return "Not Found"
	}
}

checkObj("gift"); //pass in gift will return Pony.

..

var myMusic = [ //inside arrays are objects. inside objects are key value pairs.
	{
		"artist": "Billy Joel",
		"title": "Piano Man",
		"release_year": "1973",
		"formats":[
			"CD":
			"8T",
			"LP"
		],
		"gold": true
	},
	{
		"artist": "Beau Carnes",
		"title": "Cereal Man",
		"release_year": "2003",
		"formats": [
			"Youtube Video"
		]
	}
]

..

var myStorage = {
	"car": {
		"inside":{
			"glove box: maps",
			"passenger seat": "crumbs"
		},
		"outside":{
			"trunk": "jack"
		}
	}
};

var gloveBoxContects = myStorage.car.inside["glove box"]; //the . to go inside. remember [square brackets] because property name has a space in it.

gloveBoxContents

..

var myPlants = [ //2 objects in an array. inside objects key value pair. inside is another array
	{
		type: "flowers",
		list:[
			"rose",
			"tulip",
			"dandelion"
		]
	},
	{
		type: "trees",
		list:[
			"fir",
			"pine",
			"birch"
		]
	}
];

var secondTree = MyPlants[1].list[1]; //returns pine.

..

var collection = {
	"2548": {
		"ablbum": "Slippery When Wet",
		"artist": "Bon Jovi",
		"tracks":[
			"Let It Rock",
			"You Give Love a Bad Name"
		]
	},
	"2468": {
		"ablbum": "1999",
		"artist": "Prince",
		"tracks":[
			"1999",
			"Little Red Corvette"
		]
	},
	"1245": {
		"artist": "Bon Jovi",
		"tracks":[ ]
	},
	"5439": {
		"album": "ABBA Gold",
	}
};

var collectionCopy = JSON.parse(JSON.stringify(collection)); //copy of object. before anything is changed

function updateRecords(id, prop, value){
	if (value === ""){ //if value isnt blank
		delecte collection[id][prop]; //id from collection. property under id.
	} else if (prop === "tracks"){ //and proprty isnt tracks
		collection[id][prop] = collection[id][prop] || []; //if exists. equal iself. meaning remain. but if it doesnt then equal an empty array (create proprty if it doesnt already exist)
		collection[id][prop].push(value); //push the value onto proprty
	} else {
		collection[id][prop] = value; //set property to equal value
	}

	return collection;
}

updateRecords(2468, "tracks", "test"); //will add test to prince tracks
updateRecords(5439, "artist", "ABBA"); //will add abba to artists

..

go to 7.js





