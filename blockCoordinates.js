const minMoves = [13, 37, 31]; // hard coded high scores based on feedback
const currentMoves = [0, 0, 0]; // counter to store numbers of moves used in each level

//below contains arrays of arrays of coordinates(objects), 
//first (0th) item in each level's arrays represent position of red block 
const level1Blocks = [
  [
    //red0
    {
      x: 1,
      y: 3,
    },
    {
      x: 2,
      y: 3,
    },
  ],
  [
    //blue1
    {
      x: 6,
      y: 1,
    },
    {
      x: 6,
      y: 2,
    },
    {
      x: 6,
      y: 3,
    },
  ],
  [
    //blue2
    {
      x: 5,
      y: 2,
    },
    {
      x: 5,
      y: 3,
    },
  ],
  [  //blue3
    {
      x: 5,
      y: 5,
    },
    {
      x: 6,
      y: 5,
    },
  ],
  [  //blue4
    {
      x: 3,
      y: 5,
    },
    {
      x: 4,
      y: 5,
    },
  ], 
  [  //blue5
    {
      x: 4,
      y: 6,
    },
    {
      x: 5,
      y: 6,
    },
    {
      x: 6,
      y: 6,
    },
  ], 
  [  //blue6
    {
      x: 2,
      y: 4,
    },
    {
      x: 2,
      y: 5,
    },
  ], 
  [  //blue7
    {
      x: 1,
      y: 4,
    },
    {
      x: 1,
      y: 5,
    },
    {
      x: 1,
      y: 6,
    }
  ], 
  [  //blue8
    {
      x: 3,
      y: 2,
    },
    {
      x: 3,
      y: 3,
    },
  ], 
  [  //blue9
    {
      x: 2,
      y: 1,
    },
    {
      x: 2,
      y: 2,
    },
  ], 
];


const level2Blocks = [
  [
    //red0
    {
      x: 2,
      y: 3,
    },
    {
      x: 3,
      y: 3,
    },
  ],
  [
    //blue1
    {
      x: 5,
      y: 2,
    },
    {
      x: 5,
      y: 3,
    },
    {
      x: 5,
      y: 4,
    },
  ],
  [
    //blue2
    {
      x: 4,
      y: 2,
    },
    {
      x: 4,
      y: 3,
    },
    {
      x: 4,
      y: 4,
    },
  ],
  [  //blue3
    {
      x: 3,
      y: 4,
    },
    {
      x: 3,
      y: 5,
    },
  ],
  [  //blue4
    {
      x: 3,
      y: 6,
    },
    {
      x: 4,
      y: 6,
    },
  ], 
  [  //blue5
    {
      x: 2,
      y: 5,
    },
    {
      x: 2,
      y: 6,
    },
  ], 
  [  //blue6
    {
      x: 1,
      y: 4,
    },
    {
      x: 2,
      y: 4,
    },
  ], 
];

const level3Blocks = [
  [
    //red0
    {
      x: 4,
      y: 3,
    },
    {
      x: 5,
      y: 3,
    },
  ],
  [
    //blue1
    {
      x: 6,
      y: 2,
    },
    {
      x: 6,
      y: 3,
    },
    {
      x: 6,
      y: 4,
    },
  ],
  [
    //blue2
    {
      x: 5,
      y: 5,
    },
    {
      x: 6,
      y: 5,
    },
  ],
  [  //blue3
    {
      x: 4,
      y: 4,
    },
    {
      x: 5,
      y: 4,
    },
  ],
  [  //blue4
    {
      x: 4,
      y: 5,
    },
    {
      x: 4,
      y: 6,
    },
  ], 
  [  //blue5
    {
      x: 3,
      y: 1,
    },
    {
      x: 3,
      y: 2,
    },
    {
      x: 3,
      y: 3,
    },
  ], 
  [  //blue6
    {
      x: 2,
      y: 4,
    },
    {
      x: 3,
      y: 4,
    },
  ], 
  [  //blue7
    {
      x: 1,
      y: 6,
    },
    {
      x: 2,
      y: 6,
    },
    {
      x: 3,
      y: 6,
    },
  ], 
  [  //blue8
    {
      x: 1,
      y: 1,
    },
    {
      x: 2,
      y: 1,
    },
  ], 
  [  //blue9
    {
      x: 2,
      y: 2,
    },
    {
      x: 2,
      y: 3,
    },
  ], 
  [  //blue10
    {
      x: 1,
      y: 3,
    },
    {
      x: 1,
      y: 4,
    },
  ], 
];

