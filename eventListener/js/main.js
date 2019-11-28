function myFunction1(){
	var person = prompt("Please enter your name", "Harry Potter");
	if (person != null) {
		document.getElementById("insert"). innerHTML = "Hello " + person + " ! How are you today?"
	}
}

function myFunction(){
	let list = document.getElementsByTagName("ul")[0];
	list.getElementsByTagName("li")[0] .innerHTML = "Cake";
}

function myFunction2(){
	let list = document.getElementsByTagName("ul")[0];
	list.getElementsByTagName("li")[1].innerHTML = "Burger";
}
function changecolor(){
	var x = document.getElementById("change");
	var y = x.getElementsByClassName("child");
	var i;
	for (i = 0; i <y.length; i++) {y[i].style.backgroundColor = ("green");
		
	}
document.getElementById("boo").style.backgroundColor = ("blue");
}
function insert(){
	document.writeln("<h1>Welcome to JavaScript Programming!</h1>");
}
function toUP(){
	var x = document.getElementById("fname");
	x.value = x.value.toUpperCase();
}
function onChange(){
	var a = document.getElementById("mySelect").value
	document.getElementById("changed").innerHTML = " You selected: " + a; 
}
function Error(){
	alert("You could not load the image")
}

function toYellow(x){
	x.style.background = "yellow";
}