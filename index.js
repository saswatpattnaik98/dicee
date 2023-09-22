var randomNumber1 = Math.floor(Math.random()*6)+1;
console.log(randomNumber1);

var firstImageSrc="images/dice"+randomNumber1+".png";


var randomNumber2 = Math.floor(Math.random()*6)+1;
console.log(randomNumber2);

var secondImageSrc="images/dice"+randomNumber2+".png";



document.querySelector("img.img1").setAttribute("src",firstImageSrc);
document.querySelector("img.img2").setAttribute("src",secondImageSrc);


if (randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="💪 Player 1 won";
} else if (randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="Player 2 won 🫠";
} else {
    document.querySelector("h1").innerHTML="Give each other a 😘";
}