import React, {useState , useEffect} from 'react';
import { 
  Container,
  Header,
  PageBody,
  ContainerInfo,
  ContainerAddress,
  ProfileImageButton,
  ProfileImage,
  NameText,
  LocalizationText,
} from './styles'
import { useNavigation } from '@react-navigation/native'
import useFetch from '../../hooks/useFetch'
import AsyncStorage from '@react-native-async-storage/async-storage';


import AddressButton from '../../components/AddressButton';
import LogOffButton from '../../components/Button';
import AddressInput from '../../components/AddressInput';
import CustomModal from '../../components/Modal';

import Marker from '../../assets/marker.svg';
import Api from '../../Api';
import ProfileButtons from './ProfileButtons';

const Profile = require('../../assets/profile.png');

export default () => {
  const [addressModal, setAddressModal] = useState(false);
  const [profileModal, setProfileModal] = useState(false);
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [celular, setCelular] = useState('');
  const [cpf, setCpf] = useState('');
  const [cep, setCep] = useState(null);
  const [rua, setRua] = useState(null);
  const [bairro, setBairro] = useState(null);
  const [numero, setNumero] = useState(null);
  const [complemento, setComplemento] = useState(null);
  const [cidade, setCidade] = useState(null);
  const [nomeEndereco, setNomeEndereco] = useState(null);
  const splitName = nome.split(' ')

  const {loading, error, request} = useFetch();

  const navigation = useNavigation();

  async function handleLogOff(){
    await AsyncStorage.clear;
    navigation.reset({
      routes: [{name: 'Preload'}]
    })
  }

  useEffect(() => {
    async function getUserInfo(){
      const token = await AsyncStorage.getItem('token');
      const {url, options} = Api.GET_USER(token);
      const {json} = await request(url, options);

      setNome(json[0].nome);
      setEmail(json[0].email);
      setCelular(json[0].celular);
      setCpf(json[0].cpf);
      setCep(json[0].cep);
      setRua(json[0].rua);
      setBairro(json[0].bairro);
      setNumero(json[0].numero && json[0].numero.toString());
      setComplemento(json[0].complemento);
      setCidade(json[0].cidade);
      setNomeEndereco(json[0].nomeEndereco);
    }
    getUserInfo();
  },[addressModal, profileModal])

  return (
    <Container>

      <Header>
        <ContainerInfo>
          <NameText>{`${splitName[0]} ${splitName[1]}`}</NameText>
          <ContainerAddress>
            <Marker />
            <LocalizationText>{cidade ? cidade : 'Localização'}, SP</LocalizationText>
          </ContainerAddress>
        </ContainerInfo>
      </Header>

      <PageBody>
        <ProfileImageButton>
          <ProfileImage source={Profile} style={{}} />
        </ProfileImageButton>
        <ProfileButtons 
          nome={nome}
          email={email}
          celular={celular}
          cpf={cpf}
          visible={profileModal}
          setVisible={setProfileModal}
        />
        <AddressButton 
          rua={rua}
          numero={numero} 
          bairro={bairro} 
          cidade={cidade} 
          nomeEndereco={nomeEndereco} 
          onPress={() => setAddressModal(true)}
        />
        <LogOffButton textButton={'Sair'} onPress={handleLogOff}/>
      </PageBody>

      <CustomModal visible={addressModal} setVisible={setAddressModal}>
        <AddressInput 
          cep={cep}
          rua={rua}
          bairro={bairro}
          numero={numero}
          complemento={complemento}
          cidade={cidade}
          nomeEndereco={nomeEndereco}
          setVisible={setAddressModal}
        />
      </CustomModal>
    </Container>
  );
}