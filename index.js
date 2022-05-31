var randomNumber1 = 1+Math.floor(Math.random()*6);
var randomNumber2 = 1+Math.floor(Math.random()*6);
var dice1 = "images/dice"+randomNumber1+".png";
var dice2 = "images/dice"+randomNumber2+".png";
var winner;
if(randomNumber1>randomNumber2){
   winner="player1 wins";
}
else if(randomNumber1<randomNumber2){
    winner="player2 wins";
}
else{
    winner="draw";
}
document.querySelector("h1").innerHTML=winner;
document.querySelector(".img1").setAttribute("src",dice1);
document.querySelector(".img2").setAttribute("src",dice2);