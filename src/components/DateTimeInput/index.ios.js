import React, {useState, useMemo} from 'react';
import {DatePickerIOS} from 'react-native';
import {format} from 'date-fns';
import pt from 'date-fns/locale/pt';

import Icon from 'react-native-vector-icons/MaterialIcons';

import * as S from './styles';

export default function DateTimeInput({date, onChange}) {
  const [opened, setOpened] = useState(false);

  const dateFormatted = useMemo(() => {
    return format(date, "dd 'de' MMMM 'de' yyyy", {locale: pt});
  }, [date]);

  return (
    <S.Container>
      <S.DateButton onPress={() => setOpened(!opened)}>
        <Icon name="event" size={20} color="#fff" />
        <S.DateText>{dateFormatted}</S.DateText>
      </S.DateButton>

      {opened && (
        <S.Picker>
          <DatePickerIOS
            date={date}
            onDateChange={onChange}
            minimumDate={new Date()}
            minuteInterval={60}
            locale="pt"
            mode="date"
          />
        </S.Picker>
      )}
    </S.Container>
  );
}
