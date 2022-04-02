import React from 'react';
import styled from 'styled-components/native';

export const CustomButton = styled.TouchableOpacity`
  height: 45px;
  background-color: #124F99;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  top: 30px;
  elevation: 10;
`;

export const CustomButtonText = styled.Text`
  font-size: 16px;
  color: #fff;
`;

export default ({textButton, onPress}) => {
  return (
    <CustomButton onPress={onPress}>
      <CustomButtonText>
        {textButton}
      </CustomButtonText>
    </CustomButton>
  );
}