// Object declaration
var Person = function (firstName, lastName) {
	this.firstName = firstName;
	this.lastName = lastName;
}

// Create Person Object
function logPerson(){
	var name = new Person('bibhu', 'samal');
	console.log(name);
}

logPerson();