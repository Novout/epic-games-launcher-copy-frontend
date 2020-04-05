import * as React from 'react';
import { NextPage } from 'next';
import styled from '@emotion/styled';
import Login from '../components/Login';
import Link from 'next/link';

const IndexPage: NextPage = () => {
  return (
    <Login>
      <Sessao>
        <Titulo>INICIAR SESSÃO</Titulo>
        <Email type="email" placeholder="Nome de usuário ou e-mail">
        </Email>
        <Senha type="password" placeholder="Senha"></Senha>
        <LinhaAuxiliar>
          <Lembrar type="checkbox"></Lembrar>
          <LembrarTexto>Lembre de mim</LembrarTexto>
          <EsqueceuASenha>Esqueceu a senha</EsqueceuASenha>
        </LinhaAuxiliar>
      </Sessao>
      <Link href="/inicio">
        <BotaoLogin>FAZER LOGIN AGORA</BotaoLogin>
      </Link>
      <EspacoCurto />
      <Politica>Politica de Privacidade</Politica>
      <Inscrever>Não tem uma conta Epic Games?
        <Link href="/registrar">
          <InscreverColor> Inscrever-se </InscreverColor>
        </Link>
        ou 
        <InscreverColor> Entrar mais tarde</InscreverColor>
      </Inscrever>
      <Espaco />
    </Login >
  )
}

const Politica: any = styled.p`
  color: #EEEEEE;
  margin-top: 30px;
  font-size: 0.85em;
`;

const Inscrever: any = styled.p`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  margin-top: 28px;
  margin-bottom: 2px;
  color: #777;
  font-style: bold;
  font-size: 0.9em;
`;

const InscreverColor: any = styled.span`
  color: #EEEEEE;
  font-style: bold;
  margin: 0px 5px;
  cursor: pointer;
`;

const BotaoLogin: any = styled.div`
  padding: 20px 0px;
  width: 333px;
  color: #666;
  background: #181818;
  text-align: center;
  margin-left: 20px;
  margin-top: 5px;
  font-size: 0.8em;
  cursor: pointer;
`;

const LinhaAuxiliar: any = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  margin-left: 16px;
  margin-top: 8px;
  width: 95%;
  font-size: 0.85em;
`;

const Espaco: any = styled.div`
  padding: 25px 0px;
`;

const EspacoCurto: any = styled.div`
  padding-top: 10px;
`

const LembrarTexto: any = styled.p`
  margin-left: 10px;
  color: #666;
  font-size: 0.9em;
  font-style: bold;
  cursor: pointer;
`;

const EsqueceuASenha: any = styled.p`
  margin-left: 110px;
  color: #666;
  font-size: 0.9em;
  font-style: bold;
  cursor: pointer;
`;

const Email: any = styled.input`
  font-family: 'BrutalType', 'Roboto', 'sans-serif';
  background-color: #333;
  padding: 16px;
  border: none;
  width: 305px;
  color: white;
  margin-bottom: 18px;
  margin-left: 20px;
  outline: none;
`;

const Senha: any = styled.input`
  font-family: 'BrutalType', 'Roboto', 'sans-serif';
  background-color: #333;
  padding: 16px;
  border: none;
  width: 305px;
  color: white;
  margin-left: 20px;
  outline: none;
`;

const Lembrar: any = styled.input`
  width: 20px;
  height: 20px;
  background: #111;
  color: #111;
  cursor: pointer;
`;

const Sessao: any = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  margin: 15px 0px;
  height: auto;
  width: auto;
`;

const Titulo: any = styled.p`
  color: white;
  font-size: 0.7em;
  font-style: bold;
  text-align: left;
  margin-left: 20px;
  transform: translateY(-10px);
  margin-bottom: 5px;
`;

export default IndexPage;
