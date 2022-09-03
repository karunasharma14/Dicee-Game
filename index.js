//changing image 1 for player 1

var randomNumber1 = Math.floor(Math.random()*6) + 1;      //random number between 1-6
var randomDiceImage1 = "Dice" + randomNumber1 + ".png";  //random image corresponding random number
var randomImage1Source = "images/" + randomDiceImage1; //selecting random image
var image1 = document.querySelectorAll("img")[0];     //selecting image tag
image1.setAttribute("src" , randomImage1Source);   //changing image


//changing image 2 for player 2

var randomNumber2 = Math.floor(Math.random()*6) + 1;       //random number between 1-6
var randomDiceImage2 = "Dice" + randomNumber2 + ".png";   //random image corresponding random number
var randomImage2Source = "images/" +randomDiceImage2;    //selecting random image
var image2 = document.querySelectorAll("img")[1];       //selecting image tag
image2.setAttribute("src" , randomImage2Source);       //changing image




if(randomNumber1 > randomNumber2){
  document.querySelector("h2").innerHTML = "🥳 Player 1 Wins !";
}
else if (randomNumber2 > randomNumber1){
  document.querySelector("h2").innerHTML = "Player 2 Wins 🥳 !";
}
else {
  document.querySelector("h2").innerHTML = "Draw 🏳️ !";
}
