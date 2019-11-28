let studentArray = ["Leonardo", "Raphael", "Donatello", "Michalangelo"];
console.log("the first student name is: " + studentArray[0]);

	var fruits, text, fLen, i;
fruits = ["Banana", "Orange", "Apple", "Mango"];
fLen = fruits.length;

text = "<ul>";
for (i = 0; i < fLen; i++) {
  text += "<li>" + fruits[i] + "</li>";
}
text += "</ul>";

document.getElementById("demo").innerHTML = text;


let number = [10, 20, 30]
let sum = 0;	
for (var i = 0; i < number.length; i++) {
	sum += number[i];
}


average = sum / number.length;

function show(){
	document.getElementById("showArray").innerHTML = number;
}
function avg(){
	document.getElementById("result").innerHTML = average;
}

function convert(){
	let cm = parseInt(document.getElementById("centi").value);
	let inch = cm / 2.54;
	document.getElementById("result").innerHTML = inch;


}

