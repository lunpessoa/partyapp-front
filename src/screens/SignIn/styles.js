import React from 'react';
import styled from 'styled-components/native'
import { LinearGradient } from 'expo-linear-gradient';



export const Container = styled.View`
  flex: 1;
  align-items: center;
`;

export const ContainerLogo = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const BackgroundImage = styled.ImageBackground`
  width: 100%;
  height: 100%;
`;

export const BackgroundGradient = styled(LinearGradient)`
  flex: 1;
`;

export const LoadingIcon = styled.ActivityIndicator`
  margin-top: 50px;
`;

export const InputArea = styled.View`
  width: 100%;
  padding: 0px 40px;
  align-items: center;
`;
export const CustomButton = styled.TouchableOpacity`
  height: 45px;
  background-color: #124F99;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  width: 100%;
`;
export const CustomButtonText = styled.Text`
  font-size: 16px;
  color: #fff;
`;

export const SignMessageButton = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  margin-top: 30px;
`;

export const SignMessageText = styled.Text`
  font-size: 12px;
  color: #956700;
`;

export const SignMessageTextBold = styled.Text`
  font-size: 12px;
  font-weight: bold;
  color: #124F99;
  margin-left: 5px;
`;