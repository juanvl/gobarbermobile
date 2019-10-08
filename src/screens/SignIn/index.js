import React, {useRef} from 'react';
import PropTypes from 'prop-types';
import {Image} from 'react-native';
import logo from '~/assets/logo.png';

import Background from '~/components/Background';

import * as S from './styles';

export default function SignIn({navigation}) {
  const pwdRef = useRef();

  function handleSubmit() {}

  return (
    <Background>
      <S.Container>
        <Image source={logo} />
        <S.Form>
          <S.FormInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Digite seu email"
            returnKeyType="next"
            onSubmitEditing={() => pwdRef.current.focus()}
          />

          <S.FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Sua senha secreta"
            ref={pwdRef}
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
          />

          <S.SubmitButton onPress={() => {}}>Acessar</S.SubmitButton>
        </S.Form>

        <S.SignLink onPress={() => navigation.navigate('SignUp')}>
          <S.SignLinkText>Criar conta gratuita</S.SignLinkText>
        </S.SignLink>
      </S.Container>
    </Background>
  );
}

SignIn.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
