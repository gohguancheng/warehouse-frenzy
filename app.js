let lastRenderTime = 0;
secondsToRefresh = 1; // screen refresh
const warehouse = document.getElementById("warehouse");

input = () => {

}

const render  = () => {
    drawBlock(warehouse, redBlock, "red-block");
    drawBlock(warehouse, blueBlock, "blue-block");
}

const control = () => {
    moveBlockCheck("red-block");

}

const main = (currentTime) => {
    window.requestAnimationFrame(main);
    const secondsSinceLastRender = (currentTime - lastRenderTime)/1000;
    if (secondsSinceLastRender < secondsToRefresh) return;
    lastRenderTime = currentTime;
    warehouse.innerHTML="";
    render();
    control();
    input();

}

window.requestAnimationFrame(main);