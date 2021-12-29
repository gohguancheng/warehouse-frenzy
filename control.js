
const equalArraysOfObjects = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i].x !== arr2[i].x || arr1[i].y !== arr2[i].y) return false;
  }
  return true;
}

//!
const isAdjacent = (obj1, obj2, dir) => {
  if (dir === "L") {
    return obj1.x - 1 === obj2.x; 
  }
}

//* Horizontal Movement 

const leftCollisionCheck = (blockPosArray) => {
  const otherBlocks = arrayOfBlueBlockCoordinates.filter((bArray) => bArray !== blockPosArray); //removes self from checks
  const isRedBlock = equalArraysOfObjects(blockPosArray, redBlockCoordinates);
  if (!isRedBlock) {
    otherBlocks.push(redBlockCoordinates);
  }
  const isRightOfBlocks = otherBlocks.some((element) => (element.x-1) === blockPosArray.x); //! each block is an array, check each element in blockArray across array of blockArrays
  result = ((blockPosArray[0].x - 1 === 0) || isRightOfBlocks); //! how to check against all block coordinates without checking self
  return result;
};

const rightCollisionCheck = (blockPosArray) => {
  // const otherBlocks = arrayOfBlueBlockCoordinates.filter((bArray) => bArray !== blockPosArray); //removes self from checks
  // const isRedBlock = equalArraysOfObjects(blockPosArray, redBlockCoordinates);
  // if (!isRedBlock) {
  //   otherBlocks.push(redBlockCoordinates);
  // }
  // const isLeftOfBlocks = otherBlocks.some((element) => (element.x+1) === blockPosArray.x);
  const clash = []; //initialize checker array
  arrayOfBlueBlockCoordinates.forEach((array) => {
    array.forEach((coordinate) => {
      if (coordinate.y === blockPosArray[0].y) {
        clash.push(coordinate.x); //push in value into checker array
      }
    })
  })
  result = ((blockPosArray[blockPosArray.length-1].x + 1 === 6) || clash.indexOf(blockPosArray[blockPosArray.length-1].x + 1) !== -1);
    return result;
  };

const horizontalClickHandler = (event) => {
  const evTarget = event.target; // selects HTML element that is target of click
  const leftCollision = leftCollisionCheck(redBlockCoordinates);
  const rightCollision = rightCollisionCheck(redBlockCoordinates);
  if (evTarget.id === "left") {
    if (leftCollision) return; //collision detection
    for (i = 0; i < redBlockCoordinates.length; i++) {
      redBlockCoordinates[i].x -= 1; //shift entire array of coordinates left
    }
  } else if (evTarget.id === "right") {
    if (rightCollision) return; //collision detection
    for (i = 0; i < redBlockCoordinates.length; i++) {
      redBlockCoordinates[i].x += 1; //shift entire array of coordinates right
    }
  }
  render();
};

const moveHorizontalBlockCheck = (classTag) => {
  const block = document.getElementsByClassName(classTag);
  const arr = Array.from(block);
  arr.forEach((e) => {
    e.addEventListener("click", horizontalClickHandler);
  });
};

//////////////////////////////////////////////
//! //*Vertical Movements

// const topCollisionCheck = (blockPosArray) => {
//   result = (blockPosArray[0].y === 1);
//   return result;
// };

// const bottomCollisionCheck = (blockPosArray) => {
//     result = (blockPosArray[0].y === 5);
//     return result;
//   };

// const verticalClickHandler = (event, arr) => {
//   const evTarget = event.target; //selects HTML element that is target of click
//   const topCollision = topCollisionCheck(arr);
//   const bottomCollision = bottomCollisionCheck(arr);
//   if (evTarget.id === "top") {
//     if (topCollision) return; //collision detection
//     for (i = 0; i < arr.length; i++) {
//       arr[i].y -= 1; //shift entire array of coordinates up
//     }
//   } else if (evTarget.id === "bottom") {
//     if (bottomCollision) return; //collision detection
//     for (i = 0; i < arr.length; i++) {
//       arr[i].y += 1; //shift entire array of coordinates down
//     }
//   }
//   render();
// };

// const moveVerticalBlockCheck = (classTag) => {
//   const block = document.getElementsByClassName(classTag);
//   const arr = Array.from(block);
//   arr.forEach((e) => {
//     e.addEventListener("click", verticalClickHandler(arr));
//   });
// };

