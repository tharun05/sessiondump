var userData = [];

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


// function that twkes two parameters the last one should be a callback function

function takeInputs(data,callback){
	userData.push(data)
	console.log(userData)
	callback(data)
}


takeInputs({name:'digitallync',location:'gachibowli'},logSomething);



console.log('first console executed');

setTimeout(function(){
	console.log('set time out working after 2 seconds')
},2000);

console.log('second console executed');