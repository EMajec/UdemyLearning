var p1button = document.querySelector("#p1")
var p2button = document.getElementById("p2")
var gameOver = document.getElementById("GameOver")
var p1Count = document.getElementById("p1Score")
var p2Count = document.getElementById("p2Score")
var gameLengthDisplay = document.querySelector("#length")
var gameLength = document.querySelector("input")

var gg = false;

var resetButton = document.querySelector("#reset")

var p1Score = 0;
var p2Score = 0;
// var length = 0;

function changeLength(){
	gameLengthDisplay.textContent = gameLength.value;
	reset()
}


function reset(){
	gg = false;
	p1Score = 0;
	p2Score = 0;
	p1Count.textContent = 0;
	p2Count.textContent = 0;
	gameOver.textContent= ""
	p1Count.classList.remove("Score")
	p2Count.classList.remove("Score")
}

function p1scoreUp() {
	if (!gg){
	p1Score ++;
	
}
	if (p1Score >= gameLength.value){
		gameOver.textContent = "Player 1 Wins"
		gg = true;
		p1Count.classList.add("Score")
	}
	p1Count.textContent = p1Score;
	
	
}
function p2scoreUp() {
	if (!gg){
	p2Score ++;
	}

	if (p2Score >= gameLength.value){
		gg = true;
		gameOver.textContent = "Player 2 Wins"
		p2Count.classList.add("Score")
	}
	p2Count.textContent = p2Score;
}

p1button.addEventListener("click", p1scoreUp)
p2button.addEventListener("click", p2scoreUp)
resetButton.addEventListener("click", reset)
gameLength.addEventListener("change", changeLength)