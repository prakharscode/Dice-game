var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDiceImg = "images/" + "dice" + randomNumber1 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", randomDiceImg);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImg2 = "images/" + "dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomDiceImg2);

if (randomDiceImg > randomDiceImg2) {
  document.querySelector("h1").innerHTML = "Player 1 wins!";
} else if (randomDiceImg2 > randomDiceImg) {
  document.querySelector("h1").innerHTML = "player 2 wins";
} else {
  document.querySelector("h1").innerHTML = "It's a Draw!";
}
