import React, { useState } from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';
import useFetch from '../hooks/useFetch'

import API from '../Api'
import AsyncStorage from '@react-native-async-storage/async-storage';

import CustomButton from './Button';

export const Container = styled.View`
  margin-top: 20px;
`;

const InputArea = styled.View`
  width: ${props => props.width || '100%'};
  height: 45px;
  background-color: #fff;
  flex-direction: row;
  border-radius: 10px;
  padding: 10px;
  align-items: center;
  margin-bottom: 20px;
  elevation: 10;
`;

const Input = styled.TextInput`
  flex: 1;
  font-size: 14px;
  color: #222831;
  margin-left: 10px;
`;

export default ({cep, rua, bairro, numero, complemento, cidade, nomeEndereco, setVisible}) => {
  const [confirmValue, setConfirmValue] = useState({
    cep,
    rua,
    bairro,
    numero,
    complemento,
    cidade,
    nomeEndereco
  })

  const {loading, error, request} = useFetch();

  async function handleAlterAddress(){

    const token = await AsyncStorage.getItem('token');
    const {url, options} = API.PUT_ADDRESS(confirmValue, token);
    const {response, json} = await request(url, options);
    
    if(response.ok){
      alert(json.message);
      setVisible(false);
    }

    if(error){
      alert(error)
    }
  }

  return (
    <Container>
      <InputArea>
        <Input 
          placeholder={'CEP'}
          value={confirmValue.cep}
          onChangeText={(text) => setConfirmValue({...confirmValue, cep: text})}
        /> 
      </InputArea>
      <InputArea>
        <Input 
          placeholder={'Rua'}
          value={confirmValue.rua}
          onChangeText={(text) => setConfirmValue({...confirmValue, rua: text})}
        /> 
      </InputArea>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <InputArea width={'50%'}>
          <Input 
            placeholder={'Bairro'}
            value={confirmValue.bairro}
            onChangeText={(text) => setConfirmValue({...confirmValue, bairro: text})}
          /> 
        </InputArea>
        <InputArea width={'45%'}>
          <Input 
            placeholder={'Número'}
            value={confirmValue.numero}
            onChangeText={(text) => setConfirmValue({...confirmValue, numero: text})}
          /> 
        </InputArea>
      </View>
      <InputArea>
        <Input 
          placeholder={'Complemento'}
          value={confirmValue.complemento}
          onChangeText={(text) => setConfirmValue({...confirmValue, complemento: text})}
        /> 
      </InputArea>
      <InputArea>
        <Input 
          placeholder={'Cidade'}
          value={confirmValue.cidade}
          onChangeText={(text) => setConfirmValue({...confirmValue, cidade: text})}
        /> 
      </InputArea>
      <InputArea>
        <Input 
          placeholder={'Nome Endereço'}
          value={confirmValue.nomeEndereco}
          onChangeText={(text) => setConfirmValue({...confirmValue, nomeEndereco: text})}
        /> 
      </InputArea>
      <CustomButton textButton={'Salvar'} onPress={handleAlterAddress}/>
    </Container>
  );
}