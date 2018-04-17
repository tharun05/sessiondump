<!-- handleing 'this' with bind, call and apply methods -->

var obj = {
	name:'digitallync',
	currentObj:this
}
console.log(obj.currentObj);

var obj1 = {
	name:'sedan'
}

var nameObj = {
	name:'Tharun'
}

function test(a,b){
	this.a = a;
	this.b = b;
	console.log(this)
}

<!-- test(10,20); -->


test.call(obj1, 30,40);

function MultiplesOf3(a,b){
	this.a = a;
	this.b = b;
	console.log(a*b);
	console.log(this)
}

var multOf3 = MultiplesOf3.bind(obj1, 2,5);
multOf3();

test.apply(obj1, [2,3]);




