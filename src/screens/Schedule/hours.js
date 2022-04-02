import React from 'react';
import styled from 'styled-components/native';

export const CustomButton = styled.TouchableOpacity`
  height: 40px;
  background-color: #FFFFFF;
  border-radius: 10px;
  flex-basis: 30%;
  justify-content: space-around;
  align-items: center;
  margin-top: 15px;
  elevation: 10;
`;

export const CustomButtonText = styled.Text`
  font-size: 16px;
  color: #222831;
`;

export default ({id, textHour, setVisible, setHour, setHourId}) => {

  function handelHour(){
    setVisible(true);
    setHour(textHour);
    setHourId(id);
  }

  return (
    <CustomButton onPress={handelHour}>
      <CustomButtonText>
        {textHour}
      </CustomButtonText>
    </CustomButton>
  );
}