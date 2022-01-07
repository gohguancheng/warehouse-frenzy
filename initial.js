const minMoves = [13, 37, 31]; // hard coded high scores based on feedback
const currentMoves = [0, 0, 0]; // counter to store numbers of moves used in each level

const gameLevel1 = 
[
    ["wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall"],
    ["wall", "b2T ", "n   ", "n   ", "n   ", "n   ", "b8T ", "wall"],
    ["wall", "b2B ", "nnnn", "b4T ", "n   ", "b9T ", "b8V ", "wall"],
    ["wall", "r0L ",  "r0R", "b4B ", "n   ", "b9B ", "b8B ", "exit"],
    ["wall", "b1T ",  "b3T", "n   ", "n   ", "n   ", "n   ", "wall"],
    ["wall", "b1V ",  "b3B", "b5L ", "b5R ", "b7L ", "b7R ", "wall"],
    ["wall", "b1B ", "nnnn", "n   ", "b6L ", "b6H ", "b6R ", "wall"],
    ["wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall",],
];

const gameLevel2 = 
[
    ["wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall"],
    ["wall", "n   ", "n   ", "n   ", "n   ", "n   ", "n   ", "wall"],
    ["wall", "n   ", "n   ", "n   ", "b6T ", "b7T ", "n   ", "wall"],
    ["wall", "n   ", "r0L ",  "r0R", "b6V ", "b7V ", "n   ", "exit"],
    ["wall", "b1L ", "b1R ", "b3T ", "b6B ", "b7B ", "n   ", "wall"],
    ["wall", "n   ", "b2T ", "b3B ", "n   ", "n   ", "n   ", "wall"],
    ["wall", "n   ", "b2B ", "b4L ", "b4R ", "n   ", "n   ", "wall"],
    ["wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall",],
];

const gameLevel3 = 
[
    ["wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall"],
    ["wall", "b2T ", "nnnn", "n   ", "n   ", "n   ", "b8T ", "wall"],
    ["wall", "b2B ", "nnnn", "b4T ", "n   ", "b9T ", "b8V ", "wall"],
    ["wall", "r0L ",  "r0R", "b4B ", "n   ", "b9B ", "b8B ", "exit"],
    ["wall", "b1T ",  "b3T", "n   ", "n   ", "n   ", "n   ", "wall"],
    ["wall", "b1V ",  "b3B", "b5L ", "b5R ", "b7L ", "b7R ", "wall"],
    ["wall", "b1B ", "nnnn", "n   ", "b6L ", "b6H ", "b6R ", "wall"],
    ["wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall",],
];

const initializeGameBoard = () => {
    const gameboard = [    
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
    ];

    for (i=0; i<8; i++) {
        for (j=0; j<8; j++) {
            gameboard[i].push(undefined);
        };
    };

    return gameboard;
} //returns a cleared game-board and push in undefined elements

const createFloorObject = () => {
    const floorObject = new Object();
    floorObject.class = "floor";
    return floorObject;
} //used for clickEventHandlers

const checkChar = (string, index) => string.charAt(index);
const assignClassProperty = (object, classString) => object.class = classString;
const assignBlockNumber = (object, index) => object.blockNumber = index; 
const assignDirection = (object, dir) => {
    switch (dir) {
        case "T":
        object.blockDirection = dir;
        break;
        case "R":
        object.blockDirection = dir;
        break;
        case "B":
        object.blockDirection = dir;
        break;
        case "L":
        object.blockDirection = dir;
        case "H":
        object.blockDirection = dir;
        break;
        case "V":
        object.blockDirection = dir;
        break;
    };
    
}

const chooseLevel = (levelArray, gameBoard) => {
    levelArray.forEach((rowArray, yIndex) => 
    rowArray.forEach((element, xIndex) => {
        buildClass = checkChar(element, 0);
        numberString = checkChar(element, 1);
        blockNumber = parseInt(numberString);
        blockDirection = checkChar(element, 2);
        
        const attrObject = new Object();
        attrObject.x = xIndex;
        attrObject.y = yIndex;

        switch (buildClass) {
            case "e":
                assignClassProperty(attrObject, "exit");
                break;
            case "w":
                assignClassProperty(attrObject, "wall");
                break;
            case "n":
                assignClassProperty(attrObject, "floor");
                break;
            case "r":
                assignClassProperty(attrObject, "red-block");
                assignBlockNumber(attrObject, blockNumber);
                assignDirection(attrObject, blockDirection);
                break;
            case "b":
                assignClassProperty(attrObject, "blue-block");
                assignBlockNumber(attrObject, blockNumber);
                assignDirection(attrObject, blockDirection);
                break;
        }
        gameBoard[yIndex][xIndex] = attrObject;
    }))
return gameBoard;
} //return gameBoard

const clearOldBoard = (gameboard) => {
    gameboard.forEach((array) => {
        for (i=0; i<array.length; i++) {
            array.shift();
            array.push(undefined);
        }

        }
    )
    return gameboard;
}