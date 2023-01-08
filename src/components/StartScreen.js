import React from 'react'
import "./StartScreen.css"

const StartScreen = ({startGame}) => {
  return (
    <div className="start">
        <h1>Guess The Word</h1>
        <p>Clique no botão abaixo para começar a jogar</p>
        <button onClick={startGame}>Play</button>
    </div>
  )
}

export default StartScreen