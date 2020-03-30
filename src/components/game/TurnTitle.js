import React from 'react';
import styled from 'styled-components';
import { Heading1 } from '../shared/text/Heading1';

export const TurnTitle = ({ playerTurn }) => {
  return (
    <Container>
      <Heading1
        text={playerTurn ? 'your' : 'opponents'}
        uppercase
        bold
        indicatorTextColor={playerTurn ? true : false}
        lightTextColor={!playerTurn ? true : false}
      />
      <Space />
      <Heading1 text='turn' uppercase />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 60px;
`;

const Space = styled.div`
  width: 10px;
`;
