function randomNumber() {
	return Math.floor(Math.random() * 6 + 1); // this is random number from 1-6
}

function gameFunction() {
	let holder = randomNumber();
	let randomImages = "pictures/dice" + holder + ".png"; // pictures/dice.png
	document.querySelectorAll("img")[0].setAttribute("src", randomImages); //select images from 1 -6

	let holder1 = randomNumber();
	let randomImages1 = "pictures/dice" + holder1 + ".png"; // pictures/dice.png
	document.querySelectorAll("img")[1].setAttribute("src", randomImages1); //select images from 1 - 6

	if (randomImages > randomImages1) {
		document.querySelector("h1").textContent = "Player 1 Wins!!!";
	} else if (randomImages < randomImages1) {
		document.querySelector("h1").textContent = "Player 2 Wins!!!";
	} else {
		document.querySelector("h1").textContent = "Draw!!!";
	}
} 

gameFunction();
