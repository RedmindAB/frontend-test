import shortid from 'shortid';
import { getRandomizedBoard } from './helpers';

export class Player {
  name = '';
  board = getRandomizedBoard();
  id = '';
  ready = false;
  attempts = 0;

  constructor() {
    const existingPlayerId = localStorage.getItem('PLAYER_ID');
    const id = existingPlayerId || shortid.generate();

    if (!existingPlayerId) {
      localStorage.setItem('PLAYER_ID', id);
    }

    this.name = `Player-${id}`;
    this.id = id;
  }

  reset() {
    this.ready = false;
    this.board = getRandomizedBoard();
    this.attempts = 0;
  }
}
