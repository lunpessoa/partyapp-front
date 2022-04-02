import React from 'react';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native'

import SvgBolo from '../../assets/bolo.svg';
import SvgAgenda from '../../assets/agenda.svg';
import SvgPrancheta from '../../assets/prancheta.svg';

export const Container= styled.View`
  flex-direction: row;
`;

const HomeButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  margin: 10px;
  background-color: #fff;
  border-radius: 10px;
  elevation: 10;
`;

const TextButton = styled.Text`
  color: #124F99;
  font-size: 12px;
  font-weight: bold;
  font-style: italic;
`;


export default () => {
  const navigation = useNavigation();

  function goTo(screenName){
    navigation.navigate(screenName);
  }

  return (
    <Container>
      <HomeButton>
        <SvgBolo width="37" height="35"/>
        <TextButton>PACOTES</TextButton>
      </HomeButton>
      <HomeButton>
        <SvgPrancheta width="37" height="35"/>
        <TextButton>ORÇAMENTOS</TextButton>
      </HomeButton>
      <HomeButton onPress={() => goTo('Schedule')}>
        <SvgAgenda width="37" height="35"/>
        <TextButton>AGENDAR</TextButton>
      </HomeButton>
    </Container>
  )
}