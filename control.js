const leftCollisionCheck = () => {
  result = redBlockCoordinates[0].x === 1;
  return result;
};

const rightCollisionCheck = () => {
    result = redBlockCoordinates[0].x === 5;
    return result;
  };

const horizontalClickHandler = (event) => {
  const evTarget = event.target;
  const leftCollision = leftCollisionCheck();
  const rightCollision = rightCollisionCheck();
  if (evTarget.id === "left") {
    if (leftCollision) return;

    console.log("no collision");
    for (i = 0; i < redBlockCoordinates.length; i++) {
      redBlockCoordinates[i].x -= 1;
    }
  } else if (evTarget.id === "right") {
    if (rightCollision) return;

    console.log("no collision");
    for (i = 0; i < redBlockCoordinates.length; i++) {
      redBlockCoordinates[i].x += 1;
    }
  }
  render();
};

const moveBlockCheck = (classTag) => {
  const block = document.getElementsByClassName(classTag);
  const arr = Array.from(block);
  arr.forEach((e) => {
    e.addEventListener("click", horizontalClickHandler);
  });
};
