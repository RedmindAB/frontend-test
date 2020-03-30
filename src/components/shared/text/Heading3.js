import React from 'react';
import styled from 'styled-components';

export const Heading3 = ({ text, italic, uppercase, greyColor }) => {
  return (
    <Text italic={italic} uppercase={uppercase} greyColor={greyColor}>
      {text}
    </Text>
  );
};

const Text = styled.h3`
  color: ${(props) =>
    props.greyColor ? props.theme.color.textInactive : props.theme.color.text};
  font-size: ${(props) => props.theme.fontSize.heading3};
  font-weight: bold;
  font-style: ${(props) => (props.italic ? 'italic' : 'normal')};
  line-height: 28px;
  text-transform: ${(props) => (props.uppercase ? 'uppercase' : '')};
  margin: 0;
`;
