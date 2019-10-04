import * as React from 'react';
//import Link from 'next/link';
//import Head from 'next/head';
import styled from '@emotion/styled';
import EpicGamesLogo from '../img/epiclogo.png';
import HomeLogo from '../img/home.png';

const Sidebar: React.FunctionComponent = ({
}) => (
    <Side>
      <ContentSide>
        <Logo src={EpicGamesLogo} alt="Epic Logo" width="35px"></Logo>
        <ContentSideText>Epic Games</ContentSideText>
      </ContentSide>
      <ContentHome>
        <Logo src={HomeLogo} alt="Epic Logo" width="30px"></Logo>
        <ContentHomeText>Início</ContentHomeText>
      </ContentHome>
    </Side>
  );

const ContentHome: any = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-contet: flex-start;
  margin-bottom: 30px;
`;

const ContentHomeText: any = styled.span`
  color: #FFF;
  margin-top: 7px;
  font-size: 0.95em;
  margin-left: 12px;
`;

const ContentSideText: any = styled.span`
  color: #FFF;
  margin-top: 10px;
  font-size: 0.95em;
`;

const Logo: any = styled.img`
  margin-right: 16px;
  padding-bottom: 5px;
`;

const ContentSide: any = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-contet: flex-start;
  margin-bottom: 30px;
`;

const Side = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: flex-start;
  padding-left: 30px;
  padding-top: 60px;
  background-color: #111;
  height: auto;
  width: auto;
`;

export default Sidebar
