// callbacks

var userDataa = [];


function logSomething(userData){
	if(typeof userData === "string"){
		console.log(userData)
	}
	else if(typeof userData === "object"){
		for(var item in userData){
			console.log(item +' '+ userData[item])
		}
	}
}

// function that takes two parameters the last one shud be callback function

function takeInputs(userData, anything){
	userDataa.push(userData);
	console.log(userDataa);
	anything(userData);
}

takeInputs({name:'digitallync',location:'gachibowli'},logSomething)