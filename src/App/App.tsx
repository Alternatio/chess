import React from 'react'
import style from './App.module.css'

import '../fonts/fonts.css'
import '../styles/reset.css'

import Header from '../components/Header/Header'
import Main from './../components/Main/Main';

const App: React.FC = () => {
  return (
    <div className={style.App}>
      <Header />
      <Main />
    </div>
  )
}

export default App