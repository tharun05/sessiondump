var name = "lyncschool";
var area = 'kukatpally';
console.log(this)
var obj = {
	name:'digitallync',
	area:'gachibowli',
	greet:function(){
		console.log('welcome to ' + this.name + ' ' + this.area)
		console.log(this)
	},
	hobbies:['cricket','soccor'],
	players:[{

	}]
}

obj.greet();
console.log(JSON.parse(JSON.stringify(obj)));
console.log(Object.keys(obj));

for(var item in obj){
	console.log(obj[item])
}

var obj1 = Object.create(null);
obj1.name = 'digitallync technologies';
obj1.area = 'khajaguda';
delete obj1.area;
console.log(obj1)

var newObject = Object.assign({},obj1)

delete obj1.name;
console.log(obj1)
console.log(newObject);

var objec = {
	name:'hyderabd'
}
var objec1 = {
	name:'hyderabd'
}
console.log(objec === objec1);

