/* javascript */
var record = [];
var computerGuess = 0;
var playerScore = 0;
var computerScore = 0;
var computerHit = 0;


document.getElementById("button-1").addEventListener("click", recordHit(1), mainFunction());
document.getElementById("button-2").addEventListener("click",  recordHit(2), mainFunction());

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

function verifyComputerGuess(){
  if (record[-1]===computerGuess) {
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
  console.log(record);
  computerMakeGuess();
  if(record.length != 0 && !verifyComputerGuess()){
    alert("You won this point!")
    playerScore++;
    document.getElementById("your-score").textContent=playerScore;
    return;
  } else { //computer makes a right guess, points goes on
    computerMakeAHit();
    alert("The computer returned your shot! You need to make a return decision!");
  }
  // I need to have the user make an input to continue this funtion
  var userGuess = 0
  document.getElementById("button-5").addEventListener("click", userGuess=5);
  document.getElementById("button-6").addEventListener("click", userGuess=6);
   // after the user makes a choice
  if (userguess===computerHit) {
    alert("You returned computer's hit! Now make another hitting decision!")
  } else{
    computerScore++;
    document.getElementById("computer-score").textContent= computerScore;
  }
}
