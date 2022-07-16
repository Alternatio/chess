import React, { useState } from 'react'
import { motion } from 'framer-motion'
import style from './Figure.module.css'

import data from './FigureData'
import arrayOfFigures from '../ArrayOfFigureData'

type FigureProps = {
  xPosOfFigure: number
  yPosOfFigure: number
  idFigure: number
  indexOfFigure: number
}

const Figure: React.FC<FigureProps> = (props: FigureProps) => {

  const [isActive, setActive] = useState<boolean>(false)

  const figurePosition = {
    gridColumnStart: (props.xPosOfFigure).toString(),
    gridColumnEnd: (props.xPosOfFigure + 1).toString(),
    gridRowStart: (props.yPosOfFigure).toString(),
    gridRowEnd:(props.yPosOfFigure + 1).toString()
  }

  return (
    <motion.div 
    onClick={() => setActive(!isActive)}
    content={isActive.toString()}
    style={figurePosition}
    className={style.Figure}>
      {data.charOfFigure[props.idFigure]}
    </motion.div>
  )
}

export default Figure