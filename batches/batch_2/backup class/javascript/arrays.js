var arr = [1,2,3,4,5,'digitallync',null,{name:'tharun'},6,7,8,9,10];


for(var item of arr){
	console.log(item);
}

// console.log(arr.indexOf('digitallync'))
// var arry1 = ['gachibowli','digitallync']

// console.log(arr.concat(arry1));
// console.log(arr);

// console.log(arr[6]);

// arr.push(30);
// console.log(arr);

// console.log(arr.pop());

// console.log(arr.shift());

// console.log(arr.unshift());

// console.log(arr.slice(3,5))

// console.log(arr)

// console.log(arr.splice(1,6))
// console.log(arr);

// arr.forEach(function(item, index){
// 	item.forEach(function(item){
// 		console.log(item*3)
// 	})
		
	
// 	// console.log(index)
// })


// var arry = new Array(10,30);
// console.log(arry)

// console.log(arry.toString());

// var arr3 = [{name:'tharun'}];
// var arr4 = ['technologies'];



// console.log(arr3.join('*'));


function clouser(car){
	var outervariable = car;
	return function innerfunction(){
		console.log(outervariable)
	}
}



clouser('mecedies')();