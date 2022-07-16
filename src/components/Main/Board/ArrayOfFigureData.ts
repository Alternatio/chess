type arrayOfFiguresType = {
    idFigure: number
    xPosOfFigure: number
    yPosOfFigure: number
}[]

const arrayOfFigures: arrayOfFiguresType = [
  // black
  {idFigure: 6, xPosOfFigure: 5, yPosOfFigure: 1},
  {idFigure: 7, xPosOfFigure: 4, yPosOfFigure: 1},
  {idFigure: 8, xPosOfFigure: 1, yPosOfFigure: 1},
  {idFigure: 8, xPosOfFigure: 8, yPosOfFigure: 1},
  {idFigure: 9, xPosOfFigure: 3, yPosOfFigure: 1},
  {idFigure: 9, xPosOfFigure: 6, yPosOfFigure: 1},
  {idFigure: 10, xPosOfFigure: 2, yPosOfFigure: 1},
  {idFigure: 10, xPosOfFigure: 7, yPosOfFigure: 1},
  {idFigure: 11, xPosOfFigure: 1, yPosOfFigure: 2},
  {idFigure: 11, xPosOfFigure: 2, yPosOfFigure: 2},
  {idFigure: 11, xPosOfFigure: 3, yPosOfFigure: 2},
  {idFigure: 11, xPosOfFigure: 4, yPosOfFigure: 2},
  {idFigure: 11, xPosOfFigure: 5, yPosOfFigure: 2},
  {idFigure: 11, xPosOfFigure: 6, yPosOfFigure: 2},
  {idFigure: 11, xPosOfFigure: 7, yPosOfFigure: 2},
  {idFigure: 11, xPosOfFigure: 8, yPosOfFigure: 2},

  // white
  {idFigure: 0, xPosOfFigure: 5, yPosOfFigure: 8},
  {idFigure: 1, xPosOfFigure: 4, yPosOfFigure: 8},
  {idFigure: 2, xPosOfFigure: 1, yPosOfFigure: 8},
  {idFigure: 2, xPosOfFigure: 8, yPosOfFigure: 8},
  {idFigure: 3, xPosOfFigure: 3, yPosOfFigure: 8},
  {idFigure: 3, xPosOfFigure: 6, yPosOfFigure: 8},
  {idFigure: 4, xPosOfFigure: 2, yPosOfFigure: 8},
  {idFigure: 4, xPosOfFigure: 7, yPosOfFigure: 8},
  {idFigure: 5, xPosOfFigure: 1, yPosOfFigure: 7},
  {idFigure: 5, xPosOfFigure: 2, yPosOfFigure: 7},
  {idFigure: 5, xPosOfFigure: 3, yPosOfFigure: 7},
  {idFigure: 5, xPosOfFigure: 4, yPosOfFigure: 7},
  {idFigure: 5, xPosOfFigure: 5, yPosOfFigure: 7},
  {idFigure: 5, xPosOfFigure: 6, yPosOfFigure: 7},
  {idFigure: 5, xPosOfFigure: 7, yPosOfFigure: 7},
  {idFigure: 5, xPosOfFigure: 8, yPosOfFigure: 7},

  // void
  {idFigure: 12, xPosOfFigure: 1, yPosOfFigure: 3},
  {idFigure: 12, xPosOfFigure: 2, yPosOfFigure: 3},
  {idFigure: 12, xPosOfFigure: 3, yPosOfFigure: 3},
  {idFigure: 12, xPosOfFigure: 4, yPosOfFigure: 3},
  {idFigure: 12, xPosOfFigure: 5, yPosOfFigure: 3},
  {idFigure: 12, xPosOfFigure: 6, yPosOfFigure: 3},
  {idFigure: 12, xPosOfFigure: 7, yPosOfFigure: 3},
  {idFigure: 12, xPosOfFigure: 8, yPosOfFigure: 3},
  {idFigure: 12, xPosOfFigure: 1, yPosOfFigure: 4},
  {idFigure: 12, xPosOfFigure: 2, yPosOfFigure: 4},
  {idFigure: 12, xPosOfFigure: 3, yPosOfFigure: 4},
  {idFigure: 12, xPosOfFigure: 4, yPosOfFigure: 4},
  {idFigure: 12, xPosOfFigure: 5, yPosOfFigure: 4},
  {idFigure: 12, xPosOfFigure: 6, yPosOfFigure: 4},
  {idFigure: 12, xPosOfFigure: 7, yPosOfFigure: 4},
  {idFigure: 12, xPosOfFigure: 8, yPosOfFigure: 4},
  {idFigure: 12, xPosOfFigure: 1, yPosOfFigure: 5},
  {idFigure: 12, xPosOfFigure: 2, yPosOfFigure: 5},
  {idFigure: 12, xPosOfFigure: 3, yPosOfFigure: 5},
  {idFigure: 12, xPosOfFigure: 4, yPosOfFigure: 5},
  {idFigure: 12, xPosOfFigure: 5, yPosOfFigure: 5},
  {idFigure: 12, xPosOfFigure: 6, yPosOfFigure: 5},
  {idFigure: 12, xPosOfFigure: 7, yPosOfFigure: 5},
  {idFigure: 12, xPosOfFigure: 8, yPosOfFigure: 5},
  {idFigure: 12, xPosOfFigure: 1, yPosOfFigure: 6},
  {idFigure: 12, xPosOfFigure: 2, yPosOfFigure: 6},
  {idFigure: 12, xPosOfFigure: 3, yPosOfFigure: 6},
  {idFigure: 12, xPosOfFigure: 4, yPosOfFigure: 6},
  {idFigure: 12, xPosOfFigure: 5, yPosOfFigure: 6},
  {idFigure: 12, xPosOfFigure: 6, yPosOfFigure: 6},
  {idFigure: 12, xPosOfFigure: 7, yPosOfFigure: 6},
  {idFigure: 12, xPosOfFigure: 8, yPosOfFigure: 6},
]

export default arrayOfFigures