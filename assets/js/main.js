/* javascript */
var record = [];
var computerGuess = 0;
var playerScore = 0;
var computerScore = 0;
var computerHit = 0;
var userGuess = 0;

// below is hover change color function
{
  $("#button-1").hover(function(){
  $("#button-1").css("background-color", "yellow");
  },
  function(){
  $("#button-1").css("background-color", "green");
});

$("#button-2").hover(function(){
  $("#button-2").css("background-color", "yellow");
  }, function(){
  $("#button-2").css("background-color", "green");
});

$("#button-3").hover(function(){
  $("#button-3").css("background-color", "yellow");
  }, function(){
  $("#button-3").css("background-color", "green");
});
$("#button-4").hover(function(){
  $("#button-4").css("background-color", "yellow");
  }, function(){
  $("#button-4").css("background-color", "green");
});
}

setTimeout(function(){
  document.getElementById("title-box").style.backgroundColor="black"
  document.getElementById("title").textContent="Hit to serve!"
  document.getElementById("title").style.fontSize="30px"
  $("#button-1").css("background-color", "green");
  $("#button-2").css("background-color", "green");
  showHitHideReturn()
}, 2000)


document.getElementById("button-1").addEventListener("click", function(){
  mainFunction(1);
  console.log("Your hitting record is: ", record, ". This is computer's guess",  computerGuess)
});

document.getElementById("button-2").addEventListener("click", function(){
  mainFunction(2);
  console.log("Your hitting record is: ", record, ". This is computer's guess: ",  computerGuess)
});



function recordHit(buttonNumber){
  record.push(buttonNumber)
}
function computerMakeGuess(){
  computerGuess = 0
  if (record.length <= 3) {
    computerGuess = Math.floor(Math.random()*2+1)
    console.log("record length less than 4");
    return
  }

  //the most recent two-letter sequence is 1 2
  if (record.at(-3)===1 && record.at(-2)===2) {
    var followedByOne = 0
    var followedByTwo = 0
    for (let i=0; i < record.length-2; i++){
      if (record.at(i)===1 && record.at(i+1)===2) {
        if (record.at(i+2)===1) {
          followedByOne++;
        } else if (record.at(i+2)===2) {
          followedByTwo++;
        }
      }
    }
    if (followedByOne > followedByTwo) {
      computerGuess = 1
    } else if (followedByOne < followedByTwo) {
      computerGuess = 2
    } else if (followedByOne === followedByTwo) {
      computerGuess = Math.floor(Math.random()*2+1)
    }
  }

  //the most recent two-letter sequence is 2 1
  else if (record.at(-3) ===2 && record.at(-2)===1){
    var followedByOne = 0
    var followedByTwo = 0
    for (let i=0; i < record.length-2; i++){
      if (record.at(i)===2 && record.at(i+1)===1) {
        if (record.at(i+2)===1) {
          followedByOne++;
        } else if (record.at(i+2)===2) {
          followedByTwo++;
        }
      }
    }
    if (followedByOne > followedByTwo) {
      computerGuess = 1
    } else if (followedByOne < followedByTwo) {
      computerGuess = 2
    } else if (followedByOne === followedByTwo) {
      computerGuess = Math.floor(Math.random()*2+1)
    }
  }

  //the most recent two-letter sequence is 1 1
  else if (record.at(-3)===1 && record.at(-2)===1){
    var followedByOne = 0
    var followedByTwo = 0
    for (let i=0; i < record.length-2; i++){
      if (record.at(i)===1 && record.at(i+1)===1) {
        if (record.at(i+2)===1) {
          followedByOne++;
        } else if (record.at(i+2)===2) {
          followedByTwo++;
        }
      }
    }
    if (followedByOne > followedByTwo) {
      computerGuess = 1
    } else if (followedByOne < followedByTwo) {
      computerGuess = 2
    } else if (followedByOne === followedByTwo) {
      computerGuess = Math.floor(Math.random()*2+1)
    }
  }

  //the most recent two-letter sequence is 2 2

  else if (record.at(-3)===2 && record.at(-2)===2){
    var followedByOne = 0
    var followedByTwo = 0
    for (let i=0; i < record.length-2; i++){
      if (record.at(i)===2 && record.at(i+1)===2) {
        if (record.at(i+2)===1) {
          followedByOne++;
        } else if (record.at(i+2)===2) {
          followedByTwo++;
        }
      }
    }
    if (followedByOne > followedByTwo) {
      computerGuess = 1
    } else if (followedByOne < followedByTwo) {
      computerGuess = 2
    } else if (followedByOne === followedByTwo) {
      computerGuess = Math.floor(Math.random()*2+1)
    }
  }
}
function verifyComputerGuess(buttonNumber){
  if (buttonNumber===computerGuess) {
    return true
  } else{
    return false
  }
}
function computerMakeAHit(){
  computerHit = Math.floor(Math.random()*2+5)
}
function youLost(){
  document.getElementById("button-1").style.display="none"
  document.getElementById("button-2").style.display="none"
  document.getElementById("button-3").style.display="none"
  document.getElementById("button-4").style.display="none"
  document.getElementById("title").textContent="You Lost! Refresh the page to restart."
}
function youWon(){
  document.getElementById("button-1").style.display="none"
  document.getElementById("button-2").style.display="none"
  document.getElementById("button-3").style.display="none"
  document.getElementById("button-4").style.display="none"
  document.getElementById("title").textContent="You Won! Refresh to restart."
}
function showHitHideReturn(){
  document.getElementById("button-1").style.display="inline-block"
  document.getElementById("button-2").style.display="inline-block"
  $("#button-1").css("background-color", "green");
  $("#button-2").css("background-color", "green");
  document.getElementById("button-3").style.display="none"
  document.getElementById("button-4").style.display="none"
}
function showReturnHideHit(){
  document.getElementById("button-1").style.display="none"
  document.getElementById("button-2").style.display="none"
  document.getElementById("button-3").style.display="inline-block"
  document.getElementById("button-4").style.display="inline-block"
  $("#button-3").css("background-color", "green");
  $("#button-4").css("background-color", "green");
}

function mainFunction(buttonNumber){
  recordHit(buttonNumber);
  computerMakeGuess();


  //computer makes a wrong guess, you win the point
  if(record.length !== 0 && !verifyComputerGuess(buttonNumber)){
    document.getElementById("title").textContent="You won this point! Hit to start another!"
    playerScore++;
    document.getElementById("sub-row-2-your-score").textContent=playerScore;
    if (playerScore===20) {
      youWon()
    }
    showHitHideReturn()
    return;
  } else { //computer makes a right guess, points goes on
    showReturnHideHit()
    computerMakeAHit()
    document.getElementById("title").textContent="The computer returned! Guess where it hits!"
  }

}


document.getElementById("button-3").addEventListener("click", function(){
  userGuess = 5;

  // if user makes a wrong guess
  if (userGuess!==computerHit) {
    computerScore++;
    document.getElementById("sub-row-1-computer-score").textContent= computerScore;
    document.getElementById("title").textContent="You made an incorrect guess. You lost the point."
    $("#button-3").css("background-color", "red");
    $("#button-4").css("background-color", "red");
    if(computerScore===20){
      youLost()
    }
    setTimeout(function(){
      document.getElementById("title").textContent="Next point. Hit to serve!"
      showHitHideReturn()
    }, 1500)
  }


  // if user makes a correct guess
  else{
    showHitHideReturn()
    document.getElementById("title").textContent="You sucessfully returned! Now hit!"
  }
})
document.getElementById("button-4").addEventListener("click", function(){
  userGuess = 6;



  // if user makes a wrong guess
  if (userGuess!==computerHit) {
    computerScore++;
    document.getElementById("sub-row-1-computer-score").textContent= computerScore
    document.getElementById("title").textContent="You made an incorrect guess. You lost the point."
    $("#button-3").css("background-color", "red");
    $("#button-4").css("background-color", "red");
    if(computerScore===20){
      youLost()
    }
    setTimeout(function(){
      document.getElementById("title").textContent="Next point. Hit to serve!"
      showHitHideReturn()
    }, 1500)
  }



  // if user makes a correct guess
  else{
    document.getElementById("title").textContent="You guessed computer's hit! Now hit!"
    showHitHideReturn()
  }
})
