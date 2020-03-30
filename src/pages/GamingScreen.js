import React, { useEffect } from 'react';
import styled from 'styled-components';
import { gameEngine } from '../App';
import { getNamedBoards, isPlayersTurn } from '../util/helpers';
import { BothPlayersNames } from '../components/game/BothPlayersNames';
import { GamingBoard } from '../components/game/GamingBoard';

export const GamingScreen = ({ playerId, game, game: {} }) => {
  useEffect(() => {
    localStorage.removeItem('GAME_ID');
  }, []);

  const playerTurn = isPlayersTurn(game);
  const { player: playerBoard, opponent: opponentBoard } = getNamedBoards(game);

  const onClickFire = (selectedDot) => {
    // Y, X position (row, column)
    gameEngine.fireAtDot(selectedDot);
    gameEngine.endTurn();
  };

  return (
    <CenterContainer>
      <PlayersNamesContainer>
        <BothPlayersNames yourId={`Player-${playerId}`} />
      </PlayersNamesContainer>
      <GameContainer>
        <GamingBoard
          board={opponentBoard}
          onClickFire={onClickFire}
          gamingBoard
          playerTurn={playerTurn}
        />
        <Space />
        <GamingBoard board={playerBoard} myBoard />
      </GameContainer>
    </CenterContainer>
  );
};

const CenterContainer = styled.div`
  display: flex;
  justify-content: center;
  height: calc(100vh - 140px);
  width: 100%;
  margin-top: 20px;
`;

const PlayersNamesContainer = styled.div`
  min-width: 40%;
  margin-left: 123px;
  border: 1px solid green;
`;

const GameContainer = styled.div`
  width: 60%;
  border: 1px solid red;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;

const Space = styled.div`
  width: 92px;
`;
