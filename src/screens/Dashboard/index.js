import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {withNavigationFocus} from 'react-navigation';

import api from '~/services/api';

import Background from '~/components/Background';
import Appointment from '~/components/Appointment';

import * as S from './styles';

function Dashboard({isFocused}) {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    if (isFocused) {
      (async () => {
        const res = await api.get('appointments');
        setAppointments(res.data);
      })();
    }
  }, [isFocused]);

  async function handleCancel(id) {
    const res = await api.delete(`appointments/${id}`);

    setAppointments(
      appointments.map(a =>
        a.id === id ? {...a, canceled_at: res.data.canceled_at} : a,
      ),
    );
  }

  return (
    <Background>
      <S.Container>
        <S.Title>Agendamentos</S.Title>

        <S.List
          data={appointments}
          keyExtractor={item => String(item.id)}
          renderItem={({item}) => (
            <Appointment data={item} onCancel={() => handleCancel(item.id)} />
          )}
        />
      </S.Container>
    </Background>
  );
}

Dashboard.navigationOptions = {
  tabBarLabel: 'Agendamentos',
  tabBarIcon: ({tintColor}) => (
    <Icon name="event" size={20} color={tintColor} />
  ),
};

export default withNavigationFocus(Dashboard);
