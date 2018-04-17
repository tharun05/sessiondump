function Person(firstname,lastname){
	this.firstname = firstname;
	this.lastname=lastname;
}

Person.prototype.fullname = function(){
	return this.firstname +' '+ this.lastname;
}

var person = new Person('tharun','kumar');

console.log(person.fullname());
var person1 = new Person('digitallync','technologies');

console.log(person1);

console.log(person1.toString());

