// random value generated
var y = Math.floor(Math.random() * 10+1);
  
// counting the number of guesses

var x = document.getElementById("guessField").value;

if (x == y)
{
    alert ("Congratulation!!!" + player_name+"You guessed it correct congrats" + guess
    + "Guess" );
    guess = 1;
}
  
// function for number guessed by user     

else if (x > y)

{
    guess++;
    alert("opps Sorry its wrong try a smaller nuumer");
}
else 
{ 
    guess++;
    alert("opps Sorry its wrong try a Bigger nuumer");
}

function playAgain() {
    y = Math.floor(Math.random() * 10+1);
}

function logout() { 
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
     window.location = ("index.html");
 }