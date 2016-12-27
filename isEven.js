function isEven(x) {
	return x % 2 === 0;

function factorial(x) {
	var total =x;
	if (x == 0){
		return 1;
	}
	else{
	for( var i = x-1; i >= 1; i--){
		total *=i;
	}
	return total
}
}


function kebabToSnake(word) {
	var newString = word.replace(/-/g,"_")
	return newString;
}



sing() {
	console.log("Twinkle twinkle..");
	console.log("how i wonder...");
}

setInterval(sing,1000);
clearInterval(x)

setInterval(function(){
	console.log("I am an anonymous function")
},2000)


var kids = ["Sam","Mike","Toby"]
kids[0]

kids.push()
kids.pop()
kids.slice(0,2)
kids.indexOf("Toby")

// Todo List Quiz
// new - add a todo
// list - list all todos
// quit - quit

var todos =[];

var input = prompt("What would you like to do?");

while(input !=="quit") {
	if(input === "list") {
		console.log(todos);
	}

	else if(input === "new") {
		var newTodo = prompt("Enter new todo");
		todos.push(newTodo);
	}
	var input = prompt("What would you like to do?");
}

console.log("Ok, you're done")

// Array iteration
var kids = ["Sam","Mike","Toby"]
for (var i = 0; i < kids.length; i++) {
	console.log(kids[i]);
}

kids.forEach(function(i){
	console.log(kids)
})

// New todo - Refractored




var todos =[];

var input = prompt("What would you like to do?");

while(input !=="quit") {
	if(input === "list") {
		listTodos();
	}

	else if(input === "new") {
		addTodos();
	}

	else if(input === "delete"){
		delTodos();
	}
	var input = prompt("What would you like to do?");
}
console.log("Ok, you're done")

function listTodos(){
	console.log("**********")
		todos.forEach(function(todo, i) { 
			console.log(i+":"+todo);
			console.log("**********");
		});
}

function addTodos(){
	var newTodo = prompt("Enter new todo");
	todos.push(newTodo);
	console.log("Added " + newTodo);
}

function delTodos(){
	var del = prompt("Index of item to delete?")
	todos.splice(del,1)
	console.log("Deleted item");
}

// Object Practice

var person = {
	name: "Mike"
	age: 22
	gender: "Male"
	city: "DC"
}

console.log(person["name"]) or console.log(person.name)
person.age += 1

person.school = West High;
person.name = "James"