import React, { FunctionComponent, useEffect, useRef, useState } from 'react'
import './App.css'
import { GameEngine, Player } from './firebase'
import { GameState } from './firebase/types'
import useGameId from './hooks/useGameId'

type Props = {}

const gameId = useGameId()
const player = new Player()
let gameEngine = new GameEngine({
  gameId,
  player
})

const App: FunctionComponent<Props> = () => {
  const [game, setGame] = useState<GameState>()
  let { current: prevGame } = useRef<GameState>(game)

  useEffect(() => {
    gameEngine.listen(setGame)
    gameEngine.create()

    return gameEngine.stopListening
  }, [])

  useEffect(() => {
    if (!game) {
    } else if (!prevGame) {
      prevGame = game
    } else {
      const playerHasJoined =
        Object.keys(game.players).length !==
        Object.keys(prevGame.players).length

      if (playerHasJoined) {
        gameEngine.start()
      }

      prevGame = game
    }
  }, [game])

  const joinGame = (gameId: string) => {
    gameEngine.stopListening()
    player.reset()
    gameEngine = new GameEngine({ player, gameId })
    gameEngine.join()
    gameEngine.listen(setGame)
  }

  return (
    <div>
      <h1>Game ID: {gameId}</h1>
      <h1>Player ID: {player.id}</h1>
      <h4>Game State</h4>
      <code>{JSON.stringify(game, null, 3)}</code>
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
