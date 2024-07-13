// let input = document.getElementById("input");
// let button = document.getElementById("button");
// let give = document.getElementById("paragraph");

function nameToLength() {
  let name = document.getElementById("input").value;

  let length = name.length;
  document.getElementById("textarea").innerHTML =
    "Length of the name is : " + length;
}
