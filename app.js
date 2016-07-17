// split alphabet
var alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
var choseAlphebet = [];
var win = 0;
var lives = 9
var chances = 0;
var lose = 0;
// random letter chosen
var letter = alphabet[Math.floor(Math.random()*alphabet.length)];

var livesId = document.querySelector("#lives")
var winId = document.querySelector("#win")
var loseId = document.querySelector("#lose")
var outputId = document.querySelector("#output")
document.onkeyup = function(event){
		var keyup = String.fromCharCode(event.keyCode).toLowerCase();
			livesId.innerHTML = lives
		if (keyup == letter){
			alert("win")
			win++
			winId.innerHTML = win
		} else {
			choseAlphebet.push(keyup)
			console.log(choseAlphebet)
			console.log("you guessed this many times " + choseAlphebet.length)
			chances++
			lives--
			outputId.innerHTML = choseAlphebet
		}
		if(lives === 0) {
			chances = 0
			lose++
			loseId.innerHTML = lose
			lives = 9
			choseAlphebet = []
		}
		
}
livesId.innerHTML = lives
