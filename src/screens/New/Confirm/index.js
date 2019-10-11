import React, {useMemo} from 'react';
import {TouchableOpacity} from 'react-native';
import {formatRelative, parseISO} from 'date-fns';
import pt from 'date-fns/locale/pt';

import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '~/services/api';
import Background from '~/components/Background';

import * as S from './styles';

export default function Confirm({navigation}) {
  const provider = navigation.getParam('provider');
  const datetime = navigation.getParam('datetime');

  const dateFormatted = useMemo(() => {
    return formatRelative(parseISO(datetime), new Date(), {locale: pt});
  }, [datetime]);

  async function handleAddAppointment() {
    await api.post('appointments', {
      provider_id: provider.id,
      date: datetime,
    });

    navigation.navigate('Dashboard');
  }

  return (
    <Background>
      <S.Container>
        <S.Avatar
          source={{
            uri: provider.avatar
              ? provider.avatar.url
              : `https://api.adorable.io/avatars/50/${provider.name}.png`,
          }}></S.Avatar>

        <S.Name>{provider.name}</S.Name>

        <S.Time>{dateFormatted}</S.Time>

        <S.SubmitButton onPress={handleAddAppointment}>
          Confirmar agendamento
        </S.SubmitButton>
      </S.Container>
    </Background>
  );
}

Confirm.navigationOptions = ({navigation}) => ({
  title: 'Confirmar agendamento',
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => {
        navigation.goBack();
      }}>
      <Icon name="chevron-left" size={20} color="#fff" />
    </TouchableOpacity>
  ),
});
