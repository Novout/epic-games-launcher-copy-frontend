import * as React from 'react';
//import Link from 'next/link';
import { NextPage } from 'next';
import Sidebar from '../components/Sidebar';
import styled from '@emotion/styled';

const Inicio: NextPage = () => {
  return (
    <StoreContainer>
      <SideContainer>
        <Sidebar />
      </SideContainer>
    </StoreContainer>
  )
}

export default Inicio

const StoreContainer: any = styled.main`
  display: grid;
  grid-template-rows: [general] auto;
  grid-template-columns: [sidebar] 28% [all] auto; 
`;

const SideContainer: any = styled.div`
  grid-area: auto / sidebar / auto / all;
`;