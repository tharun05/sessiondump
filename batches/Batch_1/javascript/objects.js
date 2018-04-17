
var companyName = 'honeywell';
var obj = {
	companyName:'digital-lync',
	location:'gachibowli',
	greet:function(){
		console.log('welcome to'+' '+ this.companyName);

	}
}
// console.log(obj.greet());
obj.greet();

for(var key in obj){
	console.log(obj[key])
}

var obj1 = Object.create(null);
obj1.companyName = 'TCS';
obj1.location = 'gachibowli';
obj1.fun = function(){
	console.log('welcome to'+' '+ this.companyName)
}
console.log(obj1)
obj1.fun();

// console.log(Object.toString(obj1));
console.log(JSON.stringify(obj1));
// function constructors

console.log(this);

var emp = function(name,location){
	this.name = name;
	this.location = location;
}

var emp = new emp('tharun','secunderabad');
// var emp1 = new Emp('dillikar','james street');
console.log(emp)

// emp1.greet = function(){
// 	console.log('lkdsa;fhlsdhas;lkdfh')
// }

// console.log(emp1)

// console.log(delete emp1.name);
// console.log(emp1)
// emp1.addedkey = 'lsakhflksdf;lkasjdfkl;sfjasdfkl;j;'
// console.log(emp1);

// var newObject = Object.assign({},emp1);
// console.log(newObject)

