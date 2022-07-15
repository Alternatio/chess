import React from 'react'
import { motion } from 'framer-motion'

import style from './Board.module.css'

import Figure from './Figure/Figure'

const Board: React.FC = () => {

  return (
    <div className={style.Board}>
      <div className={style.figures}>
        <div className={style.figuresContainer}>
          <Figure />
        </div>
      </div>
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
            {coordNumbers[i] + coordLetters[j]}
          </span>
        </div>
      ) 
      : fillArray.push(
        <div className={style.cellBlack + " " + style.cell}>
          <span className={style.coordinate}>
            {coordNumbers[i] + coordLetters[j]}
          </span>
        </div>
      )
    }
  }
  return fillArray
}
export default Board