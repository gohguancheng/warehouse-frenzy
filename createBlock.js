

const appendBlock = (element) => warehouseElement.appendChild(element);

const drawHorizontalBlock = (coordinatesArray, className, num) => {
  //takes in the warehouse argument as the space to put in the creation based on redBlockPos.
  coordinatesArray.forEach((segment, index, posArray) => {
    const arrayLR = ["left", "right"];
    const BlockElement = document.createElement("div"); //create div in HTMl
    BlockElement.style.gridRowStart = segment.y; //sets position, puts a segment on the defined row
    BlockElement.style.gridColumnStart = segment.x; //sets position, puts a segment on the defined column
    BlockElement.classList.add(className); //sets look of element, adds a class to style it based on css class
    BlockElement.setAttribute("count", num);
    if (index === 0) {
      BlockElement.setAttribute("id", arrayLR[0]);
    } else if (index === posArray.length - 1) {
      BlockElement.setAttribute("id", arrayLR[1]);
    }
    appendBlock(BlockElement); //appends 'div' segment to warehouse div
    
  });
};

const drawVerticalBlock = (coordinatesArray, className, num) => {
  //takes in the warehouse argument as the space to put in the creation based on redBlockPos.
  coordinatesArray.forEach((segment, index, posArray) => {
    const arrayTB = ["top", "bottom"];
    const BlockElement = document.createElement("div"); //create div in HTMl
    BlockElement.style.gridRowStart = segment.y; //sets position, puts a segment on the defined row
    BlockElement.style.gridColumnStart = segment.x; //sets position, puts a segment on the defined column
    BlockElement.classList.add(className); //sets look of element, adds a class to style it based on css class
    BlockElement.setAttribute("count", num);
    if (index === 0) {
      BlockElement.setAttribute("id", arrayTB[0]);
    } else if (index === posArray.length-1) {
      BlockElement.setAttribute("id", arrayTB[1]);
    }
    appendBlock(BlockElement); //appends 'div' segment to warehouse div
  });
};