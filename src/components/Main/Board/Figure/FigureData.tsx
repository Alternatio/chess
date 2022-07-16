type FigureDataType = {
  charOfFigure: JSX.Element[]
}

const FigureData: FigureDataType = {
  charOfFigure: [
    // 0, whiteKing: 
    <span>&#9812;</span>,
    // 1, whiteQueen: 
    <span>&#9813;</span>,
    // 2, whiteRook: 
    <span>&#9814;</span>,
    // 3, whiteBishop: 
    <span>&#9815;</span>,
    // 4, whiteKnight: 
    <span>&#9816;</span>,
    // 5, whitePawn: 
    <span>&#9817;</span>,

    // 6, blackKing: 
    <span>&#9818;</span>,
    // 7, blackQueen: 
    <span>&#9819;</span>,
    // 8, blackRook: 
    <span>&#9820;</span>,
    // 9, blackBishop: 
    <span>&#9821;</span>,
    // 10, blackKnight: 
    <span>&#9822;</span>,
    // 11, blackPawn: 
    <span>&#9823;</span>,

    // 12, void
    <span>&#32;</span>
  ],
}

export default FigureData