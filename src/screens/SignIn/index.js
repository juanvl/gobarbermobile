import React from 'react';
import {Image} from 'react-native';
import logo from '~/assets/logo.png';

import Background from '~/components/Background';

import * as S from './styles';

export default function SignIn() {
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
          />

          <S.FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Sua senha secreta"
          />

          <S.SubmitButton onPress={() => {}}>Acessar</S.SubmitButton>
        </S.Form>

        <S.SignLink>
          <S.SignLinkText>Criar conta gratuita</S.SignLinkText>
        </S.SignLink>
      </S.Container>
    </Background>
  );
}
