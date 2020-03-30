import React from 'react';
import styled, { css } from 'styled-components';

export const Heading1 = ({
  bold,
  text,
  indicatorTextColor,
  uppercase,
  lightTextColor,
}) => {
  return (
    <Text
      bold={bold}
      indicatorTextColor={indicatorTextColor}
      uppercase={uppercase}
      lightTextColor={lightTextColor}
    >
      {text}
    </Text>
  );
};

const Text = styled.h1`
  color: ${(props) =>
    props.indicatorTextColor
      ? props.theme.color.indicator
      : props.theme.color.text};
  ${(props) =>
    props.textLight &&
    css`
      color: ${(props) => props.theme.color.placeholder};
    `};
  font-size: ${(props) => props.theme.fontSize.heading1};
  font-weight: ${(props) => (props.bold ? 'bold' : 'normal')};
  font-style: normal;
  line-height: 38px;
  margin: 0;
  text-transform: ${(props) => (props.uppercase ? 'uppercase' : '')};
`;
