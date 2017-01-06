var button = document.querySelector("button");
var body = document.querySelector("body");
// var isBlue = false;
// function buttonClick() {
// 	if (isBlue) {
// 		body.style.background = "white"
// 	}
// 	else {
// 		body.style.background = "blue"
// 	}
// 	isBlue = !isBlue;
// }

function buttonClick(){
	document.body.classList.toggle("blue")
}

button.addEventListener("click", buttonClick)

