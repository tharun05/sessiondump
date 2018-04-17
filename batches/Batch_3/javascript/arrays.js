var arr = [1,2,3,4,5,6,'fjkslahf',1.4];


console.log(arr.indexOf(1.4))

console.log(arr.pop());
console.log(arr.push('digitallync'))
console.log(arr)


console.log(arr.shift());
console.log(arr.unshift());

// splice and slice methods are used to select the range from your array.
// slice and splice methods

var arr1 = [1,2,3,4,5,6,7,8]

// slice return old array
console.log(arr1.slice(2,5));
console.log(arr1)

// splice returns new array
console.log(arr1.splice(3,5))
console.log(arr1)

var arr2 = [1,2,3,4,5,6,7,8,9];

arr2.forEach(function(item,index){
	console.log(item*5)
})

console.log(arr2.reverse());

for(var item of arr2){
	console.log(item)
}


// function scopes will have variable scoping but conditional scope will not have variable scopes
var global = 30;

function localScope(){
	var global = 40;
	console.log(global)
}
localScope();
console.log(global)

var x = 1;
if(x==1){
	var x = 2;
	console.log(x)
}

console.log(x)






