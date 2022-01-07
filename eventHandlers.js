
//event handler that moves entire block along x-axis by updating block coordinates array then calls main function again to render and update
const ClickHandler = (event) => {
    const evTarget = event.target; // selects HTML element that is target of click
    let xPos = parseInt(evTarget.dataset.x); 
    let yPos = parseInt(evTarget.dataset.y); //get  number saved in x and y data
    const blockNumber = evTarget.dataset.blockNumber; //get block number saved in count data
    const blockSegments = document.querySelectorAll(`[data-block-number='${blockNumber}']`);
    const blockLength = blockSegments.length;

    switch (evTarget.id) {
        case "T":
            if (gameBoard[yPos-1][xPos].class !== "floor") return;
            for (i=0; i<blockLength; i++) {
                gameBoard[yPos][xPos].y -= 1;
                gameBoard[yPos-1][xPos] = gameBoard[yPos][xPos];
                yPos += 1;
            }
            gameBoard[yPos-1][xPos] = createFloorObject();
            gameBoard[yPos-1][xPos].x = xPos;
            gameBoard[yPos-1][xPos].y = yPos-1;
            moveCount += 1;
            currentMoves[level-1] = moveCount;
            break;
        case "R":
            if (gameBoard[yPos][xPos+1].class !== "floor") return;
            for (i=0; i<blockLength; i++) {
                gameBoard[yPos][xPos].x += 1;
                gameBoard[yPos][xPos+1] = gameBoard[yPos][xPos];
                xPos -= 1;
            }
            gameBoard[yPos][xPos+1] = createFloorObject();
            gameBoard[yPos][xPos+1].x = xPos+1;
            gameBoard[yPos][xPos+1].y = yPos;
            moveCount += 1;
            currentMoves[level-1] = moveCount;
            break;
        case "B":
            if (gameBoard[yPos+1][xPos].class !== "floor") return;
            for (i=0; i<blockLength; i++) {
                gameBoard[yPos][xPos].y += 1;
                gameBoard[yPos+1][xPos] = gameBoard[yPos][xPos];
                yPos -= 1;
            }
            gameBoard[yPos+1][xPos] = createFloorObject();
            gameBoard[yPos+1][xPos].x = xPos;
            gameBoard[yPos+1][xPos].y = yPos+1;
            moveCount += 1;
            currentMoves[level-1] = moveCount;
            break;
        case "L":
            if (gameBoard[yPos][xPos-1].class !== "floor") return;
            for (i=0; i<blockLength; i++) {
                gameBoard[yPos][xPos].x -= 1;
                gameBoard[yPos][xPos-1] = gameBoard[yPos][xPos];
                xPos += 1;
            }
            gameBoard[yPos][xPos-1] = createFloorObject();
            gameBoard[yPos][xPos-1].x = xPos-1;
            gameBoard[yPos][xPos-1].y = yPos;
            moveCount += 1;
            currentMoves[level-1] = moveCount;
            break;
            
    }
    window.requestAnimationFrame(main);
};

//adds event handlers to horizontal blocks
const assignEventHandlers = (classTag) => {
  const block = document.getElementsByClassName(classTag);
  const arr = Array.from(block); // make array of all DOM elements with classTag
  arr.forEach((e) => {
    e.addEventListener("click", ClickHandler);
  });
};


//////////////////////////////////////////////
//*Level Buttons
//////////////////////////////////////////////

//event handler that updates game level or refreshes page based on button id then calls main function again to render and update
const buttonListener = (event) => {
    const eventTarget = event.target;
    const selectedLevel = eventTarget.id;
    switch (selectedLevel) {
      case "refresh": {
        window.location = "/";
        break;
      }
      case "L1": {
        level = 1;
        chooseLevel(gameLevel1, gameBoard);
        break;
      }
      case "L2": {
        level = 2;
        chooseLevel(gameLevel2, gameBoard);
        console.log("Clicked Level 2");
        break;
      }
      case "L3": {
        level = 3;
        chooseLevel(gameLevel3, gameBoard);
        console.log("Clicked Level 3");
        break;
      }
    }
    moveCount = currentMoves[level-1];
    window.requestAnimationFrame(main);
  };
  
  //add event handlers for buttons
  const addButtonsEventHandler = () => {
    const buttonNodeList = document.querySelectorAll("button");
    const arr = Array.from(buttonNodeList); // make array of all DOM elements that are buttons
    arr.forEach((e) => {
      e.addEventListener("click", buttonListener);
    });
  };