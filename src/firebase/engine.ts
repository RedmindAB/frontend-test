import firebase from 'firebase';
import { getInitialGameState } from './helpers';
import { BattleDotStatus, Board, GameProps, GameState, Player } from './types';

export class BattleDot {
  active = false;
  status = BattleDotStatus.PASSIVE;
}

export class GameEngine {
  id: string;
  player: Player;

  constructor({ gameId, player }: GameProps) {
    this.id = gameId;
    this.player = player;
  }

  async create() {
    const gameState = getInitialGameState(this.player);

    return firebase
      .database()
      .ref(`games/${this.id}`)
      .once('value', (snap) => {
        if (!snap.exists()) {
          snap.ref.set(gameState);
        }
      });
  }

  async start() {
    localStorage.removeItem('GAME_ID');

    return firebase
      .database()
      .ref(`games/${this.id}/started`)
      .set(true);
  }

  async end() {
    return firebase
      .database()
      .ref(`games/${this.id}/gameOver`)
      .set(true);
  }

  async setPlayerBoard(board: Board) {
    return firebase
      .database()
      .ref(`games/${this.id}/players/${this.player.id}`)
      .update({ board });
  }

  async fireAtDot([row, column]: [number, number]) {
    return firebase
      .database()
      .ref(`games/${this.id}`)
      .once('value', async (snap) => {
        const { players }: GameState = snap.val();
        const otherPlayer = Object.values(players).find(
          (p) => p.id !== this.player.id
        );

        if (!otherPlayer) throw Error('Player not found');

        ++this.player.attempts;

        const targettedDot = otherPlayer?.board[row][column];
        const newBoard = [...otherPlayer.board];

        if (targettedDot?.active) {
          newBoard[row][column].status = BattleDotStatus.HIT;
        } else {
          newBoard[row][column].status = BattleDotStatus.MISSED;
        }

        await snap.ref
          .child(`players/${otherPlayer.id}`)
          .update({ board: newBoard });
      });
  }

  async update(update: Partial<GameState>) {
    return firebase
      .database()
      .ref(`games/${this.id}`)
      .update(update);
  }

  async listen(callback: (gameState: GameState) => void) {
    return firebase
      .database()
      .ref(`games/${this.id}`)
      .on('value', (snapshot) => callback(snapshot.val() as GameState));
  }

  async stopListening() {
    return firebase
      .database()
      .ref(`games/${this.id}`)
      .off('value');
  }

  async join() {
    return firebase
      .database()
      .ref(`games/${this.id}/players`)
      .update({ [this.player.id]: this.player });
  }

  async endTurn() {
    return firebase
      .database()
      .ref(`games/${this.id}`)
      .once('value', (snap) => {
        const { currentTurn, players }: GameState = snap.val();
        const nextPlayer = Object.values(players).find(
          (p) => p.id !== currentTurn
        );

        if (!nextPlayer) throw Error('Player not found');

        snap.ref.update({ currentTurn: nextPlayer.id });
      });
  }
}
