function salary(){
	let x = parseInt(document.getElementById("goh").value);
	let y = parseInt(document.getElementById("an").value);
	let S;
	if (x > 40) {
		let b = x - 40;
		let I = (b) * (y * 0.2);
		 parseInt((S = (x * y) + I).value);
	}
	else{S = x * y}
	alert("$" +  S  ) 
}
function convert(){
	let Fahrenheit = parseInt(document.getElementById("fahren").value);
	let Celsius;
	Celsius = (Fahrenheit - 32) / 1.8;
	document.getElementById("result").innerHTML = Celsius;
	if (Celsius <= 0) {alert(Celsius + " It's freezing");}
	else if (Celsius >= 30) {alert(Celsius + " It's too hot");}
	else {alert(Celsius);}
}
function check(){
	if (document.getElementsByClassName("Lambo")[0].checked && document.getElementsByClassName("Teh")[0].checked) {alert("You made it, 2 of 2!")
	}else if (document.getElementsByClassName(("Van")[0],[2],[3],[4],[5],[7]).checked || document.getElementsByClassName("Teh")[0].checked) {alert("1 of 2! Good job.")
	}else if (document.getElementsByClassName("Lambo")[0].checked || document.getElementsByClassName(("Van")[0],[2],[3],[4],[5],[7]).checked) {alert("1 of 2! Good job.")
	}else {alert("0 of 2. You should study more!")}
}
