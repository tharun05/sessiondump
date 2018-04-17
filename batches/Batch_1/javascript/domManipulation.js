// var header = document.getElementsByName('head');

// console.log(header);

// var btn = document.getElementsByTagName('button')[0];
// console.log(btn);

// var para = document.createElement('p');
// console.log(para);
// var parentnode = document.getElementById('parentNode');
// para.innerHTML = 'afjskahdflkajsdfhksdjhfalskdjfhaslkjdfhasljkf';

// parentnode.appendChild(para);

// para.style.fontSize = '40px';
// para.style.color = 'yellow';
// btn.onclick = function(){
// 	para.style.cssText = 'width:500px;height:40px;background:blue';
// }
var div = document.getElementById('modify');
var element = document.getElementsByName('cssProperty');


function set(){
	for(i=0;i<element.length;i++){
		var cssProperty = element[i].getAttribute('id');
		console.log(cssProperty)
		var cssValue = element[i].value;
		console.log(cssValue)
		div.style[cssProperty] = cssValue;
	}
}

document.getElementById('set').addEventListener('click', set);



// var objec = {
// 	name:'digitallync',
// 	func:function(){
// 		console.log(this)
// 	}
// }

// objec.func();
// var objt = {
// 	location:'gachibowli'
// }
// function Person(name){
// 	this.name = name;
// 	console.log(this)
// }

// var person = new Person('potter');
// console.log(person)
// Person.call(objt, 'potter');

// Person.apply(objt, ["harry"]);

// var bindmethod = Person.bind(objt, 'tharun');

// bindmethod()

// var toggle = document.getElementById('toggle');
// var showhide = document.getElementById('showhide');


// toggle.onclick = function(){debugger;
// 	if(showhide.style.display === 'none'){
// 		showhide.style.display = "block";
// 	}
// 	else 
// 	{
// 		showhide.style.display = "none"
// 	}
// }


var x = 1;

if(x === 1){
	let x = 2;
	console.log(x)
}

console.log(x)



