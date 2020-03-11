import React, { useEffect, useState, FunctionComponent } from 'react'
import './App.css'
import { player } from './firebase/helpers'
import { game } from './firebase'
import shortid from 'shortid'

type Props = {}

const App: FunctionComponent<Props> = () => {
  const [gameId, setGameId] = useState('')

  useEffect(() => {
    const existingGameId = localStorage.getItem('GAME_ID')
    const gameId = existingGameId || shortid.generate()

    if (!existingGameId) {
      game.create(gameId)
      localStorage.setItem('GAME_ID', gameId)
    }

    setGameId(gameId)
  }, [])

  return (
    <div>
      <h1>Game ID: {gameId}</h1>
      <h1>Player ID: {player.id}</h1>
      <h4>Local Storage</h4>
      <code>{JSON.stringify(localStorage, null, 3)}</code>
      <p>
        Don't forget about{' '}
        <a
          href="https://www.figma.com/file/Ub8oaA72Q5A0lHgMxiDtmu/Redmind-Frontend-Test-Design?node-id=14%3A4"
          target="_blank"
          rel="noopener noreferrer"
        >
          Figma
        </a>
      </p>
      <p>
        Good luck, remember to have fun!{' '}
        <span role="img" aria-label="happy emoji">
          😃
        </span>
      </p>
    </div>
  )
}

export default App
