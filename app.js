const warehouseElement = document.getElementById("warehouse");
const rightWall = document.getElementById("right-wall");
const exitElement = document.getElementById("exit");
let playerWins = false;
let moveCount = 0;
let completedCount = 0;
let level = 1;

const drawExit = () => {
  appendToWarehouse(rightWall)
  appendToWarehouse(exitElement);
};

const checkWinCondition = () => {
  return (
    arrayOfBlkCoordinates[0][1].x === 6 && arrayOfBlkCoordinates[0][1].y === 3
  );
};

const render = () => {
  warehouseElement.innerHTML = "";
  drawBlue(); //draw all blocks from arrOfBlkCoordinates except 0th item, which is red block
  drawHorizontalBlock(arrayOfBlkCoordinates[0], "red-block", "0"); //render red block
  drawExit();
  drawInstructions();
  drawMoveCounter();
  drawButtons();
};

const update = () => {
  addHorizontalClickHandler("red-block");
  addHorizontalClickHandler("blue-block-h");
  addVerticalClickHandler("blue-block-v");
  addLevelButtons();
};

const winMessages = () => {
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

const generateConfirm = () => {
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

const main = (currentTime) => {
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

  render(); // draws all elements -> blocks, exit and moves counter
  update(); // 'update' comes after 'render' because event listeners cannot be placed before creating event targets
  playerWins = checkWinCondition(); // returns boolean
  if (playerWins) {
    //checks if playerWins is true, before executing the below
    winMessages();
    setTimeout(generateConfirm, 500);
  }
};

window.requestAnimationFrame(main); //starts off main loop when the frame is ready to receive the animation
