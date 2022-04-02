import React from 'react';
import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

const { height, width } = Dimensions.get('screen');

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Header = styled.View`
  height: 200px;
  flex-direction: row;
  justify-content: center;
  background-color: #124F99;
`;

export const ContainerInfo = styled.View`
  left: 40px;
  top: 15px;
  justify-content: center;
`;

export const ContainerAddress = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 3px;
`;

export const NameText = styled.Text`
  color: #FFFFFF;
  font-weight: bold;
`;

export const LocalizationText = styled.Text`
  color: #FFFFFF;
  font-size: 12px;
  margin-left: 10px;
`;

export const PageBody = styled.View`
  flex: 1;
  flex-direction: column;
  margin-top: -50px;
  background-color: #FAC000;
  border-top-left-radius: 50px;
  padding: 20px 30px;
`;

export const ProfileImage = styled.Image`
  width: 150px;
  height: 150px;
  resize-mode: contain;
  width: 130px;
  height: 130px;
  margin-top: -80px;
`;

export const TitleAppointment = styled.View`
  width: 100%;
  height: 35px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: #124F99;
  border-radius: 10px;
  margin-top: 20px;
  padding: 20px;
  elevation: 10;
`;

export const TextAppointment = styled.Text`
  color: #FFF;
  font-weight: bold;
  font-size: 14px;
`;
