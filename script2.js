<p id="output"></p>
var fname = prompt("First name: ", fname);
var lname = prompt("Last name: ", lname);
var byear = prompt("Birth year: ", byear);
var age = 2024 - byear;

document.getElementById("output").innerHTML = "Hello " + fname + " " + lname + "! How does it feel to be " + age + " years old?";