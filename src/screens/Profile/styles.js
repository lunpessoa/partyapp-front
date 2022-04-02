import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Header = styled.View`
  height: 180px;
  flex-direction: row;
  justify-content: center;
  background-color: #124F99;
`;

export const ContainerInfo = styled.View`
  left: 70px;
  top: 5px;
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

export const ProfileImageButton = styled.TouchableOpacity`
  width: 150px;
  height: 150px;
  margin-top: -80px;
  border-radius: 10px;
  overflow: hidden;
`;

export const ProfileImage = styled.ImageBackground`
  resize-mode: contain;
  width: 100%;
  height: 100%;
`;
