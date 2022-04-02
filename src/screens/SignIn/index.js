import React, { useState } from 'react';
import { SafeAreaView, Image } from 'react-native'
import { useNavigation} from '@react-navigation/native'
import { Container, ContainerLogo, BackgroundGradient, BackgroundImage, InputArea, CustomButton, CustomButtonText, SignMessageButton, SignMessageText, SignMessageTextBold } from './styles'
import AsyncStorage from '@react-native-async-storage/async-storage';
import SignInput from '../../components/SignInput';

import API from '../../Api';
import useFetch from '../../hooks/useFetch';

import image from '../../assets/background.png'; 
import logo from '../../assets/logo.png'; 

export default () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const {error, loading, request} = useFetch();

  const navigation = useNavigation();

  async function handleSignClick() {
    if(email && senha){
      const {url, options} = API.SIGN_IN({email, senha})
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
      routes: [{name: 'SignUp'}]
    });
  }

  return (
    <SafeAreaView>
      <BackgroundImage source={image}>
        <BackgroundGradient colors={['rgba(255,229,0,0.38)', '#rgba(254,208,0,1)', 'rgba(252,173,0,1)']}>
          <ContainerLogo>
            <Image source={logo} />
          </ContainerLogo>
          <Container>
            <InputArea>
              <SignInput 
                placeholder="Email / Telefone" 
                value={email}
                onChangeText={ text => setEmail(text)}
              />
              <SignInput 
                placeholder="Senha" 
                value={senha}
                onChangeText={ text => setSenha(text)}
                password={true}
              />

              <CustomButton onPress={handleSignClick}>
                <CustomButtonText>
                  ENTRAR
                </CustomButtonText>
              </CustomButton>
            </InputArea>

            <SignMessageButton onPress={handleMessageButton}>
              <SignMessageText>NÃO POSSUI UMA CONTA?</SignMessageText>
              <SignMessageTextBold>CADASTRE-SE</SignMessageTextBold>
            </SignMessageButton>
          </Container>
        </BackgroundGradient>
      </BackgroundImage>
    </SafeAreaView>
  );
}