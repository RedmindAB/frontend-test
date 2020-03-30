import React from 'react';
import styled from 'styled-components';
import { Label } from '../shared/text/Label';

export const OrSeparator = () => {
  return (
    <Wrapper>
      <Line />
      <Padding>
        <Label text='OR' />
      </Padding>
      <Line />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Line = styled.div`
  border-left: 1px solid #fff;
  height: 202px;
`;

const Padding = styled.div`
  padding: 10px 0;
`;
