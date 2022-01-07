const warehouse = document.getElementById("warehouse");
const instructionPanel = document.getElementById("instructions");
let level = 1;
// let levelBoard;
let firstRun = true;
const gameBoard = initializeGameBoard();
let playerWins = false;
let moveCount = 0;


const generateNextLevelConfirm = () => {
    if (
      confirm(
        //creates dialogue box that restarts game when ok is clicked.
        `With just ${currentMoves[level-1]} moves! Winner Winner! Chicken Dinner! Press ok to move on.`
      )
    ) {
      currentMoves[level-1] = moveCount;
      console.log(currentMoves);
      switch (level) {
        case 1: {
          // level = 2;
          // moveCount = currentMoves[1];
          // playerWins = false;
          window.location = "/"; //refreshes page
          main();
          break;
        }
        case 2: {
          level = 3;
          moveCount = currentMoves[2];
          playerWins = false;
          main();
          break;
        }
        case 3: {
          window.location = "/"; //refreshes page
          break;
        }
      }
    }
  };

//changes HTML text after win condition is satisfied
const printWinnerText = () => {
    const title = document.getElementById("title");
    title.innerHTML = `You Won!`; //changes title text
    if (level < 3) {
      const final = document.getElementById("line1");
      final.innerHTML = `You won with ${currentMoves[level-1]} moves!`; //changes text to reflect number of moves and instructs on how to restart
      const extraLine = document.getElementById("line2");
      extraLine.innerHTML = "Click 'OK' to move on! :)</br>On to the next level!"; //removes additional line for instruction
    } else {
      const final = document.getElementById("line1");
      final.innerHTML = `You won with ${currentMoves[level-1]} moves!`; //changes text to reflect number of moves and instructs on how to restart
      const extraLine = document.getElementById("line2");
      extraLine.innerHTML = "You completed level 3! Click 'OK' to start over from Level 1! :)"; //removes additional line for instruction
    }
  };
  
  //checks for win condition and returns a boolean;
  const checkWinCondition = () => {
    return (
      gameBoard[3][6].class === "red-block"
    );
  };

const renderGame = (gameBoard) => {
    render(gameBoard);
    assignEventHandlers("red-block");
    assignEventHandlers("blue-block");
    addButtonsEventHandler();
}

const main = () => {
    if (firstRun) {
    chooseLevel(gameLevel1, gameBoard);
    console.log(gameBoard);
    firstRun = false;
    } 
        // switch (level) {
        //     case 1: 
        //         chooseLevel(gameLevel1, gameBoard);
        //         break;            
        //     case 2: 
        //         chooseLevel(gameLevel2, gameBoard);
        //         console.log("Level 2 loaded");
        //       break;            
        //     case 3: 
        //         chooseLevel(gameLevel3, gameBoard);
        //       break;            
        //   }
    renderGame(gameBoard);
    
    playerWins = checkWinCondition(); // returns boolean
    if (playerWins) {
      //checks if playerWins is true, before executing the below
      printWinnerText(); //changes HTML text on instructions column
      setTimeout(generateNextLevelConfirm, 500); //generates prompt to proceed to next level
    }
}

window.requestAnimationFrame(main);
