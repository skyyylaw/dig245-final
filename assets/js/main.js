/* javascript */
var record = [];
var computerGuess = 0;
var playerScore = 0;
var computerScore = 0;
var computerHit = 0;
var userGuess = 0;


document.getElementById("button-1").addEventListener("click", function(){
  console.log(record, computerGuess, playerScore, computerScore, computerHit)
  mainFunction(1);
  console.log(record, computerGuess, playerScore, computerScore, computerHit)
});
document.getElementById("button-2").addEventListener("click", function(){
  console.log(record, computerGuess, playerScore, computerScore, computerHit)
  mainFunction(2);
  console.log(record, computerGuess, playerScore, computerScore, computerHit);
});

function recordHit(buttonNumber){
  record.push(buttonNumber)
}

function computerMakeGuess(){
  if (record.length < 2) {
    computerGuess = Math.floor(Math.random()*2+1)
    return
  }

  //the most recent two-letter sequence is 1 2
  if (record[-3]===1 && record[-2]===2) {
    var followedByOne = 0
    var followedByTwo = 0
    for (let i=0; i < record.length-1; i++){
      if (record[i]===1 && record[i+1]===2) {
        if (record[i+2]===1) {
          followedByOne++;
        } else if (record[i+2]===2) {
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
  if (record[-3]===2 && record[-2]===1){
    var followedByOne = 0
    var followedByTwo = 0
    for (let i=0; i < record.length-1; i++){
      if (record[i]===2 && record[i+1]===1) {
        if (record[i+2]===1) {
          followedByOne++;
        } else if (record[i+2]===2) {
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
  if (record[-3]===1 && record[-2]===1){
    var followedByOne = 0
    var followedByTwo = 0
    for (let i=0; i < record.length-1; i++){
      if (record[i]===1 && record[i+1]===1) {
        if (record[i+2]===1) {
          followedByOne++;
        } else if (record[i+2]===2) {
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
  if (record[-3]===2 && record[-2]===2){
    var followedByOne = 0
    var followedByTwo = 0
    for (let i=0; i < record.length-1; i++){
      if (record[i]===2 && record[i+1]===2) {
        if (record[i+2]===1) {
          followedByOne++;
        } else if (record[i+2]===2) {
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

function mainFunction(buttonNumber){
  recordHit(buttonNumber);
  computerMakeGuess();

  //computer makes a wrong guess, you win the point
  if(record.length !== 0 && !verifyComputerGuess(buttonNumber)){
    document.getElementById("broadcast").textContent="You won this point! Hit to start another!"
    playerScore++;
    document.getElementById("your-score").textContent=playerScore;
    return;
  }
  //computer makes a right guess, points goes on
  else {
    computerMakeAHit();
    document.getElementById("broadcast").textContent="The computer returned your shot! Guess computer's hit!"
  }

  // I need to have the user make an input to continue this funtion
  // after the user makes a choice
  document.getElementById("button-5").addEventListener("click", function(){
    userGuess = 5;
  })
  document.getElementById("button-6").addEventListener("click", function(){
    userGuess = 6;
  })
  // if user makes a wrong guess
  if (userguess!==computerHit) {
    computerScore++;
    document.getElementById("computer-score").textContent= computerScore;
  }
 // if user makes a correct guess
  else{
    document.getElementById("broadcast").textContent="You guessed computer's hit! Now hit!"
  }
}
