import React from 'react';
import styled from 'styled-components';

export const Paragraph = ({ text }) => {
  return <Text>{text}</Text>;
};

const Text = styled.p`
  color: ${(props) => props.theme.color.text};
  font-size: ${(props) => props.theme.fontSize.paragraph};
  font-family: 'Montserrat', sans-serif;
  font-weight: normal;
  font-style: normal;
  line-height: 24px;
`;
