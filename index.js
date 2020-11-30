

var randomNmber=Math.floor(Math.random()*6)+1;

var randomNmberImage="dice"+randomNmber+".png";
var imageSource="images/"+ randomNmberImage ;

var image1 = document.querySelectorAll("img")[0];


image1.setAttribute("src", imageSource);

var randomNmber2=Math.floor(Math.random()*6)+1;

var randomNmberImage2="dice"+randomNmber2+".png";
var imageSource2="images/"+ randomNmberImage2 ;

var image1 = document.querySelectorAll("img")[1];


image1.setAttribute("src", imageSource2);

function f1(){

if(randomNmber>randomNmber2)
{
	document.querySelector("h1").innerHTML="player1 won";
}
else if(randomNmber2>randomNmber)
{
	document.querySelector("h1").innerHTML="player2 won";
}
else
{
	document.querySelector("h1").innerHTML="no one won the game";
}

}
