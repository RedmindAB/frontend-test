import React from 'react';
import styled, { css } from 'styled-components';

export const SingleDot = ({ selected, onClick, hit }) => {
  //TODO: GÖR SMÅ PLUPPAR!!!!
  return (
    <Wrapper>
      <Dot selected={selected} onClick={onClick} hit={hit} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 70px;
  width: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SmallDot = css`
  height: 20px;
  width: 20px;
  transition: width 0.4s, height 0.4s;
`;

const Dot = styled.div`
  background-color: ${(props) => props.theme.color.dotDefault};
  height: 60px;
  width: 60px;
  border-radius: 50%;
  cursor: pointer;
  transition: width 0.4s ease, height 0.4s ease;
  ${(props) =>
    props.selected &&
    css`
      height: 70px;
      width: 70px;
      background-color: ${(props) => props.theme.color.dotSelected};
      transition: background-color 0.4s ease;
    `};
  ${(props) =>
    props.missed &&
    css`
      ${SmallDot}
      background-color: ${(props) => props.theme.color.dotMissed};
    `};
  ${(props) =>
    props.hit &&
    css`
      ${SmallDot}
      background-color: ${(props) => props.theme.color.dotHit};
    `};
`;
/* TODO: kanske städa upp detta med small dots */
