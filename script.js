/* ------------------Global Variables---------------------------- */
// Game Modes
var gameMode = 'waitingForUsername';
var checkUserInput = 'notChecked';
// User Name
var userName = '';
// Score keepers
var playerScore = 0;
var computerScore = 0;
var gamesPlayed = 0;

/* ------------------Scissors Paper Stone Game---------------------------- */
// FUNCTION: Generate Random Number
var randomNumGenerator = function (min, max) {
  // generate a random number from min to max
  var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNumber;
};

// FUNCTION: Game mode scissors paper stone
var scissorsPaperStoneGame = function (userInput) {
  var outcomeOfGame = ''; // this is a string
  // generate a number from 1 to 3
  var computerInput = randomNumGenerator(1, 3);
  // convert number to variable (1 is Scissors. 2 is Paper. 3 is Stone)
  if (computerInput == 1) {
    computerInput = 'scissors';
  } else if (computerInput == 2) {
    computerInput = 'paper';
  } else if (computerInput == 3) {
    computerInput = 'stone';
  }
  // count as gameplay
  gamesPlayed += 1;
  // Check userInput
  if (userInput == computerInput) { // If its a draw
    // draw statement
    outcomeOfGame = `The computer chose ${computerInput}` + '<br>' + `You chose ${userInput}` + '<br>' + 'It is a draw!' + '<br>' + `So far ${userName}, youve been winning ${playerScore}/${gamesPlayed} turns. Pretty good!`;

  // if player win
  } else if ((userInput == 'scissors' && computerInput == 'paper')
  || (userInput == 'paper' && computerInput == 'stone')
  || (userInput == 'stone' && computerInput == 'scissors')) {
    // increase player score
    playerScore += 1;
    // winning statement
    outcomeOfGame = `The computer chose ${computerInput}` + '<br>' + `You chose ${userInput}` + '<br>' + 'You Win!' + '<br>' + `So far ${userName}, youve been winning ${playerScore}/${gamesPlayed} turns. Pretty good!`;

  // if player lose
  } else if ((userInput == 'scissors' && computerInput == 'stone')
  || (userInput == 'paper' && computerInput == 'scissors')
  || (userInput == 'stone' && computerInput == 'paper')) {
    // increase computer score
    computerScore += 1;
    // losing statement
    outcomeOfGame = `The computer chose ${computerInput}` + '<br>' + `You chose ${userInput}` + '<br>' + 'You Lost! bummer' + '<br>' + `So far ${userName}, youve been winning ${playerScore}/${gamesPlayed} turns. Pretty good!`;
  }
  return outcomeOfGame;
};

// FUNCTION: Input validation
var inputValidation = function (userName, userInput) {
  var returnStatement = '';
  // if input is scissors paper or stone
  if ((userInput == 'scissors')
  || (userInput == 'paper')
  || (userInput == 'stone')) {
    checkUserInput = 'checked';
  // if input is blank
  } else if (userInput.trim() == '') {
    checkUserInput = 'notChecked';
    returnStatement = `Hey ${userName} no blanks allowed!`;
  // if input is not list of words
  } else {
    checkUserInput = 'notChecked';
    returnStatement = `Hey ${userName}! You need to type either ✂️🗒🗻!`;
  }
  return returnStatement;
};

/* ----------------------------------------------------------- */
/* ------------------MAIN FUNCTION---------------------------- */
/* ----------------------------------------------------------- */
var main = function (input) {
  var myOutputValue = '';
  // switch the game modes by user input (NOT IN USE YET)
  if (input == 'reverse') {
    // pass
  }
  // check the game modes
  if (gameMode == 'waitingForUsername') {
    // take user input as username
    userName = input;
    // now that we have the name, switch the mode
    gameMode = 'startGame';
    myOutputValue = 'Hello ' + userName + '!' + '<br>' + 'Welcome to a game of ✂️🗒🗻' + '<br>' + 'Take a guess!';
    return myOutputValue;
  }
  // Start Scissors Paper Stone Game
  if (gameMode == 'startGame') {
    // validate user input. ensure that they don't type nonsense
    // Check user input for errors. Arguements -> (userName, userInput)
    myOutputValue = inputValidation(userName, input);
    // if input has no errors launch game
    if (checkUserInput == 'checked') {
      myOutputValue = scissorsPaperStoneGame(input);
      return myOutputValue;
    }
    return myOutputValue;
  }
};

/* ------------------GAME INSTRUCTIONS------------------------- */
// Game modes are : waiting for username and start game
// During game mode: waiting for username
// User nees to enter a name and it gets stored in a global variable
// During game mode: start game
// User needs to enter SPS. Anything else will be an error
