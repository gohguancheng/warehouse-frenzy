const drawMoveCounter = () => {
    const countElement = document.getElementById("moveCount");
    countElement.innerHTML = `Block-Moves Count:</br>${currentMoves[level-1]} / ${minMoves[level-1]}`;
  }
  
  //draws default set of instruction text on instruction panel
  const drawDefaultInstructions = () => {
    const title = document.getElementById("title");
    title.innerHTML = `Welcome to </br> Warehouse Frenzy! </br></br> LEVEL ${level}`; //changes title text
    const final = document.getElementById("line1");
    final.innerHTML = `Click on the end segment(s) of each block to move the block in the corresponding direction.`; //changes text to reflect number of moves and instructs on how to restart
    const extraLine = document.getElementById("line2");
    extraLine.innerHTML = `Move the <span id="redtext">cargo (red) block</span> to the <span id="greentext">EXIT (green) door</span> to complete the level.
    </br></br> 
    A block-move is counted when a block moves. Win with as few block-moves as possible! </br></br>Best Score (Level ${level})</br> Min. Block-Moves: ${minMoves[level-1]}`; //removes additional line for instruction
  }
  
  //draws buttons use to go to various levels and reset/refresh game
  const drawButtons = () =>  {
    const button = document.getElementById(`refresh`);
    button.innerHTML = `Reset All</br>& Restart L1`;
    for (i=1; i<4; i++) {
      const button = document.getElementById(`L${i}`);
      button.innerHTML = `Go to Level ${i}`;
    }
  
  }

const render = (board) => {
    drawDefaultInstructions();
    drawMoveCounter();
    drawButtons();
    
    warehouse.innerHTML = "";
    board.forEach((rowItems) => 
        rowItems.forEach((cellObject) => {
            const DOMElement = document.createElement("div");
            DOMElement.className = cellObject.class;
            if (cellObject.blockDirection !== undefined) {
            DOMElement.id = cellObject.blockDirection;
            };
            if (cellObject.blockNumber !== undefined) {
                DOMElement.dataset.blockNumber = cellObject.blockNumber;
            };
            DOMElement.dataset.x = cellObject.x; //assign x data
            DOMElement.dataset.y = cellObject.y; // assign y data
            DOMElement.style.gridRowStart = DOMElement.dataset.y; //style position
            DOMElement.style.gridColumnStart = DOMElement.dataset.x; // style position
            warehouse.appendChild(DOMElement);
    }))

}

