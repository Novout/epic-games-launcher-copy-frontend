import * as React from 'react';
import Link from 'next/link'
import { NextPage } from 'next';
import styled from '@emotion/styled';

const Loja: NextPage = () => {
  return (
    <Container>
      <Link href="/">
        <Config>
          <Seta><SetaFont className="fas fa-less-than"></SetaFont></Seta>
          <ConfigLetra>CONFIGURAÇÕES</ConfigLetra>
        </Config>
      </Link>
      <ContainerConteudo>
        <Idioma>
          <IdiomaTexto>IDIOMA</IdiomaTexto>
          <IdiomaSelect name="idioma">
            <IdiomaOption value="english">English (United States)</IdiomaOption>
            <IdiomaOption value="english">português (Brasil)</IdiomaOption>
          </IdiomaSelect>
        </Idioma>
        <Executar>
          <ExecutarCheckbox type="checkbox" value="executar" checked></ExecutarCheckbox>
          <ExecutarTexto>Executar ao iniciar o computador</ExecutarTexto>
        </Executar>
        <Executar>
          <ExecutarCheckbox type="checkbox" value="executar"></ExecutarCheckbox>
          <ExecutarTexto>Ativar log de depuração</ExecutarTexto>
        </Executar>
        <Proxy>
          <ExecutarCheckbox type="checkbox" value="executar"></ExecutarCheckbox>
          <ExecutarTexto>Usar Proxy</ExecutarTexto>
        </Proxy>
        <Problemas>
          <ProblemasTexto>Verificar problemas</ProblemasTexto>
          <ProblemasTexto>Suporte</ProblemasTexto>
          <ProblemasTexto>Exibir logs</ProblemasTexto>
          <ProblemasTexto>Roteiro da loja Epic Games</ProblemasTexto>
        </Problemas>
        <Footer>
          <FooterTexto>Sobre a Epic Games</FooterTexto>
          <FooterTexto>Política de Privacidade</FooterTexto>
          <FooterTextoAux>Termos de Serviço</FooterTextoAux>
        </Footer>
      </ContainerConteudo>
      <Versao>10.5.7-8776870+++Portal+Release-Live</Versao>
    </Container>
  );
}

const SetaFont: any = styled.i`
`;

const Versao: any = styled.p`
  text-align: center;
  color: #777;
`;

const Footer: any = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  padding-top: 40px;
  grid-area: problemas / first / fim / first;
`;

const FooterTexto: any = styled.span`
  border-right:1.5px solid #555;
  padding: 0px 5px;
  color: #CCC;
  font-size: 1.1em;
  font-style: bold;
`;

const FooterTextoAux: any = styled.span`
  padding: 0px 5px;
  color: #CCC;
  font-size: 1.1em;
  font-style: bold;
`;

const Problemas: any = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: flex-start;
  margin: 30px 0px -10px 0px;
  padding-top: 30px;
  padding-bottom: 20px;
  grid-area: proxy / first / problemas / first;
  border-bottom:1.4px solid #555;
  border-top:1.4px solid #555;
`;

const ProblemasTexto: any = styled.span`
  margin-left: 5px;
  margin-bottom: 20px;
  color: #AAA;
`;

const Proxy: any = styled.div`
  margin: 30px 0px -10px 0px;
  padding-top: 40px;
  padding-bottom: -10px;
  grid-area: problemas / first / footer / first;
  border-top:1.4px solid #555;
`;

const ExecutarTexto: any = styled.label`
  margin-left: 5px;
  margin-top: 50px;
  color: #AAA;
`;

const ExecutarCheckbox: any = styled.input`
  background: none;
  background-size: cover;
  border: none;
  margin-bottom: 20px;
`;

const Executar: any = styled.div`
  margin-right: 20px;
  grid-area: idioma / first / proxy / first;
`;

const IdiomaOption: any = styled.option`
  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`;

const IdiomaSelect: any = styled.select`
  margin-top: 5px;
  background: #777;
  padding: 15px 20px;
  width: 50%;
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
`;

const IdiomaTexto: any = styled.p`
  color: #DDD;
  font-size: 0.95em;
`;

const Idioma: any = styled.div`
  grid-area: idioma / first / proxy / first;
  padding: 10px 0px;
  margin-bottom: 30px;
`;

const ContainerConteudo: any = styled.div`
  display: flex;
  flex-flow: column wrap;
  padding-left: 35px;
  grid-area: idioma / first / fim / first;
  overflow: auto;
`;


const ConfigLetra: any = styled.p`
  float: left;
  color: #999999;
  margin-left: 20px;
  margin-top: 21px;
  justify-self: start;
  font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto
  ,"Helvetica Neue",Arial,"Noto Sans"
  ,sans-serif,"Apple Color Emoji","Segoe UI Emoji"
  ,"Segoe UI Symbol","Noto Color Emoji";
  font-style: bold;

  &:hover {
    color: white;
  }
`;

const Seta: any = styled.p`
  float: left;
  border-right: 1.5px solid #555;
  margin-left: 20px;
  padding-right: 15px;
  color: #AAAAAA;
  padding-top: 5px;
  justify-self: start;

  &:hover {
    color: white;
  }
`;

const Config: any = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;

  grid-area: config / first / idioma / first;

  border-bottom:1.4px solid #555;

  padding-top: 7px;

  cursor: pointer;

  &:hover {
      background-color: rgba(255, 255, 255, 0.1);
  }
`;

const Container: any = styled.main`
  display: grid;
  grid-template-columns: [first] auto;
  grid-template-rows: [config] 75px [idioma] 200px [proxy] 210px [problemas] 155px [footer] 50px [fim];
  background: #222;
`;

export default Loja;