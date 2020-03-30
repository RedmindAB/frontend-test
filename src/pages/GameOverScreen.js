import React from 'react';
import styled, { css } from 'styled-components';
import { Label } from '../components/shared/text/Label';
import { Heading1 } from '../components/shared/text/Heading1';
import { Heading3 } from '../components/shared/text/Heading3';
import { Button } from '../components/shared/components/Button';
import { BothPlayersNames } from '../components/game/BothPlayersNames';

export const GameOverScreen = ({ playerId, onClick }) => {
  return (
    <Container>
      <PlayersNamesContainer>
        <BothPlayersNames playerId={playerId} />
      </PlayersNamesContainer>
      <InformationContainer>
        {/* //TODO: bryt ut denna också!!!!  */}
        <Heading1 text='Game over' />
        <InformationInnerContainer>
          <Heading3 text='Winner' greyColor uppercase italic />
          <Space small />
          <Heading1 text='You' indicatorTextColor uppercase />
          <Space xsmall />
          <Label text='It took 3 attempts' />
          <Space small />
          <Button buttonText='Exit game' onClick={onClick} />
        </InformationInnerContainer>
      </InformationContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-top: 20px;
`;

const PlayersNamesContainer = styled.div`
  min-width: 40%;
  margin-left: 123px;
`;

const InformationContainer = styled.div`
  padding-top: 18px;
  width: 60%;
  padding-left: 30px;
`;

const InformationInnerContainer = styled.div`
  height: 218px;
  border-left: 1px solid #fff;
  margin: 20px 0 0 -30px;
  padding-left: 30px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const Space = styled.div`
  ${(props) =>
    props.xsmall &&
    css`
      height: 10px;
    `};
  ${(props) =>
    props.small &&
    css`
      height: 20px;
    `};
`;
