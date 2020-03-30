import React from 'react';
import styled from 'styled-components';
import useClipboard from 'react-use-clipboard';

const copyIcon = require('../../assets/copy.svg');

export const CopyGameIdClipboard = ({ gameId }) => {
  const [isCopied, setCopied] = useClipboard(gameId, {
    successDuration: 1000,
  });

  return (
    <Wrapper>
      <GameId>{gameId}</GameId>
      <CopyButton onClick={() => setCopied(isCopied)}>
        <CopyIcon src={copyIcon} />
      </CopyButton>
      {isCopied ? <Message>Copied succesfully!</Message> : null}
    </Wrapper>
  );
};

const Message = styled.p`
  color: white;
  position: absolute;
  right: -160px;
  top: 0;
  color: ${(props) => props.theme.color.textLight};
  font-style: italic;
`;

const Wrapper = styled.div`
  background: #fff;
  width: 244px;
  height: 46px;
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  padding-left: 16px;
  box-sizing: border-box;
  border-radius: 4px;
  box-shadow: 0px 4px 4px #00000040;
  position: relative;
`;

const GameId = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 18px;
  line-height: 22px;
  color: #000;
`;

const CopyButton = styled.button`
  position: absolute;
  right: 0;
  width: 47px;
  height: 46px;
  border: none;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  background: ${(props) => props.theme.color.indicator};
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;

const CopyIcon = styled.img`
  height: 24px;
  width: 24px;
`;
