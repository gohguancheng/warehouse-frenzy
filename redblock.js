const redBlockCoordinates = [
  {
    x: 1,
    y: 3,
  },
  {
    x: 2,
    y: 3,
  },
];


const appendBlock = (element) => warehouseElement.appendChild(element);

const drawHorizontalBlock = (coordinatesArray, className) => {
  //takes in the warehouse argument as the space to put in the creation based on redBlockPos.
  coordinatesArray.forEach((segment, index, posArray) => {
    const BlockElement = document.createElement("div"); //create div in HTMl
    BlockElement.style.gridRowStart = segment.y; //sets position, puts a segment on the defined row
    BlockElement.style.gridColumnStart = segment.x; //sets position, puts a segment on the defined column
    BlockElement.classList.add(className); //sets look of element, adds a class to style it based on css class
    if (index === 0) {
      BlockElement.setAttribute("id", "left");
    } else if (index === posArray.length-1) {
      BlockElement.setAttribute("id", "right");
    }
    appendBlock(BlockElement); //appends 'div' segment to warehouse div
  });
};




