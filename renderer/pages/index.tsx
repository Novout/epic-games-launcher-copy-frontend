import * as React from 'react';
import { NextPage } from 'next';
import styled from '@emotion/styled';
import Login from '../components/Login';
import Link from 'next/link'

const IndexPage: NextPage = () => {
  return (
    <Login>
      <Sessao>
        <Titulo>INICIAR SESSÃO</Titulo>
        <Email type="email" placeholder="Endereço de e-mail"></Email>
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
      <Politica>Politica de Privacidade</Politica>
      <Inscrever>Não tem uma conta Epic Games?<Link href="/registrar"><InscreverColor> Inscrever-se</InscreverColor></Link>ou <InscreverColor> Entrar mais tarde</InscreverColor></Inscrever>
      <Espaco></Espaco>
    </Login >
  )
}

const Politica: any = styled.p`
  color: #EEEEEE;
  margin-top 12px;
`;

const Inscrever: any = styled.p`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  margin-top: 17px;
  margin-bottom: 2px;
  color: #777;
  font-style: bold;
`;

const InscreverColor: any = styled.span`
  color: #EEEEEE;
  font-style: bold;
  margin: 0px 5px;
  cursor: pointer
`;

const BotaoLogin: any = styled.div`
  padding: 15px 0px;
  width: 333px;
  color: #666;
  background: #111;
  text-align: center;
  margin-left: 20px;
  font-size: 0.8em;
  cursor: pointer;
`;

const LinhaAuxiliar: any = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  margin-left: 23px;
  margin-top: 3px;
`;

const Espaco: any = styled.div`
  padding: 40px 0px;
`;

const LembrarTexto: any = styled.p`
  margin-bottom: 25px;
  margin-left: 10px;
  color: #666;
  font-size: 0.9em;
  font-style: bold;
  cursor: pointer;
`;

const EsqueceuASenha: any = styled.p`
  margin-left: 110px;
  margin-bottom: 25px;
  color: #666;
  font-size: 0.9em;
  font-style: bold;
  cursor: pointer;
`;

const Email: any = styled.input`
  background-color: #333;
  padding: 16px;
  border: none;
  width: 305px;
  color: white;
  margin-bottom: 18px;
  margin-left: 20px;
`;

const Lembrar: any = styled.input`
  margin-top: 10px;
  margin-left: -4px;
  width: 20px;
  height: 20px;
  background: #111;
  color: #111;
  cursor: pointer;
`;

const Senha: any = styled.input`
  background-color: #333;
  padding: 16px;
  border: none;
  width: 305px;
  color: white;
  margin-left: 19px;
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
`;

export default IndexPage
