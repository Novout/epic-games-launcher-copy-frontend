import * as React from 'react';
import Head from 'next/head';
import Link from 'next/link'
import styled from '@emotion/styled';
import EpicGamesLogo from '../img/epiclogo.png';
import FacebookLogo from '../img/facebook.png';
import GoogleLogo from '../img/google.png';
import PlaystationLogo from '../img/playstation.png';
import XboxLogo from '../img/xbox.png';
import NintendoLogo from '../img/nintendo.png';
import EngrenagemLogo from '../img/engrenagem.png';

const Login: React.FunctionComponent = ({
  children
}) => (
    <Container>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <ContainerLogin>
        <Header>
          <Logo src={EpicGamesLogo} alt="Epic Logo" width="45px"></Logo>
        </Header>
        <SocialContainer>
          <Social>
            <FacebookContainer>
              <SocialLogo src={FacebookLogo} alt="Facebook" width="18px"></SocialLogo>
            </FacebookContainer>
          </Social>
          <Social>
            <GoogleContainer>
              <SocialLogo src={GoogleLogo} alt="Google" width="18px"></SocialLogo>
            </GoogleContainer>
          </Social>
          <Social>
            <PlaystationContainer>
              <LogoPlaystation src={PlaystationLogo} alt="Playstation" width="61px"></LogoPlaystation>
            </PlaystationContainer>
          </Social>
          <Social>
            <XboxContainer>
              <SocialLogo src={XboxLogo} alt="Xbox" width="20px"></SocialLogo>
            </XboxContainer>
          </Social>
          <Social>
            <NintendoContainer>
              <SocialLogo src={NintendoLogo} alt="Nintendo" width="20px"></SocialLogo>
            </NintendoContainer>
          </Social>
        </SocialContainer>
        {children}
      </ContainerLogin>
      <Link href="/configuracoes">
        <Configuracoes>
          <Engrenagem src={EngrenagemLogo} alt="Configurações" width="20px"></Engrenagem>
        </Configuracoes>
      </Link>
    </Container>
  );

const Configuracoes: any = styled.div`
  position: absolute;
  top: 95%;
  left: 5%;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  color: white;
  cursor: pointer;
  align-items: left !important;
`;

const Engrenagem: any = styled.img`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: flex-end;
`;

const Header: any = styled.div`
  text-align: center;
`;

const Logo: any = styled.img`
  margin-top: 60px;
  padding-bottom: 10px;
`;

const FacebookContainer: any = styled.div`
  text-align: center;
  padding: 14px;
  background-color: #3b5998;
`;

const GoogleContainer: any = styled.div`
  text-align: center;
  padding: 14px;
  background-color: white;
`;

const PlaystationContainer: any = styled.div`
  text-align: center;
  background-color: #1fc0ff;
  padding-right:20px;
`;

const XboxContainer: any = styled.div`
  text-align: center;
  padding: 14px;
  background-color: #006e1d;
`;

const NintendoContainer: any = styled.div`
  text-align: center;
  padding: 14px;
  background-color: white;
`;

const SocialLogo: any = styled.img`
  color: white;
`;

const LogoPlaystation: any = styled.img`
  margin-right:50px;
`;

const Social: any = styled.div`
  height:50px;
  width:50px;
  margin: 0px 10px;
  background-color: white;
`;

const SocialContainer: any = styled.div`
  display:flex;
  flex-flow:row wrap;
  justify-content: flex-start;
  padding:10px;
  width:auto;
  height:auto;
`;

const Container: any = styled.main`
  padding: 15% 0 10% 0;
  background-color: #0d0d0d;
  min-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
  width: 100%;
`;

const ContainerLogin: any = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: flex-start;
  background-color: #222;
  text-align: center;
  height: auto;
  width: 370px;
  color:white;
  padding: 0px 5%;
`;

export default Login
