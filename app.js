const warehouseElement = document.getElementById("warehouse");
const rightWall = document.getElementById("right-wall");
const exitElement = document.getElementById("exit");
let playerWins = false;
let moveCount = 0;
let completedCount = 0; // for future use, to check how many levels are completed
let level = 1;

//generates prompt after win to move to next level
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
        level = 2;
        moveCount = currentMoves[1];
        playerWins = false;
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
    arrayOfBlkCoordinates[0][1].x === 6 && arrayOfBlkCoordinates[0][1].y === 3
  );
};

//draws green door and black boundary wall
const drawExitBoundary = () => {
  appendToWarehouse(rightWall);
  appendToWarehouse(exitElement);
};

//renders all elements in the game
const render = () => {
  warehouseElement.innerHTML = "";
  drawExitBoundary();
  drawBlue(); //draw all blocks from arrOfBlkCoordinates except 0th item, which is red block
  drawHorizontalBlock(arrayOfBlkCoordinates[0], "red-block", "0"); //render red block
  drawDefaultInstructions();
  drawMoveCounter();
  drawButtons();
};

//sets necessary event handlers for all elements in game
const update = () => {
  addHorizontalClickHandler("red-block");
  addHorizontalClickHandler("blue-block-h");
  addVerticalClickHandler("blue-block-v");
  addButtonsEventHandler();
};

//initializes correct array from blockCoordinates for respective level(s)
const initializeLevelArray = () => {
  switch (level) {
    case 1: {
      arrayOfBlkCoordinates = level1Blocks.slice(0);
      break;
    }
    case 2: {
      arrayOfBlkCoordinates = level2Blocks.slice(0);
      break;
    }
    case 3: {
      arrayOfBlkCoordinates = level3Blocks.slice(0);
      break;
    }
  }
}

const main = (currentTime) => {

  initializeLevelArray(); // initializes the correct set of blocks for the level
  render(); // draws all elements -> instruction, blocks, exit and moves counter
  update(); // 'update' comes after 'render' because event listeners cannot be placed before creating event targets
  
  playerWins = checkWinCondition(); // returns boolean
  if (playerWins) {
    //checks if playerWins is true, before executing the below
    printWinnerText(); //changes HTML text on instructions column
    setTimeout(generateNextLevelConfirm, 500); //generates prompt to proceed to next level
  }
};

window.requestAnimationFrame(main); //starts off main loop when the frame is ready to receive the animation
