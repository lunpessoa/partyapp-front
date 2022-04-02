import React from 'react';
import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

const { height, width } = Dimensions.get('screen');

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #FFFFFF;
`;

export const Scroller = styled.ScrollView`
  flex: 1;
`;

export const Header = styled.View`
  width: ${width}px;
  height: 125px;
  background-color: #124F99;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const NameText = styled.Text`
  font-size: 20px;
  color: #FFFFFF;
`;

export const BackButton = styled.TouchableOpacity`
  z-index: 9;
`;

export const PageBody = styled.View`
  min-height: ${height - 40}px;
  background-color: #FAC000;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  margin-top: -30px;
  padding: 20px 30px;
`;


