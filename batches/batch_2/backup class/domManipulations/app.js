// var para = document.getElementById('hello');
// var btn = document.getElementById('btn')
// console.log(para);

// para.style.color = 'red';

// para.innerHTML = "NEW JAVASCRIPT CONTENT";

// para.innerHTML +=' digital-lync technologies';

// var heading = document.getElementsByClassName('heading');

// heading[0].innerHTML = 'Heading'
// console.log(heading);


// var element = document.createElement('div');
// console.log(element)

// element.style.cssText = 'width:200px;height:20px;background:blue;';

// element.onclick = function(){
// 	alert('dynamic createElement')
// }

// var target = document.getElementById('yellow');
// document.body.insertBefore(element,target);

// dynamic div styling


var elements = document.getElementsByName('cssProperty');

var div = document.getElementById('modify');

function set(){
	for(var index = 0; index<elements.length;index++){
		var cssProperty = elements[index].getAttribute('id');
		var cssValue = elements[index].value;
		div.style[cssProperty] = cssValue;
	}
}

document.getElementById('set').addEventListener('click',set);


 var firstname = document.getElementById('firstname');

 var getname = document.getElementById('getName');
var clear = document.getElementById('clearStorage');

 // getname.onclick = function(){
 // 	var obj = {
	// 		firstname:firstname.value
	// 	}
 // 	console.log(JSON.stringify(obj))
 // 	localStorage.setItem('myName',obj.firstname);


 // }

 // clear.onclick = function(){
 // 	localStorage.clear();
 // }





var x = 1;

if(x===1){
	x = 2;
	console.log(x);
}

console.log(x)

var showHide = document.getElementById('showHide');

var hideshow = document.getElementById('hideshow');

hideshow.onclick = function(){
	if(showHide.style.display === "none"){
		showHide.style.display = "block"
	}
	else{
		showHide.style.display = "none";
	}
	// console.log('dasdas')
}