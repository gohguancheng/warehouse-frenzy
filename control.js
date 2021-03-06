//////////////////////////////////////////////
//* Horizontal Movement
//////////////////////////////////////////////

//check left of element for collision with boundary or other blocks
const leftCollisionCheck = (blockPosArray) => {
  const occupied = []; //initialize checker array
  arrayOfBlkCoordinates.forEach((array) => {
    // check block-arrays in main array of blocks
    array.forEach((coordinate) => {
      // check each coordinate pair in respective block array
      if (coordinate.y === blockPosArray[0].y) {
        // narrow down to blocks that have segments in the same row as clicked block, y-axis is same for all segments
        occupied.push(coordinate.x); //push in x-coordinate values into checker array if there any segments from other blocks in the same row
      }
    });
  });
  const clashPosition = blockPosArray[0].x - 1; //clash is -1, i.e. left side, of clicked block
  const leftIsOccupied =
    clashPosition === 0 || // position 0 is outside the 6x6 grid
    occupied.indexOf(clashPosition) !== -1;
  // if index of clashPosition value is not -1, it exists in checker array. this means a segment occupies clashPosition at same row of clicked block
  return leftIsOccupied;
};

//check right of element for collision with boundary or other blocks
const rightCollisionCheck = (blockPosArray) => {
  const occupied = []; //initialize checker array
  arrayOfBlkCoordinates.forEach((array) => {
    // check block-arrays in main array of blocks
    array.forEach((coordinate) => {
      // check each coordinate pair in respective block array
      if (coordinate.y === blockPosArray[0].y) {
        // narrow down to blocks that have segments in the same row as clicked block, y-axis is same for all segments
        occupied.push(coordinate.x); //push in x-coordinate values into checker array if there any segments from other blocks in the same row
      }
    });
  });
  const clashPosition = blockPosArray[blockPosArray.length - 1].x + 1; //clash is +1, i.e. right side, of clicked block
  const rightIsOccupied =
    clashPosition === 7 || // position 7 is outside the 6x6 grid
    occupied.indexOf(clashPosition) !== -1;
  // if index of clashPosition value is not -1, it exists in checker array. this means a segment occupies clashPosition at same row of clicked block
  return rightIsOccupied;
};

//event handler that moves entire block along x-axis by updating block coordinates array then calls main function again to render and update
const horizontalClickHandler = (event) => {
  const evTarget = event.target; // selects HTML element that is target of click
  const coordinates = { x: evTarget.dataset.x, y: evTarget.dataset.y }; //get  number saved in x and y data
  const blockNumber = evTarget.dataset.count; //get block number saved in count data
  const clickedBlock = arrayOfBlkCoordinates[blockNumber]; //returns array of new coordinates for specific block
  if (evTarget.id === "left") {
    const leftCollision = leftCollisionCheck(clickedBlock);
    if (leftCollision) return; //collision detection
    moveCount += 1;
    currentMoves[level-1] = moveCount; //updates currentMoves in case player changes level
    for (i = 0; i < arrayOfBlkCoordinates[blockNumber].length; i++) {
      arrayOfBlkCoordinates[blockNumber][i].x -= 1; //affects global array -> shift entire array of coordinates left by subtracting to the x of each array element
    }
  } else if (evTarget.id === "right") {
    const rightCollision = rightCollisionCheck(clickedBlock);
    if (rightCollision) return; //collision detection
    moveCount += 1;
    currentMoves[level-1] = moveCount; //updates currentMoves in case player changes level
    for (i = 0; i < arrayOfBlkCoordinates[blockNumber].length; i++) {
      arrayOfBlkCoordinates[blockNumber][i].x += 1; //affects global array -> shift entire array of coordinates right by adding to the x of each array element
    }
  }
  window.requestAnimationFrame(main);
};

//adds event handlers to horizontal blocks
const addHorizontalClickHandler = (classTag) => {
  const block = document.getElementsByClassName(classTag);
  const arr = Array.from(block); // make array of all DOM elements with classTag
  arr.forEach((e) => {
    e.addEventListener("click", horizontalClickHandler);
  });
};

//////////////////////////////////////////////
//*Vertical Movements
//////////////////////////////////////////////

//check top of element for collision with boundary or other blocks
const topCollisionCheck = (blockPosArray) => {
  const occupied = []; //initialize checker array
  arrayOfBlkCoordinates.forEach((array) => {
    // check block-arrays in main array of blocks
    array.forEach((coordinate) => {
      // check each coordinate pair in respective block array
      if (coordinate.x === blockPosArray[0].x) {
        // narrow down to blocks that have segments in the same column as clicked block, x-axis is same for all segments
        occupied.push(coordinate.y); //push in y-coordinate values into checker array if there any segments from other blocks in the same column
      }
    });
  });
  const clashPosition = blockPosArray[0].y - 1; //clash is -1, i.e. above/top, of clicked block's top/head
  const topIsOccupied =
    clashPosition === 0 || // position 0 is outside the 6x6 grid
    occupied.indexOf(clashPosition) !== -1;
  // if index of clashPosition value is not -1, it exists in checker array. this means a segment currently occupies clashPosition at same column of clicked block
  return topIsOccupied;
};

//check bottom of element for collision with boundary or other blocks
const bottomCollisionCheck = (blockPosArray) => {
  const occupied = []; //initialize checker array
  arrayOfBlkCoordinates.forEach((array) => {
    // check block-arrays in main array of blocks
    array.forEach((coordinate) => {
      // check each coordinate pair in respective block array
      if (coordinate.x === blockPosArray[0].x) {
        // narrow down to blocks that have segments in the same column as clicked block, x-axis is same for all segments
        occupied.push(coordinate.y); //push in y-coordinate values into checker array if there any segments from other blocks in the same column
      }
    });
  });
  const clashPosition = blockPosArray[blockPosArray.length - 1].y + 1; //clash is +1, i.e. bottom, of clicked block's bottom/end
  const bottomIsOccupied =
    clashPosition === 7 || // position 7 is outside the 6x6 grid
    occupied.indexOf(clashPosition) !== -1;
  // if index of clashPosition value is not -1, it exists in checker array. this means a segment currently occupies clashPosition at same column of clicked block
  return bottomIsOccupied;
};

//event handler that moves entire block along y-axis by updating block coordinates array then calls main function again to render and update
const verticalClickHandler = (event) => {
  const evTarget = event.target; //selects HTML element that is target of click
  const coordinates = { x: evTarget.dataset.x, y: evTarget.dataset.y };
  const blockNumber = evTarget.dataset.count; //get block number saved in count data
  const clickedBlock = arrayOfBlkCoordinates[blockNumber]; //returns array of new coordinates for specific block
  if (evTarget.id === "top") {
    const topCollision = topCollisionCheck(clickedBlock);
    if (topCollision) return; //collision detection
    moveCount += 1;
    currentMoves[level-1] = moveCount; //updates currentMoves in case player changes level
    for (i = 0; i < arrayOfBlkCoordinates[blockNumber].length; i++) {
      arrayOfBlkCoordinates[blockNumber][i].y -= 1; //affects global array -> shift entire array of coordinates up by subtracting to the y of each array element
    }
  } else if (evTarget.id === "bottom") {
    const bottomCollision = bottomCollisionCheck(clickedBlock);
    if (bottomCollision) return; //collision detection
    moveCount += 1;
    currentMoves[level-1] = moveCount; //updates currentMoves in case player changes level
    for (i = 0; i < arrayOfBlkCoordinates[blockNumber].length; i++) {
      arrayOfBlkCoordinates[blockNumber][i].y += 1; //affects global array -> shift entire array of coordinates down by adding to the y of each array element
    }
  }
  window.requestAnimationFrame(main);
};

//adds event handlers to vertical blocks
const addVerticalClickHandler = (classTag) => {
  const block = document.getElementsByClassName(classTag);
  const arr = Array.from(block); // make array of all DOM elements with classTag
  arr.forEach((e) => {
    e.addEventListener("click", verticalClickHandler);
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
      break;
    }
    case "L2": {
      level = 2;
      break;
    }
    case "L3": {
      level = 3;
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
