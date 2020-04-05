import * as React from 'react';
import Link from 'next/link';
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
        <Logo src={HomeLogo} alt="Home" width="30px"></Logo>
        <ContentHomeText>Início</ContentHomeText>
      </ContentHome>
      <ContentStore>
        <Logo src={HomeLogo} alt="Loja" width="30px"></Logo>
        <ContentStoreText>Loja</ContentStoreText>
      </ContentStore>
      <ContentLibrary>
        <Logo src={HomeLogo} alt="Biblioteca" width="30px"></Logo>
        <ContentLibraryText>Biblioteca</ContentLibraryText>
      </ContentLibrary>
      <ContentFriend>
        <Logo src={HomeLogo} alt="Amigos" width="30px"></Logo>
        <ContentFriendText>Amigos</ContentFriendText>
      </ContentFriend>
      <ContentUE4>
        <Logo src={HomeLogo} alt="Unreal Engine 4" width="30px"></Logo>
        <ContentUE4Text>Unreal Engine</ContentUE4Text>
      </ContentUE4>
      <ContentDownloads>
        <Logo src={HomeLogo} alt="Downloads" width="30px"></Logo>
        <ContentDownloadsText>Downloads</ContentDownloadsText>
      </ContentDownloads>
      <Link href="/configuracoes">
        <ContentConfiguracoes>
          <Logo src={HomeLogo} alt="Downloads" width="30px"></Logo>
          <ContentConfiguracoesText>Configuracoes</ContentConfiguracoesText>
        </ContentConfiguracoes>
      </Link>
      <ContentUser>
        <Logo src={HomeLogo} alt="Downloads" width="30px"></Logo>
        <ContentUserText>Perfil</ContentUserText>
      </ContentUser>
    </Side>
  );

const ContentUser: any = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-contet: flex-start;
  margin-bottom: 30px;
  cursor: pointer;
`;

const ContentUserText: any = styled.span`
  color: #FFF;
  margin-top: 7px;
  font-size: 0.9em;
  margin-left: 12px;
`;


const ContentConfiguracoes: any = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-contet: flex-start;
  margin-bottom: 30px;
  cursor: pointer;
`;

const ContentConfiguracoesText: any = styled.span`
  color: #FFF;
  margin-top: 7px;
  font-size: 0.9em;
  margin-left: 12px;
`;

const ContentUE4: any = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-contet: flex-start;
  margin-bottom: 242px;
  cursor: pointer;
`;

const ContentUE4Text: any = styled.span`
  color: #FFF;
  margin-top: 7px;
  font-size: 0.9em;
  margin-left: 12px;
`;

const ContentDownloads: any = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-contet: flex-start;
  margin-bottom: 30px;
  cursor: pointer;
`;

const ContentDownloadsText: any = styled.span`
  color: #FFF;
  margin-top: 7px;
  font-size: 0.9em;
  margin-left: 12px;
`;

const ContentFriend: any = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-contet: flex-start;
  margin-bottom: 30px;
  cursor: pointer;
`;

const ContentFriendText: any = styled.span`
  color: #FFF;
  margin-top: 7px;
  font-size: 0.9em;
  margin-left: 12px;
`;

const ContentLibrary: any = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-contet: flex-start;
  margin-bottom: 30px;
  cursor: pointer;
`;

const ContentLibraryText: any = styled.span`
  color: #FFF;
  margin-top: 7px;
  font-size: 0.9em;
  margin-left: 12px;
`;

const ContentStore: any = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-contet: flex-start;
  margin-bottom: 30px;
  cursor: pointer;
`;

const ContentStoreText: any = styled.span`
  color: #FFF;
  margin-top: 7px;
  font-size: 0.9em;
  margin-left: 12px;
`;

const ContentHome: any = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-contet: flex-start;
  margin-bottom: 30px;
  cursor: pointer;
`;

const ContentHomeText: any = styled.span`
  color: #FFF;
  margin-top: 7px;
  font-size: 0.9em;
  margin-left: 12px;
`;

const ContentSideText: any = styled.span`
  color: #FFF;
  margin-top: 10px;
  font-size: 0.9em;
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
  cursor: pointer;
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
