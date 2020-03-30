import React from 'react';
import styled from 'styled-components';

export const Meta = ({ text }) => {
  return <Text>{text}</Text>;
};

const Text = styled.p`
  color: ${(props) => props.theme.color.textLight};
  font-size: ${(props) => props.theme.fontSize.meta};
  font-family: 'Montserrat', sans-serif;
  font-weight: 300;
  font-style: normal;
  line-height: 20px;
  margin: 0;
`;
