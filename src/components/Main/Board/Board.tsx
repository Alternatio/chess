import React from 'react'
import { motion } from 'framer-motion'

import style from './Board.module.css'

import Figure from './Figure/Figure'
import arrayOfFigures from './ArrayOfFigureData'

const Board: React.FC = () => {
  return (
    <div className={style.Board}>
      <div className={style.figures}>
        {/* figures board */}
        <div className={style.figuresContainer}>
          {arrayOfFigures.map((value, index) => {
            return (
              <Figure 
              indexOfFigure={index}
              idFigure={arrayOfFigures[index].idFigure}
              xPosOfFigure={arrayOfFigures[index].xPosOfFigure}
              yPosOfFigure={arrayOfFigures[index].yPosOfFigure}
              />
            )
          })}
        </div>
      </div>
      {/* background board */}
      <div className={style.background}>
        {setCells()}
      </div>
    </div>
  )
}

// function for creating cells 
const setCells: Function = () => {
  let fillArray: JSX.Element[] = []
  const coordNumbers: string[] = ['1', '2', '3', '4', '5', '6', '7', '8']
  const coordLetters: string[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
  for(let i = 0; i < 8; i++) {
    for(let j = 0; j < 8; j++) {
      (j + i + 2) % 2 == 0 
      ? fillArray.push(
        <div className={style.cellWhite + " " + style.cell}>
          <span className={style.coordinate}>
            {i == 7 ? coordLetters[j] : false}
            {j == 7 ? coordNumbers[i] : false}
          </span>
        </div>
      ) 
      : fillArray.push(
        <div className={style.cellBlack + " " + style.cell}>
          <span className={style.coordinate}>
            { i == 7 ? coordLetters[j] : false}
            {j == 7 ? coordNumbers[i] : false}
          </span>
        </div>
      )
    }
  }
  return fillArray
}
export default Board