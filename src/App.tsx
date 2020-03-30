import React, { FunctionComponent, useEffect, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import './App.css';
import { Header } from './components/shared/components/Header';
import { GameEngine, Player } from './firebase';
import { GameState } from './firebase/types';
import useGameId from './hooks/useGameId';
import { GameOverScreen } from './pages/GameOverScreen';
import { GamingScreen } from './pages/GamingScreen';
import { HomeScreen } from './pages/HomeScreen';
import theme from './theme';
import { GameStatus, getGameStatus } from './util/helpers';

type Props = {};

const gameId = useGameId();
export const player = new Player();
export let gameEngine = new GameEngine({
  gameId,
  player,
});

const App: FunctionComponent<Props> = () => {
  const [gameStep, setGameStep] = useState(0);
  const [game, setGame] = useState<GameState>();
  //let { current: prevGame } = useRef<GameState>(game);

  useEffect(() => {
    gameEngine.listen(setGame);
    gameEngine.create();

    return gameEngine.stopListening;
  }, []);

  /*useEffect(() => {
    if (!game) {
    } else if (!prevGame) {
      prevGame = game;
    } else {
      const playerHasJoined =
        Object.keys(game.players).length !==
        Object.keys(prevGame.players).length;

      if (playerHasJoined) {
        gameEngine.start();
      }

      prevGame = game;
    }
  }, [game]);*/

  const joinGame = (gameId: string) => {
    player.reset();
    gameEngine.stopListening();

    gameEngine = new GameEngine({ player, gameId });
    gameEngine.listen(setGame);
    gameEngine.join();
    gameEngine.start();
  };

  const onConnectClick = (idFromJoinGameInput) => {
    joinGame(idFromJoinGameInput);
  };

  const forceEndGame = async () => {
    await gameEngine.end();
  };

  const renderScreens = () => {
    if (!game) return null;

    switch (getGameStatus(game)) {
      case GameStatus.PENDING:
        return (
          <HomeScreen
            onClick={(idFromJoinGameInput) =>
              onConnectClick(idFromJoinGameInput)
            }
            playerId={player.id}
            gameId={gameId}
          />
        );
      case GameStatus.STARTED:
        return (
          <GamingScreen
            game={game}
            //onClick={forceEndGame}
            playerId={player.id}
          />
        );
      case GameStatus.COMPLETED:
        return (
          <GameOverScreen
            playerId={player.id}
            onClick={window.location.reload}
          />
        );
      default:
        return null;
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header onClick={() => setGameStep(gameStep)} />
        {renderScreens()}
      </Container>
    </ThemeProvider>
  );
};

export default App;

const Container = styled.div`
  background: #222;
  height: 100vh;
`;
