var button = document.querySelector("button");
var paragraph = document.querySelector("p");
var body = document.querySelector("body")
button.addEventListener("click", function() 
{paragraph.textContent = "Someone Clicked the Button",
body.style.background="white"
});

var header = document.querySelector("h1");
header.addEventListener("click",function()
	{	if (body.style.background = "white") {
			body.style.background = "blue"}
		else if (body.style.background="blue") {
			body.style.background = "white"
		}
		});
// body.style.background ="blue"