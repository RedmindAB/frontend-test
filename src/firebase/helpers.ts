import firebase from 'firebase'
import uuidv4 from 'uuid/v4'
import { Board, BattleDotStatus, GameState } from './types'

export class BattleDot {
  active = false
  status = BattleDotStatus.PASSIVE
}

export class _Player {
  name = ''
  board = getEmptyBoard()
  id = ''
  ready = false

  constructor() {
    const id = uuidv4()
    this.name = `Player-${id}`
    this.id = id
  }

  reset() {
    this.ready = false
    this.board = getEmptyBoard()
  }
}

export const player = new _Player()
// @ts-ignore
window.player = player

export function getEmptyBoard(): Board {
  return Array(3).fill(Array(3).fill(new BattleDot())) as Board
}

export function getGameState(): GameState {
  return {
    gameOver: false,
    started: false,
    currentTurn: player.id,
    players: {
      [player.id]: player
    },
    owner: player.id
  }
}

export async function createGame(gameId: string) {
  return firebase
    .database()
    .ref(`games/${gameId}`)
    .update(getGameState())
}

export async function startGame(gameId: string) {
  return firebase
    .database()
    .ref(`games/${gameId}/started`)
    .set(true)
}

export async function endGame(gameId: string) {
  return firebase
    .database()
    .ref(`games/${gameId}/gameOver`)
    .set(true)
}

export async function setPlayerBoard(gameId: string, board: Board) {
  return firebase
    .database()
    .ref(`games/${gameId}/players/${player.id}`)
    .update({ board })
}

export async function fireAtDot(
  gameId: string,
  [row, column]: [number, number]
) {
  return firebase
    .database()
    .ref(`games/${gameId}`)
    .once('value', async snap => {
      const { players }: GameState = snap.val()
      const otherPlayer = Object.values(players).find(p => p.id !== player.id)

      if (!otherPlayer) throw Error('Player not found')

      const targettedDot = otherPlayer?.board[row][column]
      const newBoard = [...otherPlayer.board]

      if (targettedDot?.active) {
        newBoard[row][column].status = BattleDotStatus.HIT
      } else {
        newBoard[row][column].status = BattleDotStatus.MISSED
      }

      await snap.ref
        .child(`players/${otherPlayer.id}`)
        .update({ board: newBoard })
    })
}

export async function updateGame(gameId: string, update: Partial<GameState>) {
  return firebase
    .database()
    .ref(`games/${gameId}`)
    .update(update)
}

export async function listenToGame(
  gameId: string,
  callback: (gameState: GameState) => void
) {
  return firebase
    .database()
    .ref(`games/${gameId}`)
    .on('value', snapshot => callback(snapshot.val() as GameState))
}

export async function joinGame(gameId: string) {
  return firebase
    .database()
    .ref(`games/${gameId}/players`)
    .update({ [player.id]: player })
}

export async function endTurn(gameId: string) {
  return firebase
    .database()
    .ref(`games/${gameId}`)
    .once('value', snap => {
      const { currentTurn, players }: GameState = snap.val()
      const nextPlayer = Object.values(players).find(p => p.id !== currentTurn)

      if (!nextPlayer) throw Error('Player not found')

      snap.ref.update({ currentTurn: nextPlayer.id })
    })
}

export function initializeFirebase() {
  const firebaseConfig = {
    apiKey: 'AIzaSyAljtDgu0ljWIKj42ucG7uKiaJEVecgt6c',
    authDomain: 'battledots-232cf.firebaseapp.com',
    databaseURL: 'https://battledots-232cf.firebaseio.com',
    projectId: 'battledots-232cf',
    storageBucket: 'battledots-232cf.appspot.com',
    messagingSenderId: '943113085253',
    appId: '1:943113085253:web:2160529db14df528fd5e2c'
  }

  firebase.initializeApp(firebaseConfig)
}
