import React from 'react';
import { ContainerSafeAreaView, Header, PageBody, Logo } from './styles'

import logo from '../../assets/logo.png'; 

import HomeButtons from './homeButtons';
import ComboButtons from './comboButtons';

export default () => {
  return (
    <ContainerSafeAreaView>
      <Header>
        <Logo source={logo}/>
      </Header>
      <PageBody>
        <HomeButtons />
        <ComboButtons />
      </PageBody>
    </ContainerSafeAreaView>
  );
}