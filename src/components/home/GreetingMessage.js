import React from 'react';
import styled from 'styled-components';
import { Heading1 } from '../shared/text/Heading1';

export const GreetingMessage = ({ playerId, marginLeft }) => {
  return (
    <Wrapper marginLeft={marginLeft}>
      <Heading1 text='Hello,' />
      <Heading1 text={`Player-${playerId}`} bold />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-left: ${(props) => (props.marginLeft ? '50px' : '0px')};
`;
