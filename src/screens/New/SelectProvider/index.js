import React, {useState, useEffect} from 'react';
import {TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '~/services/api';
import Background from '~/components/Background';

import * as S from './styles';

export default function SelectProvider({navigation}) {
  const [providers, setProviders] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await api.get('providers');
      setProviders(res.data);
    })();
  }, []);

  return (
    <Background>
      <S.Container>
        <S.ProvidersList
          data={providers}
          renderItem={({item: provider}) => (
            <S.Provider
              onPress={() => navigation.navigate('SelectDateTime', {provider})}>
              <S.Avatar
                source={{
                  uri: provider.avatar
                    ? provider.avatar.url
                    : `https://api.adorable.io/avatars/50/${provider.name}.png`,
                }}></S.Avatar>
              <S.Name>{provider.name}</S.Name>
            </S.Provider>
          )}
          keyExtractor={provider => String(provider.id)}
        />
      </S.Container>
    </Background>
  );
}

SelectProvider.navigationOptions = ({navigation}) => ({
  title: 'Selecione o prestador',
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Dashboard');
      }}>
      <Icon name="chevron-left" size={20} color="#fff" />
    </TouchableOpacity>
  ),
});
