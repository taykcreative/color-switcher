const red = document.getElementById("red");
const orange = document.getElementById("orange");
const yellow = document.getElementById("yellow");
const green = document.getElementById("green");
const blue = document.getElementById("blue");
const purple = document.getElementById("purple");

const body = document.getElementById("body");
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];

body.style.backgroundColor = 'white'
button.addEventListener('click', changeBackground)

function changeBackground(color){
    body.style.backgroundColor = color
}
