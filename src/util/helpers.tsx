import { player } from '../App';
import { GameState, Player } from '../firebase/types';

export enum GameStatus {
  PENDING = 'PENDING',
  STARTED = 'STARTED',
  COMPLETED = 'COMPLETED',
}

export function getGameStatus({ started, gameOver }: GameState): GameStatus {
  switch (true) {
    case !started:
      return GameStatus.PENDING;
    case started && !gameOver:
      return GameStatus.STARTED;
    case gameOver:
      return GameStatus.COMPLETED;
  }
}

export function isPlayersTurn({ currentTurn }: GameState) {
  return currentTurn === player.id;
}

export function getNamedBoards({
  players,
}: GameState): {
  player: Player['board'];
  opponent: Player['board'];
} {
  return {
    player: Object.values(players).find((p) => p.id === player.id).board,
    opponent: Object.values(players).find((p) => p.id !== player.id).board,
  };
}
