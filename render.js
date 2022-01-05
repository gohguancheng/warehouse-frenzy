const appendToWarehouse = (element) => warehouseElement.appendChild(element);

const drawSegment = (segmentObj, className, countTag) => {
  const BlockElement = document.createElement("div"); //create div in HTMl
  BlockElement.style.gridRowStart = segmentObj.y; //sets position, puts a segment on the defined row
  BlockElement.style.gridColumnStart = segmentObj.x; //sets position, puts a segment on the defined column
  BlockElement.setAttribute("data-y", segmentObj.y); //sets position as data tag
  BlockElement.setAttribute("data-x", segmentObj.x); //sets position as data tag
  BlockElement.classList.add(className); //sets look of element, adds a class to style it based on css class
  BlockElement.setAttribute("data-count", countTag);
  return BlockElement;
};

//* horizontal

const drawHorizontalBlock = (coordinatesArray, className, countTag) => {
  //takes in the warehouse argument as the space to put in the creation based on redBlockPos.
  coordinatesArray.forEach((segmentObj, index, coordinatesArr) => {
    const arrayLR = ["left", "right"];
    const BlockElement = drawSegment(segmentObj, className, countTag); 
    if (index === 0) {
      BlockElement.setAttribute("id", arrayLR[0]);
    } else if (index === coordinatesArr.length - 1) {
      BlockElement.setAttribute("id", arrayLR[1]);
    }
    appendToWarehouse(BlockElement); //appends 'div' segment to warehouse div
    
  });
};

//* vertical

const drawVerticalBlock = (coordinatesArray, className, countTag) => {
  //takes in the warehouse argument as the space to put in the creation based on redBlockPos.
  coordinatesArray.forEach((segmentObj, index, coordinatesArr) => {
    const arrayTB = ["top", "bottom"];
    const BlockElement = drawSegment(segmentObj, className, countTag); 
    if (index === 0) {
      BlockElement.setAttribute("id", arrayTB[0]);
    } else if (index === coordinatesArr.length-1) {
      BlockElement.setAttribute("id", arrayTB[1]);
    }
    appendToWarehouse(BlockElement); //appends 'div' segment to warehouse div
  });
};


const drawBlue = () => {
  let i = 1;
const arrOfBlueBlk = arrayOfBlkCoordinates.slice(1, arrayOfBlkCoordinates.length);
arrOfBlueBlk.forEach((element) => {
    if (element[0].x == element[1].x) {
        drawVerticalBlock(element, "blue-block-v", i);
    } else {
        drawHorizontalBlock(element, "blue-block-h", i);
    }
    i += 1;
});}

const drawMoveCounter = () => {
  const countElement = document.getElementById("moveCount");
  countElement.innerHTML = `Block-Moves Count:</br>${currentMoves[level-1]} / ${minMoves[level-1]}`;
}

const drawInstructions = () => {
  const title = document.getElementById("title");
  title.innerHTML = `Welcome to </br> Warehouse Frenzy! </br></br> LEVEL ${level}`; //changes title text
  const final = document.getElementById("line1");
  final.innerHTML = `Click on the end segment(s) of each block to move the block in the corresponding direction.`; //changes text to reflect number of moves and instructs on how to restart
  const extraLine = document.getElementById("line2");
  extraLine.innerHTML = `Move the <span id="redtext">cargo (red) block</span> to the <span id="greentext">EXIT (green) door</span> to win the game.
  </br></br> 
  A block-move is counted when a block moves. Win with as few block-moves as possible! </br></br>Best Score (Level ${level})</br> Min. Block-Moves: ${minMoves[level-1]}`; //removes additional line for instruction
}

const drawButtons = () =>  {
  const button = document.getElementById(`refresh`);
  button.innerHTML = `Reset Blocks & Restart L1`;
  for (i=1; i<4; i++) {
    const button = document.getElementById(`L${i}`);
    button.innerHTML = `Go to Level ${i}`;
  }

}