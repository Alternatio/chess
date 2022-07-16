import React, { useState } from 'react'
import style from './Main.module.css'

import Board from './Board/Board'

const Main: React.FC = () => {
  const [turn, setTurn] = useState<boolean>(true)

  return (
    <div className={style.Main}>
      <div className={style.wrapper}>
        <Board />
        
      </div>
    </div>
  )
}

export default Main