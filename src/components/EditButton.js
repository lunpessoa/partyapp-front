import React from 'react';
import styled from 'styled-components/native';

import SvgEdit from '../assets/edit.svg';

const EditButton = styled.TouchableOpacity`
  height: 45px;
  background-color: #FFFFFF;
  flex-direction: row;
  justify-content: space-between;
  border-radius: 10px;
  padding: 0px 15px;
  align-items: center;
  margin-top: 20px;
  elevation: 10;
`;

export const InfoText = styled.Text`
  font-size: 14px;
  color: ${props => props.textColor};
`;

export default ({placeholder, value, onPress}) => {
  return (
    <EditButton onPress={onPress}>
      {value ? (
        <InfoText textColor={'#222831'}>
          {value}
        </InfoText>
      ) : (
        <InfoText textColor={'#AAAAAA'}>
          {placeholder}
        </InfoText>
      )}
      <SvgEdit width="20" height="20" />
    </EditButton>
  );
}