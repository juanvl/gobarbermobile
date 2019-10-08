import {Alert} from 'react-native';
import {all, takeLatest, put, call} from 'redux-saga/effects';
import api from '~/services/api';
import {
  updateProfileSuccess,
  updateProfileFailure,
} from '~/store/modules/user/actions';

export function* updateProfileRequest({payload}) {
  try {
    const {name, email, avatar_id, ...rest} = payload.data;

    const profile = {
      name,
      email,
      avatar_id,
      ...(rest.oldPassword ? rest : {}),
    };

    const res = yield call(api.put, 'users', profile);

    Alert.alert('Sucesso!', 'Perfil atualizado!');

    yield put(updateProfileSuccess(res.data));
  } catch (error) {
    Alert.alert('Erro!', 'Confira seus dados!');

    yield put(updateProfileFailure());
  }
}

export default all([
  takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfileRequest),
]);
