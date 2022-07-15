import React from 'react'
import style from './Header.module.css'

const Header: React.FC = () => {
  return (
    <div className={style.Header}>
      <div className={style.logo}>
        &#9822; Chess
      </div>
    </div>
  )
}

export default Header