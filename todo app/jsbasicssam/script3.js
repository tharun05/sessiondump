var obj = {
	firstName:'ravi',
	lastName:'kumar',
	fullName:function(){
		console.log(obj.firstName+' '+obj.lastName)
	}
}

obj.fullName();

function Person(language){
	var lang = language;
	return function(firstName, lastName){
		console.log(firstName + ' ' +lastName +' '+  "knows" +' ' +lang);
		return function(age){
			console.log(firstName + lastName +' '+'age is '+ ' '+ age +' ' +'knows' + ' '+lang);
		}
	}
}

Person('hindi')('ravi', 'kumar')(22);

/*this, call, bind, apply*/

var obj1 = {
	name:'ravi'
}
var car = {
	type:'sedan'
}

function test(a, b){
	this.a = a;
	this.b = b;
	console.log(this);
}



test.call(car, 10, 20);
test.call(obj1, 10, 20);

function multiplicationOf3(a,b){
	this.a =  a;
	this.b = b;
	console.log(a*b)
}


var mulOf3 = multiplicationOf3.bind(obj1, 10,10);
// for(var i = 0;i< 10 ; i++){
// 	mulOf3(i)
// }


test.apply(car,['merc', 'audi']);

/*imediately invoked functions(iife's)*/

(function(name){
	console.log("this is from iify" + name);
})('adam');


(function(){
	console.log('kjhfask;jfh;sf')
})();

console.log(Math.random()*3);

console.log(Math.ceil(2.9))
var date = new Date();

console.log(date)