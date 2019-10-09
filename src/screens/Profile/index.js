import React, {useState, useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {updateProfileRequest} from '~/store/modules/user/actions';
import {signOut} from '~/store/modules/auth/actions';
import Background from '~/components/Background';

import * as S from './styles';

export default function Profile() {
  const profile = useSelector(state => state.user.profile);

  const [name, setName] = useState(profile.name);
  const [email, setEmail] = useState(profile.email);
  const [oldPassword, setOldPassword] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const emailRef = useRef();
  const pwdRef = useRef();
  const oldPwdRef = useRef();
  const confirmPwdRef = useRef();

  const dispatch = useDispatch();

  function handleSubmit() {
    dispatch(
      updateProfileRequest({
        name,
        email,
        oldPassword,
        password,
        confirmPassword,
      }),
    );

    setOldPassword('');
    setPassword('');
    setConfirmPassword('');
  }

  function handleLogout() {
    dispatch(signOut());
  }

  return (
    <Background>
      <S.Container>
        <S.Title>Meu perfil</S.Title>

        <S.Form>
          <S.FormInput
            icon="person-outline"
            autoCorrect={false}
            placeholder="Nome completo"
            returnKeyType="next"
            onSubmitEditing={() => emailRef.current.focus()}
            value={name}
            onChangeText={setName}
          />

          <S.FormInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Seu email"
            ref={emailRef}
            returnKeyType="next"
            onSubmitEditing={() => oldPwdRef.current.focus()}
            value={email}
            onChangeText={setEmail}
          />

          <S.Separator></S.Separator>

          <S.FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Sua senha atual"
            ref={oldPwdRef}
            returnKeyType="next"
            onSubmitEditing={() => pwdRef.current.focus()}
            value={oldPassword}
            onChangeText={setOldPassword}
          />

          <S.FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Sua senha secreta"
            ref={pwdRef}
            returnKeyType="next"
            onSubmitEditing={() => confirmPwdRef.current.focus()}
            value={password}
            onChangeText={setPassword}
          />

          <S.FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Confirme sua nova senha"
            ref={confirmPwdRef}
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />

          <S.SubmitButton onPress={handleSubmit}>
            Atualizar perfil
          </S.SubmitButton>
          <S.LogoutButton onPress={handleLogout}>
            Sair do GoBarber
          </S.LogoutButton>
        </S.Form>
      </S.Container>
    </Background>
  );
}

Profile.navigationOptions = {
  tabBarLabel: 'Meu perfil',
  tabBarIcon: ({tintColor}) => (
    <Icon name="person" size={20} color={tintColor} />
  ),
};
