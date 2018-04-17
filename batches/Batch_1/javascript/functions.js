function makeTea(sugar, milk){
	var instructions = 'boil water,';
	instructions += 'pour into cup,';
	instructions += 'add tea powder';
	instructions += 'add'+ sugar + 'spoons of sugar,';
	instructions += 'add' + milk + '% milk.';
	
	return instructions;
}

var maketea = makeTea(2, 30);
console.log(maketea);



function parentfun(){
	var parentvar = 'parentvar';
	// console.log('from parent func')
	return function(){
		console.log(parentvar)
		// console.log('from child function')
	}
}

parentfun()();


// clouser

function globalfun(){
	var globalvariable = 'outside variable'
	return function(game){
		console.log(globalvariable+' ' + game)
	}

}
globalfun()('cricket');

// (function(){

// })

(function(hobbies){
	console.log('immediatly invoked functions' +' '+hobbies)
})('soccor');





var car = {
	make:'volvo',
	speed:160,
	engine:{
		size:2.0,
		make:'bmw',
		fuel:'petrol',
		pistons:[{maker:'bmw'},{maker:'bmw2'}]
	},
	drive:function(){
		return "drive"
	}
}

console.log(car.engine.pistons);

function Fruit(x,y,color,score){
	this.x = x;
	this.y = y;
	this.color = color;
	this.score = score;
}

var apple = new Fruit(10,20,'red',200);

var apple2 = new Fruit(20,30,'green',300);

console.log(apple)
console.log(apple2);

console.log(this)

// handle 'this' keyword with call, bind and apply methods

var objec = {
	brand:'bmw',
	// currentObj: this,
}

function Vehicle(series, modal){
	this.series = series;
	this.modal =  modal;
}

var vehicle = new Vehicle('650','2018');
console.log(vehicle);

console.log(objec.currentObj)

// vehicle.call(objec, '840', '2018');


function callmethod(name, location){
	this.name = name;
	this.location = location;
	console.log(this);
}

// callmethod();

callmethod.call(objec, 'digitallync','gachibowli');










