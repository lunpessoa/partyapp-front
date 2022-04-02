import React from 'react';
import { 
  Container,
  Scroller,
  Header,
  PageBody,
  BackButton,
  NameText
} from './styles'
import { useNavigation} from '@react-navigation/native'

import Calendar from './calendar';

import BackArrow from '../../assets/back.svg'
import SvgAgenda from '../../assets/white_agenda.svg';

export default () => {
  const navigation = useNavigation();

  function handleBackButton(){
    navigation.goBack();
  }

  return (
    <Container>
      <Scroller>
        <Header>
          <BackButton onPress={handleBackButton}>
            <BackArrow />
          </BackButton>
          <NameText>
            Agendamento
          </NameText>
          <SvgAgenda fill={'#FFFFFF'}/>
        </Header>
        <PageBody>
          <Calendar />
        </PageBody>
      </Scroller>
    </Container>
  );
}