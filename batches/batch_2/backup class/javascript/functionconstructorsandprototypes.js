// prototypes

var obj = {
	firstName:'digitallync',
	locationn:'gachibowli',
	greet:function(){
		console.log(this.firstName +' '+this.locationn)
	}
}
console.log(JSON.parse(JSON.stringify(obj)));
for(var item in obj){
	console.log(obj[item])
}
// console.log(obj)
// obj.greet();


// console.log(Object.keys(obj))


// function person(){
// 	var name = "digitallync";
// 	var greet = function(){
// 		console.log(name)
// 	}
// }

// person.prototype.greeting = function(){
// 	console.log(name);
// }

// person();


var Person = function(firstname,game){
	this.firstname = firstname;
	this.game = game;

}

Person.prototype.greet = function(){
	console.log(this.firstname)
}
Person.prototype.play = function(){
	console.log(this.game)
}

var person = new Person('digitallync technologies','soccor');
console.log(person.toString());
console.log(person.greet());
console.log(person.play());

Object.prototype.sayhello = function(){
	console.log('say hello')
}






function fourth(){
console.log('fourth')
}


function logsomthing(call){
	console.log('firstname')
	console.log('second')
	setTimeout(function(){
	 console.log('third')
	 call();
},2000)
}


let a = (call) =>{
	console.log('1')
	call()
}
let b =()=>{
	console.log('2')
}
let c = () =>{
	console.log('3')
}
let d = () =>{
	console.log('4')
};



a(b);

a(c);

a(d);


logsomthing(fourth);