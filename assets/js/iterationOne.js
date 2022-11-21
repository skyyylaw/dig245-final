/* javascript */
var record = [];
var computerGuess = 0;
var playerScore = 0;
var computerScore = 0;
var computerHit = 0;
var userGuess = 0;

setTimeout(function(){
  document.getElementById("title").textContent="Hit!"
  showHitHideReturn()
}, 3000)


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

function showHitHideReturn(){
  document.getElementById("button-1").style.display="inline"
  document.getElementById("button-2").style.display="inline"
  document.getElementById("button-5").style.display="none"
  document.getElementById("button-6").style.display="none"
}

function showReturnHideHit(){
  document.getElementById("button-1").style.display="none"
  document.getElementById("button-2").style.display="none"
  document.getElementById("button-5").style.display="inline"
  document.getElementById("button-6").style.display="inline"
}

function mainFunction(buttonNumber){
  recordHit(buttonNumber);
  computerMakeGuess();

  //computer makes a wrong guess, you win the point
  if(record.length !== 0 && !verifyComputerGuess(buttonNumber)){
    document.getElementById("title").textContent="You won this point! Hit to start another!"
    playerScore++;
    document.getElementById("sub-row-2-your-score").textContent=playerScore;
    if (playerScore===5) {
      alert("You won!")
    }
    showHitHideReturn()
    return;
  }
  //computer makes a right guess, points goes on
  else {
    computerMakeAHit()
    showReturnHideHit()
    document.getElementById("title").textContent="The computer returned! You need to return!"
  }
}

document.getElementById("button-5").addEventListener("click", function(){
  userGuess = 5;
  // if user makes a wrong guess
  if (userGuess!==computerHit) {
    computerScore++;
    document.getElementById("sub-row-1-computer-score").textContent= computerScore;
    document.getElementById("title").textContent="You made an incorrect guess. You lost the point."
    if(computerScore===5){
      alert("You lost!")
    }
    showHitHideReturn()
  }
  // if user makes a correct guess
  else{
    showHitHideReturn()
    document.getElementById("title").textContent="You sucessfully returned! Now hit!"
  }
})

document.getElementById("button-6").addEventListener("click", function(){
  userGuess = 6;
  // if user makes a wrong guess
  if (userGuess!==computerHit) {
    computerScore++;
    document.getElementById("sub-row-1-computer-score").textContent= computerScore
    document.getElementById("title").textContent="You made an incorrect guess. You lost the point."
    if(computerScore===5){
      alert("You lost!")
    }
    showHitHideReturn()
  }
  // if user makes a correct guess
  else{
    document.getElementById("title").textContent="You guessed computer's hit! Now hit!"
    showHitHideReturn()
  }
})
