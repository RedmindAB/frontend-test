import React from 'react';
import styled from 'styled-components';
import { Heading3 } from '../shared/text/Heading3';
import { Label } from '../shared/text/Label';
import { CopyGameIdClipboard } from './CopyGameIdClipboard';
import { Meta } from '../shared/text/Meta';

export const HostGame = ({ gameId }) => {
  return (
    <>
      <Space small />
      <Container>
        <Heading3 text='Host game' italic uppercase greyColor />
        <Space />
        <Label text='Share your code' />
        <Space small />
        <CopyGameIdClipboard gameId={gameId} />
        <Space small />
        <Meta text='Game will start automatically when someone connects' />
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
