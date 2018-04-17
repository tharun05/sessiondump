var arr = [[1,2,3,4,5,6,7],[8,9,10,11,12,13],[14,15,16,17,18,19]];

// console.log(arr.pop());
// console.log(arr.push('Digital-lync'))
console.log(arr);

// console.log(arr.shift());
// console.log(arr.unshift());


console.log(arr.indexOf('tharun'));
// console.log(arr);

// console.log(arr.slice(3));
// console.log(arr);

// console.log(arr.splice(5));
// console.log(arr);



arr.forEach(function(item,index){
	item.forEach(function(nestedItem, nestedIndex){
		// console.log(nestedItem)
	})
	// console.log(index)
});
var arr1 = [[1,2,3,4,5,6,7,8],[9,10,11]]
for(var elem of arr1){
	console.log(elem);
	elem.forEach(function(item,index){
		console.log(item)
	})

}

// console.log(arr1.reverse());

// console.log(arr1.concat(arr));



