import React, { useState } from 'react';
import styled from 'styled-components';
import { Label } from '../shared/text/Label';
import { Row } from './Row';
import { Button } from '../shared/components/Button';
import { TurnTitle } from '../game/TurnTitle';

export const GamingBoard = ({
  board,
  gamingBoard,
  onClickFire,
  playerTurn,
  myBoard,
}) => {
  const [selectedDot, setSelectedDot] = useState([null, null]);

  //TODO: gör så man inte kan klicka på pluppisar när det inte är ens tur + att man inte kan klicka på sin egen board... TÄNK!!!
  const renderGamingBoard = () => {
    return board.map((row, i) => {
      return (
        <Row
          row={row}
          index={i}
          onClick={setSelectedDot}
          key={i}
          selectedDot={selectedDot}
        />
      );
    });
  };

  return (
    <Container myBoard={myBoard}>
      {gamingBoard ? (
        <TurnTitle playerTurn={playerTurn} />
      ) : (
        <>
          <Label text='your board' uppercase />
          <Space small />
        </>
      )}
      {/* TODO: fixa så att det blir skillnader mellan stora och små pluppar marriiiiii */}
      {renderGamingBoard()}
      {gamingBoard && playerTurn && (
        <>
          <Space />
          {/* TODO: fixa så att disabled är fram tills man trycker på en plupp */}
          <Button
            buttonText='Fire at dot'
            onClick={() => onClickFire(selectedDot)}
          />
        </>
      )}
    </Container>
  );
};

const Container = styled.div`
  color: red;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: ${(props) => (props.myBoard ? '120px' : '0px')};
  padding-left: ${(props) => (props.myBoard ? '40px' : '0px')};
  border-left: ${(props) => (props.myBoard ? '1px solid #fff' : 'none')};
`;

const Space = styled.div`
  height: ${(props) => (props.small ? '20px' : '55px')};
`;
