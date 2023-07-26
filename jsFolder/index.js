function randomNumber() {
	return Math.floor(Math.random() * 6 + 1); // this is random number from 1-6
}

function gameFunction() {
	let holder = randomNumber();
	let randomImages = "pictures/dice" + holder + ".png"; // pictures/dice.png
	document.querySelectorAll("img")[0].setAttribute("src", randomImages);

	let holder1 = randomNumber();
	let randomImages1 = "pictures/dice" + holder1 + ".png"; // pictures/dice.png
	document.querySelectorAll("img")[1].setAttribute("src", randomImages1);

	if (randomImages > randomImages1) {
		document.querySelector("h1").innerHTML = "Player 1 Wins!!!";
	} else if (randomImages < randomImages1) {
		document.querySelector("h1").innerHTML = "Player 2 Wins!!!";
	} else {
		document.querySelector("h1").innerHTML = "Draw!!!";
		document.querySelector("body").style.backgroundImage =
			"url('pictures/confetti.gif')";
	}
}

gameFunction();
