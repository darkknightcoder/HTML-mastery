 function Hello(){
 	let name = prompt("Hello, what is your name?");
 document.getElementById("demo").innerHTML = "Hello " + name;
}

function Goh(){
let number = parseInt(prompt("Give a number"),10);
let total = number + 10;
alert(total);
}

function Gohu(){
	let age = parseInt(prompt("How old ar you?"),10);
	let total = age + 1;
	alert("You will be " + total + " years old next year ");
}

function Rain(){
	let rain = prompt("Is it raining? 1 = Yes, 0 = No");
	if (rain == 1) {alert("take your umbrella")
	}
	else alert("do not take it");
}