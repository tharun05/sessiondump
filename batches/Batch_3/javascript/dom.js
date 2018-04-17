// changing the behaviour of document using document object is known as dom manipulation

console.log(document.getElementsByTagName('p'));

console.log(document.getElementById('hello'))

console.log(document.getElementsByClassName('pClass'));

console.log(document.querySelectorAll('p'));
console.log(document.querySelector('div'))

var addcontent = document.getElementById('addContent');

addcontent.innerText = "new Text";

addcontent.innerHTML += "hello <span>digitallync</span>";

addcontent.outerHTML += '<h2 id="hello">technologies<span>gachibowli</span></h2>';

var span1 = document.querySelectorAll('h1 span');

span1[0].innerHTML = 'new text here';


console.log(typeof addcontent)
console.log(typeof span1)

var spanElem = document.getElementById('spn');

var element = document.createElement('div');
element.className = "blue"

element.style.cssText = "width:200px;height:20px;background:blue";
element.onclick = function(){
	alert('clicked blue dev element')
}

var target = document.getElementById('yellow');
document.body.insertBefore(element,target)



