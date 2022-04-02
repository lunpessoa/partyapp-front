import React, {useState} from 'react';
import styled from 'styled-components/native'
import CalendarPicker from 'react-native-calendar-picker';
import useFetch from '../../hooks/useFetch'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation} from '@react-navigation/native'

import Api from '../../Api'
import InfoArea from '../../components/InfoArea'
import Hours from './hours';
import ScheduleButton from '../../components/Button';
import CustomModal from '../../components/Modal';

import Arrow from '../../assets/back.svg'
import ScheduleIcon from '../../assets/schedule.svg'
import ClockIcon from '../../assets/clock.svg'

export const Container = styled.View`
  margin-top: 15px;
`;

export const PreviousIcon = styled(Arrow)`
  margin: 10px;
`;

export const NextIcon = styled(Arrow)`
  transform: rotate(180deg);
  margin: 10px;
`;

export const CalendarView = styled.View`
  background-color: #FFFFFF;
  border-radius: 10px;
  padding: 10px;
  elevation: 5;
`;

export const TextCalendar = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${props => props.textColor || '#AAAAAA'};
`;

export const HoursContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 10px;
`;

const weekdays = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb']
const weekFullName = ['Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado']
const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']

export default () => {
  const [ pickDay, setPickDay ] = useState(null);
  const [ visible, setVisible ] = useState(false);
  const [ hour, setHour ] = useState(null);
  const [ hourId, setHourId ] = useState(null);

  const {data, error, loading, request} = useFetch();
  
  const navigation = useNavigation();

  function getHours(){
    const fullDate = pickDay && `${pickDay.year}-${pickDay.month.date}-${pickDay.day}`;
    const {url, options} = Api.GET_OPEN_HOURS(fullDate, pickDay && pickDay.weekDay.name)
    request(url, options);

    return data;
  }

  async function handleSchedule(){
    const token = await AsyncStorage.getItem('token');
    const fullDate = pickDay && `${pickDay.year}-${pickDay.month.date}-${pickDay.day}`;
    const {url, options} = Api.POST_APPOINT({
      idWeekhours: hourId,
      data: fullDate
    }, token);
    const {response} = await request(url, options);

    if(response.ok){
      navigation.reset({
        routes: [{name: 'Appointments'}]
      });
    }
    
  }

  function HandleDate(date){
    const pickData = new Date(date)
    setPickDay({
      weekDay: {
        id: pickData.getDay(),
        name: weekFullName[pickData.getDay()],
        value: weekdays[pickData.getDay()]
      },
      day: ('0' + pickData.getDate()).slice(-2),
      month: {
        id: pickData.getMonth(),
        value: months[pickData.getMonth()],
        date: ('0' + (pickData.getMonth() + 1)).slice(-2),
      },
      year: pickData.getFullYear()
    })

    const fullDate = `${pickData.getFullYear()}-${('0' + (pickData.getMonth() + 1)).slice(-2)}-${('0' + pickData.getDate()).slice(-2)}`;
    const {url, options} = Api.GET_OPEN_HOURS(fullDate, weekFullName[pickData.getDay()])
    request(url, options);

    return data;
  }

  function WeekHeaderStyle(){
    return {
      style: {
      },
      textStyle: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#222831',
      }
    }
  }

  return (
    <Container>
      <CalendarView>
        <CalendarPicker
          weekdays={weekdays} 
          months={months}
          minDate={new Date()}
          width={340} 
          height={350}
          onDateChange={(date) => HandleDate(date)}
          todayBackgroundColor={'#FFFFFF'}
          todayTextStyle={'#000000'}
          selectedDayColor="#124F99"
          selectedDayTextColor="#FFFFFF"
          showDayStragglers={true}
          headerWrapperStyle={{
            width: '100%',
            backgroundColor: '#124F99',
            borderRadius: 10,
          }}
          monthTitleStyle={{
            fontSize: 14, 
            fontWeight: 'bold',
            color: '#FFFFFF',
          }}
          yearTitleStyle={{
            fontSize: 14, 
            fontWeight: 'bold',
            color: '#FFFFFF',
          }}
          dayLabelsWrapper={{
            borderTopColor: 'transparent',
            borderBottomColor: 'transparent',
          }}
          customDayHeaderStyles={WeekHeaderStyle}
          selectMonthTitle={'Selecione o mês em '}
          selectYearTitle={'Selecione o Ano'}
          previousComponent={
            <PreviousIcon width={20} height={20}/>
          }
          nextComponent={
            <NextIcon width={20} height={20} />
          }
        />
      </CalendarView>

      <InfoArea StyledText={
          pickDay ? (
            <TextCalendar textColor="#222831">
              {`${pickDay.weekDay.value}, ${pickDay.day}/${pickDay.month.date}/${pickDay.year}`}
            </TextCalendar>
          ) : (
            <TextCalendar>
              {'Data'}
            </TextCalendar>
          )
        }
        SvgIcon={ScheduleIcon}
      />

      <HoursContainer>
        {data && data.openHours && data.openHours.map((hour) => {
          return (
            <Hours 
              key={hour.idWeekhours}
              id={hour.idWeekhours} 
              textHour={hour.hora} 
              setHour={setHour} 
              setHourId={setHourId}  
              setVisible={setVisible}
            />
          )
        })}
      </HoursContainer>

      <CustomModal visible={visible} setVisible={setVisible}>
        <InfoArea Text={pickDay && `${pickDay.weekDay.value}, ${pickDay.day}/${pickDay.month.date}/${pickDay.year}`} SvgIcon={ScheduleIcon}/>
        <InfoArea Text={`Horario ${hour}`} SvgIcon={ClockIcon}/>
        <ScheduleButton textButton={'Agendar'} onPress={handleSchedule}/>
      </CustomModal>
    </Container>
  );
}