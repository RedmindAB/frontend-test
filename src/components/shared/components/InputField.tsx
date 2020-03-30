import React, { FunctionComponent, HTMLProps } from 'react';
import styled from 'styled-components';

type Props = HTMLProps<HTMLInputElement>;

export const InputField: FunctionComponent<Props> = (props) => {
  return <Input {...props} />;
};

const Input = styled.input`
  width: 244px;
  height: 46px;
  border-radius: 4px;
  outline: none;
  border: none;
  font-family: 'Montserrat', sans-serif;
  padding-left: 16px;
  font-style: normal;
  font-weight: 600;
  font-size: ${(props) => props.theme.fontSize.placeholder};
  line-height: 22px;
  box-shadow: 0px 4px 4px #00000040;
  color: #000;
  box-sizing: border-box;
  ::placeholder {
    color: ${(props) => props.theme.color.placeholder};
  }
`;
