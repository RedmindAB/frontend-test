import {
  startGame,
  updateGame,
  endGame,
  listenToGame,
  joinGame,
  createGame,
  endTurn,
  fireAtDot,
  setPlayerBoard,
  stopListeningToGame
} from './helpers'

export const game = {
  start: startGame,
  stopListening: stopListeningToGame,
  update: updateGame,
  end: endGame,
  listen: listenToGame,
  join: joinGame,
  create: createGame,
  endTurn,
  fireAtDot,
  setPlayerBoard
}

// @ts-ignore
window.game = game
