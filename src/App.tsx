import React from 'react'
import './App.css'
import { initializeFirebase } from './firebase/helpers'
import { game } from './firebase'

initializeFirebase()

const App: React.FC = () => {
  // @ts-ignore
  window.game = game

  return null
}

export default App
