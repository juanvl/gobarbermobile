import React, {useMemo} from 'react';
import {DatePickerAndroid} from 'react-native';
import {format} from 'date-fns';
import pt from 'date-fns/locale/pt';

import Icon from 'react-native-vector-icons/MaterialIcons';
import * as S from './styles';

export default function DateInput({date, onChange}) {
  const dateFormatted = useMemo(() => {
    return format(date, "dd 'de' MMMM 'de' yyyy", {locale: pt});
  }, [date]);

  async function handleOpenPicker() {
    const {action, year, month, day} = await DatePickerAndroid.open({
      mode: 'spinner',
      date,
    });

    if (action === DatePickerAndroid.dateSetAction) {
      const selectedDate = new Date(year, month, day);
      onChange(selectedDate);
    }
  }

  return (
    <S.Container>
      <S.DateButton onPress={handleOpenPicker}>
        <Icon name="event" size={20} color="#fff" />
        <S.DateText>{dateFormatted}</S.DateText>
      </S.DateButton>
    </S.Container>
  );
}
