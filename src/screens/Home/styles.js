import React from 'react';
import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

const { height, width } = Dimensions.get('screen');

export const ContainerSafeAreaView = styled.SafeAreaView`
  flex: 1;
`;

export const Header = styled.View`
  height: 160px;
  width: ${width}px;
  flex-direction: row;
  background-color: #124F99;
`;

export const Logo = styled.Image`
  top: 20px;
  left: 20px;
  resizeMode: contain;
  width: 100px;
`;

export const PageBody = styled.View`
  height: ${height - 160}px;
  background-color: #FAC000;
  border-top-right-radius: 50px;
  flex-direction: column;
  top: -50px;
  padding: 20px 15px;
`;