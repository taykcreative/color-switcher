const button = document.getElementById("button");
const body = document.getElementById("body");
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

body.style.backgroundColor = 'red'
button.addEventListener('click', changeBackground)

function changeBackground(){
    const colorIndex = parseInt(Math.random()*colors.length)
    body.style.backgroundColor = colors[colorIndex]
}
