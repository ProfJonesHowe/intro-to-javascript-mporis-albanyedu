// Using let
let name = "Francis";
let age = 44;
let classyear = 2025;
let major = "Physics"; 
let isStudent = true;

document.getElementById("demo1").innerHTML =
  "Name: " + name + "<br>Age: " + age + "<br>Class Year: " + classyear + "<br>Major: " + major + "<br>Student: " + isStudent;

var city = "St. Louis";     // Function-scoped
let state = "Missouri";        // Block-scoped
const country = "USA";   // Cannot be reassigned

document.getElementById("demo2").innerHTML =
  "Location: " + city + ", " + state + ", " + country;
