import React, { useState } from 'react';
import styled from 'styled-components';
import { Button } from '../shared/components/Button';
import { InputField } from '../shared/components/InputField';
import { Heading3 } from '../shared/text/Heading3';
import { Label } from '../shared/text/Label';

export const JoinGame = ({ joinGame }) => {
  const [gameId, setGameId] = useState('');

  const onChangeText = ({
    currentTarget: { value },
  }: React.FormEvent<HTMLInputElement>) => {
    console.log('setValue', value);
    setGameId(value);
  };

  const onClickJoinGame = () => joinGame(gameId);

  return (
    <>
      <Space small />
      <Container>
        <Heading3 text='Join game' italic uppercase greyColor />
        <Space />
        //@ts-ignore
        <Label text='Enter game ID' />
        <Space small />
        <InputField
          value={gameId}
          placeholder='pY8UrF34'
          onChange={onChangeText}
        />
        <ButtonSpace />
        //@ts-ignore
        <Button buttonText='Connect' onClick={onClickJoinGame} />
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 244px;
`;

const Space = styled.div`
  height: ${(props) => (props.small ? '10px' : '20px')};
`;

const ButtonSpace = styled.div`
  height: 12px;
`;
