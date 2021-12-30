//////////////////////////////////////////////
//* Horizontal Movement
//////////////////////////////////////////////

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

const horizontalClickHandler = (event) => {
  const evTarget = event.target; // selects HTML element that is target of click
  const coordinates = { x: evTarget.dataset.x, y: evTarget.dataset.y }; //get  number saved in x and y data
  const blockNumber = evTarget.dataset.count; //get block number saved in count data
  const clickedBlock = arrayOfBlkCoordinates[blockNumber]; //returns array of new coordinates for specific block
  if (evTarget.id === "left") {
    const leftCollision = leftCollisionCheck(clickedBlock);
    if (leftCollision) return; //collision detection
    for (i = 0; i < arrayOfBlkCoordinates[blockNumber].length; i++) {
      arrayOfBlkCoordinates[blockNumber][i].x -= 1; //affects global array -> shift entire array of coordinates left
    }
  } else if (evTarget.id === "right") {
    const rightCollision = rightCollisionCheck(clickedBlock);
    if (rightCollision) return; //collision detection
    for (i = 0; i < arrayOfBlkCoordinates[blockNumber].length; i++) {
      arrayOfBlkCoordinates[blockNumber][i].x += 1; //affects global array -> shift entire array of coordinates right
    }
  }
  render();
};

const moveHorizontalBlockCheck = (classTag) => {
  const block = document.getElementsByClassName(classTag);
  const arr = Array.from(block); // make array of all DOM elements with classTag
  arr.forEach((e) => {
    e.addEventListener("click", horizontalClickHandler);
  });
};

//////////////////////////////////////////////
//*Vertical Movements
//////////////////////////////////////////////

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
  const clashPosition = blockPosArray[0].y - 1; //clash is +1, i.e. bottom, of clicked block
  const topIsOccupied =
    clashPosition === 0 || // position 0 is outside the 6x6 grid
    occupied.indexOf(clashPosition) !== -1;
  // if index of clashPosition value is not -1, it exists in checker array. this means a segment occupies clashPosition at same column of clicked block
  return topIsOccupied;
};

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
  const clashPosition = blockPosArray[blockPosArray.length - 1].y + 1; //clash is +1, i.e. bottom, of clicked block
  const bottomIsOccupied =
    clashPosition === 7 || // position 7 is outside the 6x6 grid
    occupied.indexOf(clashPosition) !== -1;
  // if index of clashPosition value is not -1, it exists in checker array. this means a segment occupies clashPosition at same column of clicked block
  return bottomIsOccupied;
};

const verticalClickHandler = (event) => {
  const evTarget = event.target; //selects HTML element that is target of click
  const coordinates = { x: evTarget.dataset.x, y: evTarget.dataset.y };
  const blockNumber = evTarget.dataset.count; //get block number saved in count data
  const clickedBlock = arrayOfBlkCoordinates[blockNumber]; //returns array of new coordinates for specific block
  if (evTarget.id === "top") {
    const topCollision = topCollisionCheck(clickedBlock);
    console.log("top collide: ", topCollision);
    if (topCollision) return; //collision detection
    for (i = 0; i < arrayOfBlkCoordinates[blockNumber].length; i++) {
      arrayOfBlkCoordinates[blockNumber][i].y -= 1; //affects global array -> shift entire array of coordinates up
    }
  } else if (evTarget.id === "bottom") {
    const bottomCollision = bottomCollisionCheck(clickedBlock);
    console.log("bottom collide: ", bottomCollision);
    if (bottomCollision) return; //collision detection
    for (i = 0; i < arrayOfBlkCoordinates[blockNumber].length; i++) {
      arrayOfBlkCoordinates[blockNumber][i].y += 1; //affects global array -> shift entire array of coordinates down
    }
  }
  render();
};

const moveVerticalBlockCheck = (classTag) => {
  const block = document.getElementsByClassName(classTag);
  const arr = Array.from(block); // make array of all DOM elements with classTag
  arr.forEach((e) => {
    e.addEventListener("click", verticalClickHandler);
  });
};
