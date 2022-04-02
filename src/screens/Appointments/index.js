import React, {useState, useEffect} from 'react';
import { 
  Container,
  Header,
  PageBody,
  ContainerInfo,
  ContainerAddress,
  ProfileImage,
  NameText,
  LocalizationText,
  TitleAppointment,
  TextAppointment,
} from './styles'
import useFetch from '../../hooks/useFetch'
import AsyncStorage from '@react-native-async-storage/async-storage';

import Api from '../../Api';
import Appointments from '../../components/Appointments';

import Marker from '../../assets/marker.svg';
import SvgCalendar from '../../assets/calendar.svg'

const Profile = require('../../assets/profile.png');

export default () => {
  const [nome, setNome] = useState('');
  const [cidade, setCidade] = useState(null);
  const [schedule, setSchedule] = useState(null);
  const splitName = nome.split(' ')

  const {loading, error, request} = useFetch();

  async function getUserSchedule(){
    const token = await AsyncStorage.getItem('token');
    const {url, options} = Api.USER_APPOINTMENTS(token);
    const {json} = await request(url, options);  

    setSchedule(json);
  }

  useEffect(() => {
    async function getUserInfo(){
      const token = await AsyncStorage.getItem('token');
      const {url, options} = Api.GET_USER(token);
      const {json} = await request(url, options);

      setNome(json[0].nome);
      setCidade(json[0].cidade);
    }

    getUserInfo();
    getUserSchedule();
  }, [])

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
        <ProfileImage source={Profile} style={{}} />
        <TitleAppointment>
          <TextAppointment>Agendamentos</TextAppointment>
          <SvgCalendar width='18px' height='18px'/>
        </TitleAppointment>
        {schedule && schedule.agendamentos.map((agendamento) => (
          <Appointments 
            id={agendamento.idAgenda}
            key={agendamento.idAgenda}
            dia={agendamento.WeekHour.diaSemana.substring(0,3)}
            data={agendamento.data.split('-').reverse().join('/')}
            hora={agendamento.WeekHour.hora}
            onPress={getUserSchedule}
          />
        ))}
      </PageBody>

    </Container>
  );
}