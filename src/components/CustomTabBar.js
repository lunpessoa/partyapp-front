import React from 'react';
import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

const { width } = Dimensions.get('screen');

import HomeIcon from '../assets/home.svg'
import ProfileIcon from '../assets/profile.svg'
import CalendarIcon from '../assets/calendar.svg'

const Wrapper = styled.View`
  position: absolute;
  width: ${width}px;
  align-items: center;
  justify-content: center;
  bottom: 0px;
`;

const Container = styled.View`
  flex-direction: row;
  background-color: #fff;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  elevation: 10;
`;

const TabItem = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const TabItemCenter = styled.TouchableOpacity`
  width: 90px;
  height: 50px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: #124F99;
  bottom: 15px;
`;

export default ({state, navigation}) => {

  const goTo = (screenName) => {
    navigation.navigate(screenName);
  }

  return (
    <Wrapper>
      <Container>
        <TabItem onPress={() => goTo('Home')}>
          <HomeIcon width="24" height="24" />
        </TabItem>
        <TabItemCenter onPress={() => goTo('Appointments')}>
          <CalendarIcon width="24" height="24" />
        </TabItemCenter>
        <TabItem onPress={() => goTo('Profile')}>
          <ProfileIcon width="24" height="24" /> 
        </TabItem>
      </Container>
    </Wrapper>
  )
}