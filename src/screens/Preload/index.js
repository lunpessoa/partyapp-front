import React, {useEffect} from 'react';
import { SafeAreaView, Image } from 'react-native'
import { useNavigation} from '@react-navigation/native'
import { ContainerLogo, BackgroundGradient, BackgroundImage, LoadingIcon} from './styles'
import AsyncStorage from '@react-native-async-storage/async-storage';

import API from '../../Api';
import useFetch from '../../hooks/useFetch';

import image from '../../assets/background.png'; 
import logo from '../../assets/logo.png'; 

export default () => {
  const navigation = useNavigation();

  useEffect(() => {
    function checkToken(token) {
      if(token){
        navigation.navigate('MainTab')
      } else {
        navigation.navigate('SignIn')
      }
    }
    checkToken();
  }, [])

  return (
    <SafeAreaView>
      <BackgroundImage source={image}>
        <BackgroundGradient colors={['rgba(255,229,0,0.38)', '#rgba(254,208,0,1)', 'rgba(252,173,0,1)']}>
          <ContainerLogo>
            <Image source={logo} />
            <LoadingIcon size="large" color="#fff" />
          </ContainerLogo>
        </BackgroundGradient>
      </BackgroundImage>
    </SafeAreaView>
  );
}