// function constructors
// Emp.prototype.ctc = function(){
// 	console.log(25000)
// 	console.log(this.position)
// }
// emp.ctc()

// for(var item in emp){
// 	console.log(item[item])
// }

var Emp = function(name,location,estd,position,experience){
	this.name = name;
	this.location = location;
	this.position = position;
	this.estd = estd;
	this.exp = experience;
}

var emp = new Emp('digitallync','kukatpally',2016,'developer','12years');
console.log(emp)

var Emp3 = function(address){
	this.address = address;
}
var emp3 = new Emp3('khajaguda'); 
console.log(emp3);

Emp.call(emp3,'IBM','gachibowli',1998,'infrastructure architect','12years')
console.log(emp3);


// handeling 'this' with call, bind, apply method

var obj = {
	name:'tharun',
	currentObj: this
}
console.log(obj.currentObj)

var obj1 = {
	name:'sedan'
}

var nameObj = {
	name:'dillikar'
}


function Test(a,b){
	this.a = a;
	this.b = b;
	console.log(this)
}

Test(10,20);
// var test = new Test(10,20);
// console.log(test)

Test.call(obj1,20,40)


function MultipleOf3(a,b){
	this.a = a;
	this.b = b;
	console.log(this)
	console.log(a*b)
}

var multiOf3 = MultipleOf3.bind(nameObj,2,4);
multiOf3();

Test.apply(obj1,[30,400])









