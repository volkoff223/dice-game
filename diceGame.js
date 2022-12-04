let diceSet = [0, 0, 0, 0, 0]
let rollNum = 0
let playersTurn = 1
let playerOneScore = 0
let playerTwoScore = 0
let currentTurnTotal = 0

let rollScore = document.getElementById('rollScore')
let diceStack = document.getElementsByClassName('diceStack')

let turnBanner = document.getElementById('turnBanner')
let p1Score = document.getElementById('playerOneScore')
let p2Score = document.getElementById('playerTwoScore')
let die1 = document.getElementById('die1')
let die2 = document.getElementById('die2')
let die3 = document.getElementById('die3')
let die4 = document.getElementById('die4')
let die5 = document.getElementById('die5')
let dice = document.getElementById('dice')

//* Change value of die to zero when clicked
die1.addEventListener('click', function () {
  diceSet[0] = 0
  this.style.borderColor === 'red'
    ? (die1.style.borderColor = 'black')
    : (die1.style.borderColor = 'red')
})
die2.addEventListener('click', function () {
  diceSet[1] = 0
  this.style.borderColor === 'red'
    ? (die2.style.borderColor = 'black')
    : (die2.style.borderColor = 'red')
})
die3.addEventListener('click', function () {
  diceSet[2] = 0
  this.style.borderColor === 'red'
    ? (die3.style.borderColor = 'black')
    : (die3.style.borderColor = 'red')
})
die4.addEventListener('click', function () {
  diceSet[3] = 0
  this.style.borderColor === 'red'
    ? (die4.style.borderColor = 'black')
    : (die4.style.borderColor = 'red')
})
die5.addEventListener('click', function () {
  diceSet[4] = 0
  this.style.borderColor === 'red'
    ? (die5.style.borderColor = 'black')
    : (die5.style.borderColor = 'red')
})

function score(dice) {
  let throwDice = [...dice]
  let sortArr = throwDice.sort().reverse()
  console.log(sortArr)
  //check for triple 1's and add extra point for 1's and 5's
  if (sortArr[2] === 1 && sortArr[3] === 1 && sortArr[4] === 1) {
    currentTurnTotal += 1000
    sortArr.slice(0, 2).forEach(function (e) {
      if (e === 5) {
        currentTurnTotal += 50
      } else if (e === 1) {
        currentTurnTotal += 100
      }
    })
    return (rollScore.innerHTML = currentTurnTotal)
  }
  //check for all other triples
  for (let i = 0; i < sortArr.length; i++) {
    let before = i - 1
    let after = i + 1
    if (sortArr[before] === sortArr[after]) {
      currentTurnTotal += sortArr[i] * 100
      sortArr.splice(i - 1, 3)
      sortArr.forEach(function (e) {
        if (e === 5) {
          currentTurnTotal += 50
        } else if (e === 1) {
          currentTurnTotal += 100
        }
      })
      break
    }
  }
  //no triples
  if (sortArr.length === 5) {
    sortArr.forEach(function (e) {
      if (e === 5) {
        currentTurnTotal += 50
      } else if (e === 1) {
        currentTurnTotal += 100
      }
    })
  }
  return (rollScore.innerHTML = currentTurnTotal)
}
function roll() {
  for (i = 0; i < diceSet.length; i++) {
    if (diceSet[i] === 0) {
      diceSet[i] = Math.floor(6 * Math.random()) + 1
    }
  }
  currentTurnTotal.innerHTML = ''
  die1.innerHTML = diceSet[0]
  die2.innerHTML = diceSet[1]
  die3.innerHTML = diceSet[2]
  die4.innerHTML = diceSet[3]
  die5.innerHTML = diceSet[4]
  die1.style.borderColor = 'black'
  die2.style.borderColor = 'black'
  die3.style.borderColor = 'black'
  die4.style.borderColor = 'black'
  die5.style.borderColor = 'black'
  rollNum += 1
  console.log('Roll number: ' + rollNum)
  if (rollNum === 1) {
    rollScore.innerHTML = ''
  }
  if (rollNum === 3) {
    turnBanner.innerHTML = 'End of turn. Next player please roll.'
    currentTurnTotal = 0
  } else {
    playersTurn === 1
      ? (turnBanner.innerHTML = "Player One's Turn")
      : (turnBanner.innerHTML = "Player Two's Turn")
  }
  //* End of turn after 3 rolls
  if (rollNum >= 3) {
    score(diceSet)
    diceSet[0] = 0
    diceSet[1] = 0
    diceSet[2] = 0
    diceSet[3] = 0
    diceSet[4] = 0
    playersTurn === 1
      ? (playerOneScore += currentTurnTotal)
      : (playerTwoScore += currentTurnTotal)
    p1Score.innerHTML = playerOneScore
    p2Score.innerHTML = playerTwoScore
    rollNum = 0
    playersTurn === 1 ? (playersTurn = 2) : (playersTurn = 1)
    rollScore.innerHTML = currentTurnTotal
  }
}
function reset() {
  diceSet = [0, 0, 0, 0, 0]
  score(diceSet)
  rollNum = 0
  playerOneScore = 0
  playerTwoScore = 0
  p1Score.innerHTML = 0
  p2Score.innerHTML = 0
  die1.innerHTML = ''
  die2.innerHTML = ''
  die3.innerHTML = ''
  die4.innerHTML = ''
  die5.innerHTML = ''
  turnBanner.innerHTML = "Player One's Turn"
  rollScore.innerHTML = '0'
}
