let lastRenderTime = 0;
secondsToRefresh = 1; // screen refresh
const warehouseElement = document.getElementById("warehouse");
const exitElement =  document.getElementById("exit");
let playerWins = false;
let moveCount = 0;

const exit = () => {
    appendToWarehouse(exitElement);
}

const checkWinCondition = () => {
    return ((arrayOfBlkCoordinates[0][1].x === 6) && (arrayOfBlkCoordinates[0][1].y === 3)) 
} 

const render = () => {
    warehouseElement.innerHTML="";
    playerWins = checkWinCondition();
    drawBlue(); //draw all blocks from arrOfBlkCoordinates except 0th item, which is red block
    drawHorizontalBlock(arrayOfBlkCoordinates[0], "red-block", "0"); //render red block
    exit();
    moveCounter();
    
}

const update = () => {
    moveHorizontalBlockCheck("red-block");
    moveHorizontalBlockCheck("blue-block-h");
    moveVerticalBlockCheck("blue-block-v");
}

const main = (currentTime) => {
    if (playerWins) {
        const title = document.getElementById("title");
        title.innerHTML = `You Won!`;
        const final = document.getElementById("line1");
        final.innerHTML = `You won with ${moveCount} moves! Click 'OK' in the pop-up dialogue box to retry! :)`;
        const extraLine = document.getElementById("line2");
        extraLine.innerHTML = "";
        if (confirm(`With just ${moveCount} moves! Winner Winner! Chicken Dinner! Press ok to restart.`)) {
          window.location = '/'; //refreshes page
        }
      }

    const secondsSinceLastRender = (currentTime - lastRenderTime)/1000;
    window.requestAnimationFrame(main);
    if (secondsSinceLastRender < secondsToRefresh) return;
    lastRenderTime = currentTime;
    render();
    update(); // 'update' comes after 'render' because event listeners cannot be placed before creating div
}

window.requestAnimationFrame(main);