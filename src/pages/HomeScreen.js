import React from 'react';
import styled from 'styled-components';
import { GreetingMessage } from '../components/home/GreetingMessage';
import { HostGame } from '../components/home/HostGame';
import { JoinGame } from '../components/home/JoinGame';
import { OrSeparator } from '../components/home/OrSeparator';

export const HomeScreen = ({ onClick, playerId, gameId }) => {
  return (
    <Container>
      <InnerContainer>
        <GreetingMessage playerId={playerId} marginLeft />
        <Row>
          <OrSeparator />
          <Column>
            <HostGame gameId={gameId} />
            <Space />
            <JoinGame onClick={onClick} />
          </Column>
        </Row>
      </InnerContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const InnerContainer = styled.div`
  border: 1px;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 40px;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;

const Space = styled.div`
  height: 55px;
`;
