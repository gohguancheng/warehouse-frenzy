let lastRenderTime = 0;
secondsToRefresh = 1; // screen refresh
const warehouseElement = document.getElementById("warehouse");
const exitElement =  document.getElementById("exit");

const exit = () => {
    appendToWarehouse(exitElement);
}

const render = () => {
    warehouseElement.innerHTML="";
    drawBlue(); //draw all blocks from arrOfBlkCoordinates except 0th item, which is red block
    drawHorizontalBlock(arrayOfBlkCoordinates[0], "red-block", "0"); //render red block
    exit();
    
}

const update = () => {
    moveHorizontalBlockCheck("red-block");
    moveHorizontalBlockCheck("blue-block-h");
    moveVerticalBlockCheck("blue-block-v");
}

const main = (currentTime) => {

    const secondsSinceLastRender = (currentTime - lastRenderTime)/1000;
    window.requestAnimationFrame(main);
    if (secondsSinceLastRender < secondsToRefresh) return;
    lastRenderTime = currentTime;
    render();
    update(); // 'update' comes after 'render' because event listeners cannot be placed before creating div
}

window.requestAnimationFrame(main);