var randomNumber1 = Math.floor(Math.random()*6)+1;
document.querySelector(".img1").setAttribute("src","images/dice"+randomNumber1+".png");

var randomNumber2 = Math.floor(Math.random()*6)+1;
document.querySelector(".img2").setAttribute("src","images/dice"+randomNumber2+".png");

var randomNumber3 = Math.floor(Math.random()*6)+1;
document.querySelector(".img3").setAttribute("src","images/dice"+randomNumber3+".png");

if (randomNumber1 > randomNumber2){
  if (randomNumber1 > randomNumber3)
  {
    document.querySelector("h1").innerHTML="Achan Wins!";
  }
  else if (randomNumber1 < randomNumber3)
  {
    document.querySelector("h1").innerHTML="Amma Wins!";
  }
  else if (randomNumber1 === randomNumber3)
  {
    document.querySelector("h1").innerHTML="Draw!";
  }
}

else if (randomNumber2 > randomNumber1){
  if (randomNumber2 > randomNumber3)
  {
    document.querySelector("h1").innerHTML="Ayu Wins!";
  }
  else if (randomNumber2 < randomNumber3)
  {
    document.querySelector("h1").innerHTML="Amma Wins!";
  }
  else if (randomNumber2 === randomNumber3)
  {
    document.querySelector("h1").innerHTML="Draw!";
  }
}

else {
    if (randomNumber2 === randomNumber1 === randomNumber3)
    {
        document.querySelector("h1").innerHTML="Draw!";
    }
    else if ((randomNumber2 === randomNumber1) && randomNumber1 > randomNumber3)
    {
        document.querySelector("h1").innerHTML="Draw!";
    }
    else {
        document.querySelector("h1").innerHTML="Amma Wins!";
    }
}
