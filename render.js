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