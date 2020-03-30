import React from 'react';
import styled from 'styled-components';
import { Label } from '../shared/text/Label';
import { Heading1 } from '../shared/text/Heading1';

//TODO: fixa in opponentpersonens namn här!!

export const BothPlayersNames = ({ yourId }) => {
  return (
    <>
      <Label text='You' indicatorTextColor uppercase />
      <Heading1 text={yourId} />
      <Space />
      <Label text='Opponent' uppercase lightTextColor />
      <Heading1 text='' />
    </>
  );
};

const Space = styled.div`
  height: 20px;
`;
