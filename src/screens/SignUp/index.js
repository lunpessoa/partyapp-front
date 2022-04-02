import React, {useState} from 'react';
import { KeyboardAvoidingView, Image } from 'react-native'
import { useNavigation} from '@react-navigation/native'
import { Container, ContainerLogo, BackgroundGradient, BackgroundImage, InputArea, CustomButton, CustomButtonText, SignMessageButton, SignMessageText, SignMessageTextBold } from './styles'
import SignInput from '../../components/SignInput';
import AsyncStorage from '@react-native-async-storage/async-storage';


import API from '../../Api';
import useFetch from '../../hooks/useFetch';

import image from '../../assets/background.png'; 
import logo from '../../assets/logo.png'; 

export default () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [celular, setCelular] = useState('');
  const [cpf, setCpf] = useState('');
  const [senha, setSenha] = useState('');
  
  const {loading, error, request} = useFetch();
  
  const navigation = useNavigation();

  async function handleSignClick() {
    if(nome && email && celular && cpf && senha){
    const {url, options} = API.SIGN_UP({nome, email, celular, cpf, senha});
    const {response, json} = await request(url, options);

    if(error)
        return alert(error)

    if(response.ok){
      await AsyncStorage.setItem('token', json.token);
      navigation.reset({
        routes: [{name: 'MainTab'}]
      })
    }

    } else {
      return alert('Preencha os Campos');
    }
  }

  function handleMessageButton() {
    navigation.reset({
      routes: [{name: 'SignIn'}]
    });
  }

  return (
    <KeyboardAvoidingView>
      <BackgroundImage source={image}>
        <BackgroundGradient colors={['rgba(255,229,0,0.38)', '#rgba(254,208,0,1)', 'rgba(252,173,0,1)']}>

          <ContainerLogo>
            <Image source={logo} />
          </ContainerLogo>

          <Container>
            <InputArea>
              <SignInput 
                placeholder="Nome Completo" 
                value={nome}
                onChangeText={ text => setNome(text)}
              />
              <SignInput 
                placeholder="Email" 
                value={email}
                onChangeText={ text => setEmail(text)}
              />
              <SignInput 
                placeholder="Celular" 
                value={celular}
                keyboard="numeric"
                onChangeText={ text => setCelular(text)}
              />
              <SignInput 
                placeholder="CPF" 
                value={cpf}
                keyboard="numeric"
                onChangeText={ text => setCpf(text)}
              />
              <SignInput 
                placeholder="Senha" 
                value={senha}
                onChangeText={ text => setSenha(text)}
                password={true}
              />

              <CustomButton onPress={handleSignClick}>
                <CustomButtonText>
                  CADASTRAR
                </CustomButtonText>
              </CustomButton>
            </InputArea>

            <SignMessageButton onPress={handleMessageButton}>
              <SignMessageText>JÁ POSSUI UMA CONTA?</SignMessageText>
              <SignMessageTextBold>ENTRE</SignMessageTextBold>
            </SignMessageButton>
          </Container>
        </BackgroundGradient>
      </BackgroundImage>
    </KeyboardAvoidingView>
  );
}