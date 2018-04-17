// "Strict Mode";

/*variables*/

var variable = 5;
console.log(typeof variable)

// variable = 'tharun';
console.log(variable);

variable = 1.5;

console.log(typeof variable)

var item = undefined;

// console.log(typeof item);


// item = 10;

// console.log(item)

var empty = null;

console.log(empty === item)
// console.log(typeof empty)

// empty = 10;

// console.log(empty)


var num = NaN;

console.log(typeof num);

console.log('asdha' * 5);


var arr = [1, 2, 3, 4, 'tharun', null, undefined];

console.log(typeof arr)

console.log(arr[4]);


function name() {
    console.log('function')
    var num = 10;
    console.log(num)
}

name();


var lync = function() {
    console.log('anonymos function')
}


console.log(lync);

// var obj = {
//     'name': 'tharun'
// }

// console.log(obj.name);



/*-------------------------------------------*/



// var1=22;


// console.log(var1);

// var var1;

var name = 'tharun'

var globalfn = function() {
    return 'sam';

}

console.log(globalfn())



/*arrays*/


// var arr = [1, 2, 4, 'tharun', 5, 6, 7];



// arr.forEach(function(item) {
//     console.log(item)
// })

// console.log(arr.indexOf(4))

// console.log(arr.unshift());
// console.log(arr.shift());
// console.log(arr.splice(1,3))

// console.log(arr);

// console.log(arr.slice(4,6))
// console.log(arr);
// arr[1] = 10;

// arr[4] = 100;

// arr[8] = 200;

// console.log(arr.pop());

// arr.push(1000);

// console.log(arr.indexOf(4));
// console.log(arr);


// function calc(num1, num2){
// 	console.log(num1 + num2);
// }


// calc(10,20, 100);


/*OBECTS*/

// var obj = {
// 	'name':'digital-lync',
// 	'fn': function(){
// 		return 'fjalskdfkladsj';
// 	},
// 	'age':23
// }

// console.log(Object.keys(obj));

// console.log(obj.fn());


// var fun = function(name, age){
// 	this.name = name;
// 	this.age = age;
// }

// var tarun = new fun('tharun',23);
// var company2 = new fun('symbiosys', 1898);
// console.log(company2);

var firstname = "tharunesh"
var obj = {
    firstname: 'digital-lync',
    location: 'gachibowli',
    landmark: 'andhra bank',
    fn: function() {
        console.log('this is a' + ' ' + this.firstname)
    }
}


var obj2 = {
    firstname: 'digital',
    location: 'gachibowli',
    landmark: 'andhra bank',
    fn: function() {
        console.log('this is a' + ' ' + this.firstname)
    }
}

Object.prototype.greet = function() {
    console.log(this.firstname);
}

obj.greet();


// console.log(JSON.stringify(obj));

obj.fn();

var obj1 = Object.create(obj);

console.log(obj1);

// function clickme(){
// 	console.log(this)
// }

function Person(firstname, lastname, age) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
}

var person = new Person('daniel', 'mark', 33);

var person1 = new Person('jason', 'andrew', 11);
console.log(person == person1)
console.log(person1)

console.log(this);

var elem = document.getElementById('exit')

// elem.onclick = function(){
// 	alert('da')
// 	var extElem = document.getElementsByClassName('close');
// 	extElem.close();
// }


function fn(message) {
    console.log('welcome to digital-lync', this.name, message)
}

var obj = {
    objfn: fn
}

var prpps = {
    name: 'tharun',
    age: 23,
    greet: function() {
        console.log('welcome to prpps Object')
    }
}
// console.log(prpps.name)



// delete prpps.name;
// console.log(prpps.name);
// console.log(prpps)

// console.log('name' in prpps)
// obj.objfn.apply(name, ['dillikar']);

/*clouser*/
function company() {
    var name = "digital-lync technologies";
    return function() {
        console.log(name)
    }
}

company()();

/*iifs*/


// var object1 = {
// 	name:'andrew simons'
// }
// (function branch() {
//     for (var item in prpps) {
//         console.log(prpps[item])
//     }
// })();

(function branch(item){
	console.log(item)
})('tharun');

var arrs = [[2,3,4,5,6,7],['tharun','dillikar']];

// for(var item of arrs){
// 	console.log(item)
// }

arrs.forEach(function(item){
	item.forEach(function(val){
		console.log(val)
	})
})