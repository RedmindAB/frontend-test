import React, { useState } from 'react';
import styled from 'styled-components';
import { Button } from '../shared/components/Button';
import { InputField } from '../shared/components/InputField';
import { Heading3 } from '../shared/text/Heading3';
import { Label } from '../shared/text/Label';

//TODO: Fixa validering!!!!

export const JoinGame = ({ onClick }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <Space small />
      <Container onSubmit={handleSubmit}>
        <Heading3 text='Join game' italic uppercase greyColor />
        <Space />
        <Label text='Enter game ID' />
        <Space small />
        <InputField
          placeholder='pY8UrF34'
          type='text'
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
        />
        <ButtonSpace />
        <Button
          buttonText='Connect'
          type='submit'
          onClick={() => onClick(inputValue)}
        />
      </Container>
    </>
  );
};

const Container = styled.form`
  width: 244px;
`;

const Space = styled.div`
  height: ${(props) => (props.small ? '10px' : '20px')};
`;

const ButtonSpace = styled.div`
  height: 12px;
`;
