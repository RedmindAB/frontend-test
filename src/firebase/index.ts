import {
  startGame,
  updateGame,
  endGame,
  listenToGame,
  joinGame,
  createGame,
  endTurn,
  fireAtDot,
  setPlayerBoard
} from './helpers'

export const game = {
  start: startGame,
  update: updateGame,
  end: endGame,
  listen: listenToGame,
  join: joinGame,
  create: createGame,
  endTurn,
  fireAtDot,
  setPlayerBoard
}
