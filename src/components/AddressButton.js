import React, {useState} from 'react';
import styled from 'styled-components/native';

import SvgAdress from '../assets/address.svg'
import SvgNoSaveAdress from '../assets/nosaveaddress.svg'
import SvgSaveAdress from '../assets/saveaddress.svg'

export const AddressButton = styled.TouchableOpacity`
  width: 100%;
  height: 125px;
  flex-direction: row;
  align-items: center;
  margin-top: 30px;
  background: #fff;
  border-radius: 10px;
  elevation: 10;
`;

export const IconNoSaveAdress = styled(SvgNoSaveAdress)`
  margin: 20px;
  align-self: flex-start;
`;

export const IconSaveAdress = styled(SvgSaveAdress)`
  margin: 20px;
  align-self: flex-start;
`;

export const IconAdress = styled(SvgAdress)`
  margin: 20px;
`;

export const ContainerInfo = styled.View`
  flex: 1;
`;

export const AddressBold = styled.Text`
  font-size: 12px;
  font-weight: bold;
`;

export const AddressMore = styled.Text`
  font-size: 10px;
  font-weight: 100;
  margin-top: 15px;
  color: #AAAAAA;
`;

export const AddressName = styled.Text`
  font-size: 10px;
  font-weight: 100;
  font-style: italic;
  color: #AAAAAA;
`;

export default ({onPress, rua, numero, bairro, cidade, nomeEndereco}) => {

  return (
    <AddressButton onPress={onPress}>
      <IconAdress/>
      <ContainerInfo>
        <AddressBold>
          {`${rua ? rua : 'Endereço'}, ${numero ? numero : 'Número'}`} 
        </AddressBold>
        <AddressMore>
        {`${bairro ? bairro : 'Bairro'}, ${cidade ? cidade : 'Cidade'}`} - SP
        </AddressMore>
        <AddressName>
          {nomeEndereco ? nomeEndereco : 'Nome Endereço'}
        </AddressName>
      </ContainerInfo>
      {rua && numero && bairro && cidade && nomeEndereco ? (
        <IconSaveAdress />
      ) : (
        <IconNoSaveAdress />
      )}
    </AddressButton>
  );
}