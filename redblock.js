let redBlock = [
  {
    x: 1,
    y: 3,
  },
  {
    x: 2,
    y: 3,
  },
];

let blueBlock = [
  {
    x: 6,
    y: 3,
  },
  {
    x: 6,
    y: 4,
  },
  {
    x: 6,
    y: 5,
  },
];

const drawBlock = (warehouse, blockArray, className) => {
  //takes in the warehouse argument as the space to put in the creation based on snakeBody.
  blockArray.forEach((segment) => {
    const BlockElement = document.createElement("div"); //create div in HTMl
    BlockElement.style.gridRowStart = segment.y; //sets position, puts a segment on the defined row
    BlockElement.style.gridColumnStart = segment.x; //sets position, puts a segment on the defined column
    BlockElement.classList.add(className); //sets look of element, adds a class to style it based on css class
    warehouse.appendChild(BlockElement); //appends 'div' segment to warehouse div
  });
};

const clickHandler = () => console.log("click");

const moveBlockCheck = (classTag) => {
  const block = document.getElementsByClassName(classTag);
    console.log(block);

};
