var company = {
    name: 'Digital-lync',
    location: 'gachibowli',
    landmark: 'delhi public school'
}

var company2 = {
    name: 'lync school',
    location: 'khajaguda',
    landmark: 'police station'
}



// console.log(company);
// console.log(company2);

// /*function constructors*/

// // function company1(){
// // 	console.log('inside function')
// // }
// var name = "infosys";
// var locationn = "gachibowlii";
// var Company1 = function(name, location, landmark){
// 	this.name = name;
// 	this.location = location;
// 	this.address = function(){
// 		console.log('this is '+' '+ this.name + ' ' + 'and the location is '+ this.location)
// 	}
// }



// var company1 = new Company1('infosys satya', 'gachibowlii','microsoft');
// var company2 = new Company1('tech mahindra', 'gachibowlii','microsoft');
// // console.log(typeof company1 === typeof company2);

// company1.address();


// // console.log(company1)

// // var companyobject = Object.create(null);

// // companyobject.name = 'paraxell';
// // companyobject.location = 'mindspace';
// // console.log(companyobject);

// Company1.prototype.greet = function(){
// 	console.log(this.location)
// }
// company1.greet();

// console.log(company1.keys());

console.log(this);
var objec = {
    name: 'tharun',

    func: function() {
        console.log(this)
    }
}

objec.func();


var btn = document.getElementById('btn');
console.log(btn)

var count = 0;
btn.addEventListener('click', function() {
    count++;
    this.style.color = 'purple';
    this.style.height = '50px';
    this.style.width = '100px';
    this.style.backgroundColor = 'green';
    // this.remove(this);
    this.innerHTML = 'clicked me';
    this.innerText = 'clicked me again';
    console.log('add event addEventListener triggered');
        var span = document.getElementById('span')

    if (count == 1) {
        var button = document.createElement('BUTTON');
        button.innerHTML = 'created button dynamically';

        span.appendChild(button);
        console.log(span)
    }
    var para = document.getElementsByClassName('para');
    
    console.log(para)

    for(var i = 0; i< para.length;i++){
    	console.log(para[i]);
    	span.appendChild(para[i])
    }
    console.log(span)




});


// window.addEventListener('mousemove', function() {
//     btn.style.color = 'none';
//     btn.style.height = 'none';
//     btn.style.width = 'none';
//     btn.style.backgroundColor = 'green';
// })