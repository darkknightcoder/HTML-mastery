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
	let rain = prompt("Is it raining? 1 = Yes, 2 = No 3 = Vancouver");
	if (rain == 1 || rain == 3) {alert("take your umbrella")
	}
	else alert("do not take it");
}

function rainSwitch(){
	let rain = parseInt(prompt("Is it raining? 1= yes, 2 = No, 3 = Vancouver, 4 = Snow"),10);
	switch(rain)
	{
		case 1: alert("Take umbrella");
		break;
		case 2: alert("Do not take umbrella");
		break;
		case 3: alert("Always take the umbrella");
		break;
		case 4: alert("Yes, wear boots");
		break;
		default: rainSwitch();
	}
}

function fruit(){

	let fruit = "apple";
	let userInput = prompt("What is your favorite fruit");

	if 
		(userInput.toLowerCase() === fruit)
		console.log("You won an apple");
	

	else{console.log("You lost")
	}
}

function number(){
	let i;
	for (i = 0; i <= 9; i+=1) {
		console.log(i);
	}
}