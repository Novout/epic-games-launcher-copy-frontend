import * as React from 'react';
import Link from 'next/link';
import { NextPage } from 'next';
import Login from '../components/Login';
import styled from '@emotion/styled';
import EngrenagemLogo from '../img/engrenagem.png';

const Loja: NextPage = () => {
  return (
    <Container>
      <Login>
        <Inscrever>INSCREVER-SE</Inscrever>
        <IdiomaSelect name="idioma">
          <IdiomaOption value="brazil">Brazil</IdiomaOption>
          <IdiomaOption value="states">United States</IdiomaOption>
          <IdiomaOption value="kingdom">United Kingdom</IdiomaOption>
          <IdiomaOption value="japan">Japan</IdiomaOption>
        </IdiomaSelect>
        <InputBox>
          <InputNome type="text" placeholder="Nome"></InputNome>
          <InputNome type="text" placeholder="Sobrenome"></InputNome>
        </InputBox>
        <Inputs type="text" placeholder="Nome de exibição"></Inputs>
        <Inputs type="email" placeholder="Endereço de e-mail"></Inputs>
        <Inputs type="password" placeholder="Senha"></Inputs>
        <Termos>
          <TermosInput type="checkbox" id="termos" name="termos"></TermosInput>
          <TermosLabel for="termos">Eu li e concordo com os <TermosLabelColor>termos de serviço</TermosLabelColor></TermosLabel>
        </Termos>
        <CriarConta>CRIAR CONTA</CriarConta>
        <PoliticaDePrivacidade>Política de Privacidade</PoliticaDePrivacidade>
        <EpicConta>Tem uma conta Epic Games?<Link href="/"><EpicContaSessao> Iniciar Sessão</EpicContaSessao></Link></EpicConta>
      </Login>
      <Link href="/configuracoes">
        <Configuracoes>
          <Engrenagem src={EngrenagemLogo} alt="Configurações" width="20px"></Engrenagem>
        </Configuracoes>
      </Link>
    </Container>
  )
};

const Container: any = styled.main`
  position: relative;
`;

const EpicConta: any = styled.p`
  margin-bottom: 70px;
  color: #777; 
`;

const Configuracoes: any = styled.div`
  position: absolute;
  top: 93%;
  right: 95%;
  color: white;
  cursor: pointer;
`;

const Engrenagem: any = styled.img`

`;

const EpicContaSessao: any = styled.span`
  color: white;
  cursor: pointer;
`;

const PoliticaDePrivacidade: any = styled.p`
  margin-top: 20px;
`;

const CriarConta: any = styled.p`
  text-align: center;
  background-color: #111;
  width: 90%;
  margin-left: 17px;
  margin-top: 25px;
  padding: 15px 0px;
  font-size: 0.8em;
  font-style: bold;
  color: #777;

`;

const TermosLabelColor: any = styled.span`
  color: white;
`;

const TermosLabel: any = styled.label`
  margin-left: 5px;
  color: #555;
`;

const TermosInput: any = styled.input`
`;

const Termos: any = styled.div`
  margin-top: 90px;
  margin-left: 17px;
  text-align: start;
`;

const Inputs: any = styled.input`
  padding: 15px;
  width: 82%;
  border: none;
  color: white;
  margin-left: 17px;
  margin-top: 15px;
  margin-right: 8px;
  background: #333;
`;

const InputNome: any = styled.input`
  padding: 15px;
  width: 35%;
  border: none;
  color: white;
  margin-left: 5px;
  margin-top: 15px;
  margin-right: 8px;
  background: #333;
`;

const InputBox: any = styled.div`
  
`;

const IdiomaOption: any = styled.option`
  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`;

const IdiomaSelect: any = styled.select`
  margin-top: 5px;
  background: #555;
  padding: 15px 20px;
  width: 90%;
  border: none;
  color: white;
  font-size: 0.9em;
  font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto
  ,"Helvetica Neue",Arial,"Noto Sans"
  ,sans-serif,"Apple Color Emoji","Segoe UI Emoji"
  ,"Segoe UI Symbol","Noto Color Emoji";
  overflow: hidden;   
  text-indent: 0.01px;
  text-overflow: "";
  select::-ms-expand {display: none;}
  -webkit-appearance: none;  /* Remove estilo padrão do Chrome */
  -moz-appearance: none;
  margin-left: 18px;
`;

const Inscrever: any = styled.p`
  margin-top: 20px;
  margin-right: 250px;
  font-size: 0.75em;
`;

export default Loja;
