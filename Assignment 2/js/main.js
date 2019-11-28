function Hello(){
	let name = prompt("Hello, what is your name?");
	document.getElementById("demo").innerHTML = "Hello " + name + " Nice work! Let's start!"
}
function convert(){
	let Fahrenheit = parseInt(document.getElementById("fahren").value);
	let Celcius = (Fahrenheit - 32) / 1.8;
	document.getElementById("result").innerHTML = Celcius;
	alert(Celcius);
}
function check(){
	if (document.getElementById("csgo").checked) {alert("Wrong")
	}else if (document.getElementById("rainbow").checked) {alert("Wrong")
	}else if (document.getElementById("fort").checked) {alert("Correct")
	}else if (document.getElementById("apex").checked) {alert("Wrong")}
	else {alert("Select something")}

}

function animal(){
	if (document.getElementById("lion").checked) {alert("Wrong")
	}else if (document.getElementById("dog").checked) {alert("Wrong")
	}else if (document.getElementById("bear").checked) {alert("Correct")
	}else if (document.getElementById("wolf").checked) {alert("Wrong")}
	else {alert("Select something")}
}

function age(){
	let age = prompt("How old are you?");
	if (age == 0) {alert("oh Baby, how can you work with computer that early in life");
	}else if (age == 100) {alert("you are too old to play!");
	}else if (age < 0) {alert("you’re kidding, right?");}
	else {alert("You can play")
	}
	
}
function number(){
	let i = prompt("Give me a number!");
	if (i % 2 == 0) {alert("Your number is even")
	}else {alert("It's odd")}	
		
}


