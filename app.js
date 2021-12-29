let lastRenderTime = 0;
secondsToRefresh = 1; // screen refresh
const warehouseElement = document.getElementById("warehouse");
const exitElement =  document.getElementById("exit");

const update = () => {
    moveBlockCheck("red-block");
}

const exit = () => {
    appendBlock(exitElement);
}

const render = (currentTime) => {
    warehouseElement.innerHTML="";
    drawHorizontalBlock(redBlockCoordinates, "red-block");
    exit();
}

const main = (currentTime) => {

    const secondsSinceLastRender = (currentTime - lastRenderTime)/1000;
    window.requestAnimationFrame(main);
    if (secondsSinceLastRender < secondsToRefresh) return;
    lastRenderTime = currentTime;
    render();
    update(); // control comes after render because event listeners cannot be places before creating div


}

window.requestAnimationFrame(main);