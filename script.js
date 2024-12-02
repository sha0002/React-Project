// let color = document.querySelector("button").onclick = function(){
//     document.body.style.background = ("red")

// }

// function clickbutton(color) {
//     return function () {
//         document.body.style.background = `${color}`
//         console.log("click the color")
//     }
// }

// document.querySelector("button").onclick = clickbutton("red")

function clickbutton() {
    document.body.style.background = ("red")
    document.querySelector("h1").onclick = document.body.style.color = ("white")
}

function clickbtn() {
    document.body.style.background = ("blue")
    document.querySelector("h1").onclick = document.body.style.color = ("white")
}