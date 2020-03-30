import React from 'react';
import styled, { css } from 'styled-components';

export const Label = ({
  forLabel,
  text,
  disabled,
  small,
  indicatorTextColor,
  uppercase,
  lightTextColor,
  cursorPointer,
}) => {
  return (
    <Text
      htmlFor={forLabel}
      disabled={disabled}
      small={small}
      indicatorTextColor={indicatorTextColor}
      uppercase={uppercase}
      lightTextColor={lightTextColor}
      cursorPointer={cursorPointer}
    >
      {text}
    </Text>
  );
};

const Text = styled.label`
  color: ${(props) =>
    props.disabled ? props.theme.color.textInactive : props.theme.color.text};
  font-size: ${(props) =>
    props.small ? props.theme.fontSize.small : props.theme.fontSize.label};
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-style: normal;
  line-height: ${(props) => (props.small ? '22px' : '17px')};
  text-transform: ${(props) => (props.uppercase ? 'uppercase' : '')};
  cursor: ${(props) => (props.cursorPointer ? 'pointer' : 'default')};
  ${(props) =>
    props.indicatorTextColor &&
    css`
      color: ${(props) => props.theme.color.indicator};
    `};
  ${(props) =>
    props.lightTextColor &&
    css`
      color: ${(props) => props.theme.color.textLight};
    `};
`;
