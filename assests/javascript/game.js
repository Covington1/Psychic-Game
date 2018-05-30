   var start = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; 
    var win = 0;
    var tryLeft = 10;
    var wrong = [];
    var loss = 0;
    var randomstart = start[Math.floor(Math.random()*start.length)];

function reset(){
    tryLeft = 10;
    wrong = [];
    randomstart = start[Math.floor(Math.random()*start.length)];
    document.getElementById("guesses").innerHTML = tryLeft;
    document.getElementById("wrong").innerHTML = wrong;
    document.getElementById("hint").innerHTML = randomstart;
}

document.onkeyup = function(event){
var userGuess = event.key;
    if(start.indexOf(userGuess) > -1){
        var userGuessSpan = document.getElementById("guess").innerHTML = userGuess;

if (randomstart === userGuess){
        win++;
        var youWin = document.getElementById("win").innerHTML = win;
        alert("You Win!");
       reset();
    } else if (randomstart !== userGuess){
        tryLeft--;
        var tryleftDiv = document.getElementById("guesses").innerHTML = tryLeft;
            if (tryLeft === 0){
            loss++;
            var youloss = document.getElementById("losses").innerHTML = loss;
                alert("Start Over!")
                   reset();
                }  
        wrong.push(userGuess);
        var wrongBank = document.getElementById("wrong").innerHTML = wrong;
        };/* !== userGuess*/
 
    }; //begin start keyUp
}; //begin keyup function
    
    document.getElementById("win").innerHTML = win;
    document.getElementById("guesses").innerHTML = tryLeft;
    document.getElementById("losses").innerHTML = loss;
    var yourHint = document.getElementById("hint").innerHTML = randomstart;