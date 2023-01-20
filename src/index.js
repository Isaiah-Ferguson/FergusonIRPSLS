//Single Player Buttons
let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");
let lizard = document.getElementById("lizard");
let spock = document.getElementById("spock");
let result = document.getElementById("result");
let finalResult = document.getElementById("finalResult")
let Body = document.getElementById("Body");

//Button Divs
let singlePlayerGameDiv = document.getElementById("singlePlayerGameDiv");
let singlePlayerRoundDiv = document.getElementById("singlePlayerRoundDiv");
let multiPlayerDiv = document.getElementById("multiPlayerDiv");
let multiPlayerRoundsDiv = document.getElementById("multiPlayerRoundsDiv");
let scoreMulitPlayerDiv = document.getElementById("scoreMulitPlayerDiv");
let multiplayerNameDiv = document.getElementById("multiplayerNameDiv");
let scoreDiv = document.getElementById("scoreDiv");
let multiplayerNameInputDiv = document.getElementById("multiplayerNameInputDiv");
let startMenuDiv = document.getElementById("startMenuDiv");
let gameModeTextDiv = document.getElementById("gameModeTextDiv");
let versusTextDiv = document.getElementById("versusTextDiv");
let singlePlayerNameInputDiv = document.getElementById("singlePlayerNameInputDiv");
let singlePlayerNameDiv = document.getElementById("singlePlayerNameDiv");

//Name Input ID's
let nameOneResult = document.getElementById("nameOneResult");
let nameTwoResult = document.getElementById("nameTwoResult");
let singleName = document.getElementById("singleName");
let ComputerNameResult = document.getElementById("ComputerNameResult");
let singlePlayerNameScore = document.getElementById("singlePlayerNameScore");

//Computer Name Generatoor
let charactername = ["Sheldon", "Penny", "Bernadette", "Leonard", "Howard", "Amy", "Raj", "Missy"];
let arrayNum = charactername[Math.floor(Math.random() * 8)]

// Game Buttons
let rockPlayerOne = document.getElementById("rockPlayerOne");
let paperPlayerOne = document.getElementById("paperPlayerOne");
let scissorsPlayerOne = document.getElementById("scissorsPlayerOne");
let spockPlayerOne = document.getElementById("spockPlayerOne");
let lizardPlayerOne = document.getElementById("lizardPlayerOne");

let rockPlayerTwo = document.getElementById("rockPlayerTwo");
let paperPlayerTwo = document.getElementById("paperPlayerTwo");
let scissorsPlayerTwo = document.getElementById("scissorsPlayerTwo");
let lizardPlayerTwo = document.getElementById("lizardPlayerTwo");
let spockPlayerTwo = document.getElementById("spockPlayerTwo");

let fight = document.getElementById("fight");

let startButton = document.getElementById("startButton");
let singlePlayerButton = document.getElementById("singlePlayerButton");
let multiPlayerButton = document.getElementById("multiPlayerButton");

//Round buttons
let oneRound = document.getElementById("oneRound");
let threeRound = document.getElementById("threeRound");
let sevenRound = document.getElementById("sevenRound");
let oneRoundMultiplayer = document.getElementById("oneRoundMultiplayer");
let threeRoundMultiplayer = document.getElementById("threeRoundMultiplayer");
let sevenRoundMultiplayer = document.getElementById("sevenRoundMultiplayer");

//Return Statements
let playerScoreReturn = document.getElementById("playerScoreReturn");
let computerScoreReturn = document.getElementById("computerScoreReturn");
let playerOneScoreReturn = document.getElementById("playerOneScoreReturn");
let playerTwoScoreReturn = document.getElementById("playerTwoScoreReturn");

//BACKGROUND BTNS
let cyberBGBtn = document.getElementById("cyberBGBtn");
let templeBGBtn = document.getElementById("templeBGBtn");
let hellBGBtn = document.getElementById("hellBGBtn");
let VSinverted = document.getElementById("VSinverted");
let VS = document.getElementById("VS");
let VSinvertedmulti = document.getElementById("VSinvertedmulti");
let VSmulti = document.getElementById("VSmulti");


//String Variables
let singlePlayerName = "";
let singlePlayerString = "";
let multiPlayerString = "";
let playerOne = "";
let playerTwo = "";

let gameURL = "";
let computerResult = ""
let playerScore = 0;
let computerScore = 0;
let playerOneScore = 0;
let playerTwoScore = 0;
let rounds = 0;

//BACKGROUND BUTTONS
cyberBGBtn.addEventListener('click', function(){
  Body.classList.remove('bg1');
  Body.classList.remove('bg2');
  Body.classList.add('bg3');
  finalResult.classList.add('gameModeTextTwo');
  result.classList.add('gameModeTextTwo');
  nameOneResult.classList.add('gameModeTextTwo');
  nameTwoResult.classList.add('gameModeTextTwo');
  singleNameResult.classList.add('gameModeTextTwo');
  ComputerNameResult.classList.add('gameModeTextTwo');
  VS.classList.add('hide');
  VSinverted.classList.remove("hide");
  VSinvertedmulti.classList.remove('hide');
  VSmulti.classList.add('hide');
});

templeBGBtn.addEventListener('click', function(){
  Body.classList.remove('bg3');
  Body.classList.remove('bg1');
  Body.classList.add('bg2');
  finalResult.classList.add('gameModeTextTwo');
  result.classList.add('gameModeTextTwo');
  nameOneResult.classList.add('gameModeTextTwo');
  nameTwoResult.classList.add('gameModeTextTwo');
  singleNameResult.classList.add('gameModeTextTwo');
  ComputerNameResult.classList.add('gameModeTextTwo');
  VS.classList.add('hide');
  VSinverted.classList.remove("hide");
});

hellBGBtn.addEventListener('click', function(){
  Body.classList.remove('bg3');
  Body.classList.remove('bg2');
  Body.classList.add('bg1');
  finalResult.classList.add('gameModeTextTwo');
  result.classList.add('gameModeTextTwo');
  nameOneResult.classList.add('gameModeTextTwo');
  nameTwoResult.classList.add('gameModeTextTwo');
  singleNameResult.classList.add('gameModeTextTwo');
  ComputerNameResult.classList.add('gameModeTextTwo');
  VS.classList.add('hide');
  VSinverted.classList.remove("hide");
});

//Main Menu Buttons
startButton.addEventListener('click', function () {
  mainMenuDiv.classList.remove('hide');
  startButton.classList.add('hide');
  startMenuDiv.classList.add('hide');
});

singlePlayerButton.addEventListener('click', function () {
  singlePlayerButton.classList.add('hide');
  multiPlayerButton.classList.add('hide');
  gameModeTextDiv.classList.add('hide');
  versusTextDiv.classList.remove('hide');
  singlePlayerNameInputDiv.classList.remove('hide');
});


multiPlayerButton.addEventListener('click', function () {
  singlePlayerButton.classList.add('hide');
  multiPlayerButton.classList.add('hide');
  versusTextDiv.classList.remove('hide');
  multiplayerNameInputDiv.classList.remove('hide');
  gameModeTextDiv.classList.add('hide');
});


// Best of Buttons
oneRound.addEventListener('click', function () {
  singlePlayerGameDiv.classList.remove('hide');
  singlePlayerNameDiv.classList.remove('hide');
  scoreDiv.classList.remove('hide');
  singlePlayerRoundDiv.classList.add('hide');
  gameModeTextDiv.classList.add('hide');
  changeBGBtn.classList.remove('hide');
  changeBGBtn.classList.add('btn');
  ComputerNameResult.textContent = arrayNum;
  NumberofRounds(1);
});

threeRound.addEventListener("click", function () {
  singlePlayerGameDiv.classList.remove('hide');
  scoreDiv.classList.remove('hide');
  gameModeTextDiv.classList.add('hide');
  singlePlayerRoundDiv.classList.add('hide');
  singlePlayerNameDiv.classList.remove('hide');
  gameModeTextDiv.classList.add('hide');
  changeBGBtn.classList.remove('hide');
  changeBGBtn.classList.add('btn');
  ComputerNameResult.textContent = arrayNum;
  NumberofRounds(3);
});

sevenRound.addEventListener("click", function () {
  singlePlayerGameDiv.classList.remove('hide');
  scoreDiv.classList.remove('hide');
  gameModeTextDiv.classList.add('hide');
  singlePlayerRoundDiv.classList.add('hide');
  singlePlayerNameDiv.classList.remove('hide');
  gameModeTextDiv.classList.add('hide');
  changeBGBtn.classList.remove('hide');
  changeBGBtn.classList.add('btn');
  ComputerNameResult.textContent = arrayNum;
  NumberofRounds(4);
});

oneRoundMultiplayer.addEventListener("click", function () {
  multiPlayerRoundsDiv.classList.add('hide');
  mainMenuDiv.classList.add('hide');
  multiplayerNameInputDiv.classList.add('hide');
  gameModeTextDiv.classList.add('hide');
  multiPlayerDiv.classList.remove('hide');
  scoreMulitPlayerDiv.classList.remove('hide');
  multiplayerNameDiv.classList.remove('hide');
  changeBGBtn.classList.remove('hide');
  changeBGBtn.classList.add('btn');
  NumberofRounds(1);
});

threeRoundMultiplayer.addEventListener("click", function () {
  multiPlayerRoundsDiv.classList.add('hide');
  mainMenuDiv.classList.add('hide');
  multiplayerNameInputDiv.classList.add('hide');
  gameModeTextDiv.classList.add('hide');
  multiplayerNameDiv.classList.remove('hide');
  multiPlayerDiv.classList.remove('hide');
  scoreMulitPlayerDiv.classList.remove('hide');
  changeBGBtn.classList.remove('hide');
  changeBGBtn.classList.add('btn');
  NumberofRounds(2);
});

sevenRoundMultiplayer.addEventListener("click", function () {
  multiPlayerRoundsDiv.classList.add('hide');
  mainMenuDiv.classList.add('hide');
  multiplayerNameInputDiv.classList.add('hide');
  gameModeTextDiv.classList.add('hide');
  multiPlayerDiv.classList.remove('hide');
  scoreMulitPlayerDiv.classList.remove('hide');
  multiplayerNameDiv.classList.remove('hide');
  changeBGBtn.classList.remove('hide');
  changeBGBtn.classList.add('btn');
  NumberofRounds(4);
});


// Single Player Game Buttons
rock.addEventListener("click", function () {
  rock.classList.remove('shake');
  rock.classList.add('shake');

  RPSLSAPI();
  SinglePlayer("Rock", computerResult);
});

paper.addEventListener("click", function () {
  paper.classList.remove('shake');
  paper.classList.add('shake');

  RPSLSAPI();
  SinglePlayer("Paper", computerResult);
});

scissors.addEventListener("click", function () {
  scissors.classList.remove('shake');
  scissors.classList.add('shake');

  RPSLSAPI();
  SinglePlayer("Scissors", computerResult);
});

spock.addEventListener("click", function () {
  spock.classList.remove('shake');
  spock.classList.add('shake');

  RPSLSAPI();
  SinglePlayer("Spock", computerResult);
});

lizard.addEventListener("click", function () {
  lizard.classList.remove('shake');
  lizard.classList.add('shake');

  RPSLSAPI();
  SinglePlayer("Lizard", computerResult);
});


// MultiPlayer Game Buttons
rockPlayerOne.addEventListener("click", function () {
  rockPlayerOne.classList.remove('shake');
  rockPlayerOne.classList.add('shake');
  playerOne = "rock";
});

paperPlayerOne.addEventListener("click", function () {
  paperPlayerOne.classList.remove('shake');
  paperPlayerOne.classList.add('shake');

  playerOne = "paper";
});

scissorsPlayerOne.addEventListener("click", function () {
  scissorsPlayerOne.classList.remove('shake');
  scissorsPlayerOne.classList.add('shake');
  playerOne = "scissors";
});

spockPlayerOne.addEventListener("click", function () {
  spockPlayerOne.classList.remove('shake');
  spockPlayerOne.classList.add('shake');
  playerOne = "spock";
});

lizardPlayerOne.addEventListener("click", function () {
  lizardPlayerOne.classList.remove('shake');
  lizardPlayerOne.classList.add('shake');
  playerOne = "lizard";
});

rockPlayerTwo.addEventListener("click", function () {
  rockPlayerTwo.classList.remove('shake');
  rockPlayerTwo.classList.add('shake');
  playerTwo = "rock";
});

paperPlayerTwo.addEventListener("click", function () {
  paperPlayerTwo.classList.remove('shake');
  paperPlayerTwo.classList.add('shake');
  playerTwo = "paper";
});

scissorsPlayerTwo.addEventListener("click", function () {
  scissorsPlayerTwo.classList.remove('shake');
  scissorsPlayerTwo.classList.add('shake');
  playerTwo = "scissors";
});

spockPlayerTwo.addEventListener("click", function () {
  spockPlayerTwo.classList.remove('shake');
  spockPlayerTwo.classList.add('shake');
  playerTwo = "spock";
});

lizardPlayerTwo.addEventListener("click", function () {
  lizardPlayerTwo.classList.remove('shake');
  lizardPlayerTwo.classList.add('shake');
  playerTwo = "lizard";
});

fight.addEventListener("click", function () {
  MultiPlayer(playerOne, playerTwo);
});


//ROUND FUNCTION
function NumberofRounds(num) {rounds = num;}

function urlCall(url) {
  fetch(url).then(
    response => response.text()
  ).then(
    data => {
      computerResult = data;
      console.log(computerResult);
    }
  )
}

function RPSLSAPI() {
  gameURL = "https://scottsrpsls.azurewebsites.net/api/RockPaperScissors/GetRandomOption";
  urlCall(gameURL);
}

function SinglePlayer(playerChoice) {

  // Compare player choice to computer choice
  if (playerChoice === computerResult) {
    result.textContent = "It's a tie!";
  } else if (
    (playerChoice === "Rock" && computerResult === "Scissors") ||
    (playerChoice === "Rock" && computerResult === "Lizard") ||
    (playerChoice === "Scissors" && computerResult === "Paper") ||
    (playerChoice === "Scissors" && computerResult === "Lizard") ||
    (playerChoice === "Paper" && computerResult === "Rock") ||
    (playerChoice === "Paper" && computerResult === "Spock") ||
    (playerChoice === "Spock" && computerResult === "Rock") ||
    (playerChoice === "Spock" && computerResult === "Scissors") ||
    (playerChoice === "Lizard" && computerResult === "Spock") ||
    (playerChoice === "Lizard" && computerResult === "Paper")
  ) {
    result.textContent = "You win!";
    playerScore++;
    singlePlayerNameScore.textContent = singleName.value + " Score: "+ playerScore;
    playerScoreReturn.textContent = playerScore;

  } else {
    result.textContent = "You lose!";
    computerScore++;
    computerScoreReturn.textContent = computerScore;
  }

  if (rounds > 0) {
    if (playerScore === rounds) {
      result.textContent = singleName.value;
      finalResult.innerHTML += "has Won!";
      playerScore = 0;
      computerScore = 0;
      rounds = 0;
      singlePlayerGameDiv.classList.add('hide');
      singlePlayerNameDiv.classList.add('hide');
      result.classList.add('rotateInLeft');
      finalResult.classList.add('rotateInRight');
    } else if (computerScore === rounds) {
      result.textContent = singleName.value;
      finalResult.innerHTML += "has lost the game!";
      playerScore = 0;
      computerScore = 0;
      rounds = 0;
      singlePlayerGameDiv.classList.add('hide');
      singlePlayerNameDiv.classList.add('hide');
      result.classList.add('rotateInLeft');
      finalResult.classList.add('rotateInRight');
    }
  }
}

function MultiPlayer(playerOneChoice, playerTwoChoice) {
  // Compare player choice to computer choice
  if (playerOneChoice === playerTwoChoice) {
    result.innerHTML = "It's a tie!";
  } else if (
    (playerOneChoice === "rock" && playerTwoChoice === "scissors") ||
    (playerOneChoice === "rock" && playerTwoChoice === "lizard") ||
    (playerOneChoice === "scissors" && playerTwoChoice === "paper") ||
    (playerOneChoice === "scissors" && playerTwoChoice === "lizard") ||
    (playerOneChoice === "paper" && playerTwoChoice === "rock") ||
    (playerOneChoice === "paper" && playerTwoChoice === "spock") ||
    (playerOneChoice === "spock" && playerTwoChoice === "rock") ||
    (playerOneChoice === "spock" && playerTwoChoice === "scissors") ||
    (playerOneChoice === "lizard" && playerTwoChoice === "spock") ||
    (playerOneChoice === "lizard" && playerTwoChoice === "paper")
  ) {
    result.textContent = nameOne.value + " Wins The Round!!!";
    result.classList.add('zoomer');
    playerOneScore++;
    playerOneScoreReturn.textContent = nameOne.value + "'s Score: " + playerOneScore;
  } else {
    result.textContent = nameTwo.value + " has taken this Round!!!";
    result.classList.add('zoomer');
    playerTwoScore++;
    playerTwoScoreReturn.textContent = nameTwo.value + "'s Score: " + playerTwoScore;
  }

  if (rounds > 0) {
    if (playerOneScore === rounds) {
      result.textContent = nameOne.value;
      finalResult.textContent += "has won the game!";
      playerOneScore = 0;
      playerTwoScore = 0;
      rounds = 0;
      multiplayerNameDiv.classList.add('hide');
      multiPlayerDiv.classList.add('hide');
      result.classList.add('rotateInLeft');
      finalResult.classList.add('rotateInRight');
    } else if (playerTwoScore === rounds) {
      result.textContent = nameTwo.value;
      finalResult.textContent += "has won the game!";
      playerTwoScore = 0;
      playerOneScore = 0;
      rounds = 0;
      multiplayerNameDiv.classList.add('hide');
      multiPlayerDiv.classList.add('hide');
      result.classList.add('rotateInLeft');
      finalResult.classList.add('rotateInRight');
    }
  }
}

//Name Input Fields
singleName.addEventListener('keydown', function (event) {
  if (event.key === "Enter") {
    if (singleName.value === "") {
      singleName.value = charactername[Math.floor(Math.random() * 8)];
    }
   
    singleNameResult.textContent = singleName.value;
    singlePlayerRoundDiv.classList.remove('hide');
    gameModeTextDiv.classList.remove('hide');
    singlePlayerNameInputDiv.classList.add("hide");
    versusTextDiv.classList.add("hide");
  }
});


nameOne.addEventListener('keydown', function (event) {
  if (event.key === "Enter") {
    if (nameOne.value === "" && nameTwo.value === "") {
      nameOne.value = charactername[Math.floor(Math.random() * 8)];
      nameTwo.value = charactername[Math.floor(Math.random() * 8)];
    } else if(nameOne.value === ""){
      nameOne.value = charactername[Math.floor(Math.random() * 8)];
    }else if(nameTwo.value === ""){
      nameTwo.value = charactername[Math.floor(Math.random() * 8)];
    }
      nameTwoResult.textContent = nameTwo.value;
      nameOneResult.textContent = nameOne.value;
     multiPlayerRoundsDiv.classList.remove('hide');
  }
});

nameTwo.addEventListener('keydown', function (event) {
  if (event.key === "Enter") {
    if (nameTwo.value === "" && nameOne.value === "") {
      nameTwo.value = charactername[Math.floor(Math.random() * 8)];
      nameOne.value = charactername[Math.floor(Math.random() * 8)];
    } else if (nameTwo.value === "") {
      nameTwo.value = charactername[Math.floor(Math.random() * 8)];
    }else if(nameOne.value === ""){
      nameOne.value = charactername[Math.floor(Math.random() * 8)];
    }
      nameTwoResult.textContent = nameTwo.value;
      nameOneResult.textContent = nameOne.value;
      multiPlayerRoundsDiv.classList.remove('hide');
  }
});