import React, {useState} from 'react';
import styled from 'styled-components/native';
import useFetch from '../../hooks/useFetch'

import AsyncStorage from '@react-native-async-storage/async-storage';
import Api from '../../Api';

import CustomButton from '../../components/Button';
import EditButton from '../../components/EditButton'
import CustomModal from '../../components/Modal';

const Container = styled.View`
`;

const InputView = styled.View`
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

const Input = styled.TextInput`
  flex: 1;
  font-size: 14px;
  color: #222831;
`;

export default ({nome, email, celular, cpf, visible, setVisible}) => {
  const [value, setValue] = useState({
    type: null,
    value: null,
    placeholder: null
  });
  const {loading, error, request} = useFetch();

  function handleEdit(type ,value, placeholder){
    setValue({
      type,
      value,
      placeholder
    })
    setVisible(true);
  }

  async function handleUpdatePerfil(){
    const token = await AsyncStorage.getItem('token');
    const {url, options} = Api.PUT_PERFIL_INFO(value.type, {info: value.value}, token);
    const {response, json} = await request(url, options);

    if(response.ok){
      alert(json.message)
      setVisible(false);
    }
      
    if(error)
      alert(error)
  }

  return (
    <Container>
      <EditButton
        placeholder={'Nome Sobrenome'} 
        value={nome}
        onPress={() => handleEdit('nome', nome, 'Nome Sobrenome')}
      /> 
      <EditButton 
        placeholder={'Email'} 
        value={email}
        onPress={() => handleEdit('email' ,email, 'Email')}
      /> 
      <EditButton 
        placeholder={'Celular'}
        value={celular}
        onPress={() => handleEdit('celular', celular, 'Celular')}
      /> 
      <EditButton 
        placeholder={'CPF'} 
        value={cpf}
        onPress={() => handleEdit('cpf', cpf, 'CPF')}
      /> 

      <CustomModal visible={visible} setVisible={setVisible}>
        <InputView>
          <Input
            placeholder={value.placeholder}
            value={value.value}
            autoCorrect={false}
            onChangeText={(text) => setValue({...value, value: text})}
          />
        </InputView>
        <CustomButton textButton={'Atualizar'} onPress={handleUpdatePerfil}/>
      </CustomModal>
    </Container>
  );
}

