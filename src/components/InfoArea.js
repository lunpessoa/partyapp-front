import React, {useState} from 'react';
import styled from 'styled-components/native'

export const InfoText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #222831;
`;

export const InfoArea = styled.View`
  height: 50px;
  background-color: #FFFFFF;
  flex-direction: row;
  border-radius: 10px;
  padding: 20px;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  elevation: 5;
`;

export default ({SvgIcon, StyledText, Text}) => {
  return (
    <InfoArea>
      {StyledText ? (
        StyledText
      ) : (
        <InfoText>
          {Text}
        </InfoText>
      )}
      <SvgIcon />
    </InfoArea>
  );
}