import React from 'react';
import styled from 'styled-components';

export const Heading4 = ({ text }) => {
  return <Text>{text}</Text>;
};

const Text = styled.h4`
  color: ${(props) => props.theme.color.text};
  font-size: ${(props) => props.theme.fontSize.heading4};
  font-weight: bold;
  font-style: normal;
  line-height: 26px;
  margin: 0;
`;
