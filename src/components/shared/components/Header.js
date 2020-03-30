import React from 'react';
import styled from 'styled-components';

const logo = require('../../../assets/battledots-logo.svg');

export const Header = ({ onClick }) => {
  return (
    <Container>
      <Logo src={logo} alt='battledots logo' onClick={onClick} />
      <Text>Battledots</Text>
    </Container>
  );
};

const Container = styled.div`
  height: 120px;
  background-color: ${(props) => props.theme.color.background};
  display: flex;
  align-items: center;
  flex-direction: row;
  padding-left: 40px;
`;

const Logo = styled.img`
  height: 63px;
  cursor: pointer;
`;

const Text = styled.p`
  color: ${(props) => props.theme.color.text};
  font-size: 25px;
  font-weight: 900;
  line-height: 29px;
  padding-left: 13px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-style: normal;
`;
