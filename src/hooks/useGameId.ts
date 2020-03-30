import shortid from 'shortid';

/**
 * Prevents new games from being created on refresh.
 */

export default (): string => {
  const existingGameId = localStorage.getItem('GAME_ID');
  const gameId = existingGameId || shortid.generate();

  if (!existingGameId) {
    localStorage.setItem('GAME_ID', gameId);
  }

  return gameId;
};
