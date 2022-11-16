/* javascript */
var record = []
var computerGuess = 0
var playerScore = 0
var computerScore = 0
var computerHit = 0

document.getElementById("button-1").addEventListener("click", main())
document.getElementById("button-2").addEventListener("click",  main())

function main(){
  recordHit()
  computerGuess()
  if(!verifyComputerGuess()){
    playerScore++
    return
  } else{ //computer makes a right guess
    computerMakeAHit()
  }


}

function recordHit(){
  record.push('1')
}

function computerGuess(){
  if (record.length < 2) {
    computerGuess = Math.floor(Math.random()*2+1)
    return
  }
  if (record[-3]===1 && record[-2]===2) { //the most recent two-letter sequence is 1 2
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
  } else if (record[-3]===2 && record[-2]===1){ //the most recent two-letter sequence is 2 1
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
  } else if (record[-3]===1 && record[-2]===1){ //the most recent two-letter sequence is 1 1
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
  } else if (record[-3]===2 && record[-2]===2){ //the most recent two-letter sequence is 2 2
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
  computerHit = Math.floor(Math.random()*2+1)
}
