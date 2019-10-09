import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as S from './styles';

export default function Appointment() {
  return (
    <S.Container>
      <S.Left>
        <S.Avatar
          source={{
            uri: 'https://api.adorable.io/avatars/50/abott@adorable.png',
          }}></S.Avatar>
        <S.Info>
          <S.Name>Juan Victor</S.Name>
          <S.Time>em 3 horas</S.Time>
        </S.Info>
      </S.Left>

      <TouchableOpacity onPress={() => {}}>
        <Icon name="event-busy" size={20} color="#f64c75" />
      </TouchableOpacity>
    </S.Container>
  );
}
