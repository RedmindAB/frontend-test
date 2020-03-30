import React from 'react';
import styled from 'styled-components';
import { Label } from '../text/Label';

export const Button = ({ buttonText, disabled, small, onClick, type }) => {
  return (
    <Wrapper disabled={disabled} small={small} onClick={onClick}>
      <Label
        text={buttonText}
        disabled={disabled}
        small={small}
        cursorPointer
        type={type}
        onClick={onClick}
      />
    </Wrapper>
  );
};

const Wrapper = styled.button`
  display: block;
  background-color: ${(props) =>
    props.disabled
      ? props.theme.color.backgroundVariant
      : props.theme.color.indicator};
  width: ${(props) => (props.small ? '144px' : '244px')};
  height: ${(props) => (props.small ? '31px' : '46px')};
  border: none;
  border-radius: 4px;
  box-shadow: 0px 4px 4px #00000040;
  cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
  &:focus {
    outline: none;
  }
`;
