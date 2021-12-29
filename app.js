let lastRenderTime = 0;
secondsToRefresh = 1; // screen refresh
const warehouseElement = document.getElementById("warehouse");
const exitElement =  document.getElementById("exit");

const update = () => {
    moveHorizontalBlockCheck("red-block");
    // moveVerticalBlockCheck("blue-block");
}

const exit = () => {
    appendBlock(exitElement);
}

const render = (currentTime) => {
    warehouseElement.innerHTML="";
    let i = 1;
    arrayOfBlueBlockCoordinates.forEach((element) => {
        if (element[0].x == element[1].x) {
            drawVerticalBlock(element, "blue-block-v", i);
        } else {
        
            drawHorizontalBlock(element, "blue-block-h", i);
        }
        i += 1;
    });
    // drawVerticalBlock(arrayOfVBlueBlockCoordinates[0], "blue-block", "1"); //render blue block
    // drawVerticalBlock(arrayOfVBlueBlockCoordinates[1], "blue-block", "2"); //render blue block
    // drawHorizontalBlock(arrayOfHBlueBlockCoordinates[1], "blue-block-H", "1"); //render blue block
    drawHorizontalBlock(redBlockCoordinates, "red-block", ""); //render red block
    exit();
}

const main = (currentTime) => {

    const secondsSinceLastRender = (currentTime - lastRenderTime)/1000;
    window.requestAnimationFrame(main);
    if (secondsSinceLastRender < secondsToRefresh) return;
    lastRenderTime = currentTime;
    render();
    update(); // update comes after render because event listeners cannot be places before creating div
}

window.requestAnimationFrame(main);