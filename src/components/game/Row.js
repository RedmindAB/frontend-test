import React from 'react';
import styled from 'styled-components';
import { SingleDot } from './SingleDot';

export const Row = ({ row, index, onClick, selectedDot }) => {
  return (
    <Container>
      {row.map((dot, i) => {
        return (
          <SingleDot
            rowIndex={index}
            dotIndex={i}
            onClick={() => onClick([index, i])}
            key={i}
            selected={selectedDot[0] === index && selectedDot[1] === i}
          />
        );
      })}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 240px;
  justify-content: space-between;
`;
