import firebase from 'firebase'
import { BattleDot } from './engine'
import { Board, GameState, Player } from './types'

export function randomize(min: number, max: number) {
  return Math.round(Math.random() * (max - min) + min)
}

export function getEmptyBoard(): Board {
  return Array(3)
    .fill(null)
    .map(() =>
      Array(3)
        .fill(null)
        .map(() => new BattleDot())
    ) as Board
}

export function getRandomizedBoard(): Board {
  const board = getEmptyBoard()
  board.forEach(row => {
    row[randomize(0, 2)].active = true
  })

  return board
}

export function getInitialGameState(owner: Player): GameState {
  return {
    gameOver: false,
    started: false,
    currentTurn: owner.id,
    players: {
      [owner.id]: owner
    },
    owner: owner.id
  }
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
