import React from 'react';
import { TouchableOpacity } from 'react-native'
import styled from 'styled-components/native';
import useFetch from '../hooks/useFetch'
import AsyncStorage from '@react-native-async-storage/async-storage';

import Api from '../Api';

import SvgClose from '../assets/x.svg'
import SvgClock from '../assets/clock.svg'

export const ContainerAppointment = styled.View`
  width: 100%;
  height: 90px;
  flex-direction: row;
  align-items: center;
  margin-top: 30px;
  background: #fff;
  border-radius: 10px;
  elevation: 10;
`;

export const IconClose = styled(SvgClose)`
  margin: 20px;
`;

export const IconClock = styled(SvgClock)`
  margin: 20px;
`;

export const ContainerInfo = styled.View`
  flex: 1;
`;

export const AppointmentDay = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #222831;
`;

export const AppointmentHour = styled.Text`
  font-size: 14px;
  font-weight: 100;
  font-style: italic;
  color: #222831;
`;

export default ({id, data, hora, dia, onPress}) => {
  const {loading, error, request} = useFetch();

  async function deleteAppointment(){
    const token = await AsyncStorage.getItem('token')
    const {url, options} = Api.DELETE_APPOINTMENTS({idAgenda: id}, token);
    const {response, json} = await request (url, options);

    if(response.ok){
      alert(json.mensagem)
      onPress();
    }
  }

  return (
    <ContainerAppointment >
      <IconClock/>
      <ContainerInfo>
        <AppointmentDay>
          {`${dia}, ${data}`}
        </AppointmentDay>
        <AppointmentHour>
          {`Horario ${hora}`}
        </AppointmentHour>
      </ContainerInfo>
      <TouchableOpacity onPress={deleteAppointment}>
        <IconClose />
      </TouchableOpacity>
    </ContainerAppointment>
  );
}