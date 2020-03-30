export type Board = [BoardRow, BoardRow, BoardRow];

export type BoardRow = [BattleDot, BattleDot, BattleDot];

export enum BattleDotStatus {
  PASSIVE,
  HIT,
  MISSED,
}

export type BattleDot = {
  status: BattleDotStatus;
  active: boolean;
};

export type Player = {
  name: string;
  board: Board;
  id: string;
  ready: boolean;
  attempts: number;
};

export type GameState = {
  started: boolean;
  gameOver: boolean;
  owner: Player['id'];
  players: {
    [key: string]: Player;
  };
  currentTurn: Player['id'];
};

export type GameProps = {
  gameId: string;
  player: Player;
};
