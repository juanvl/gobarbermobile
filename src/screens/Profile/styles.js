import styled from 'styled-components/native';
import Input from '~/components/Input';
import Button from '~/components/Button';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Title = styled.Text`
  color: #fff;
  margin-top: 30px;
  font-size: 20px;
  font-weight: bold;
  align-self: center;
`;

export const Form = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {padding: 30},
})`
  align-self: stretch;
`;

export const FormInput = styled(Input)`
  margin-bottom: 10px;
`;

export const SubmitButton = styled(Button)`
  margin-top: 5px;
`;

export const LogoutButton = styled(Button)`
  margin-top: 10px;
  background-color: #f64c75;
`;

export const Separator = styled.View`
  height: 1px;
  background-color: rgba(255, 255, 255, 0.2);
  margin: 20px 0 30px;
`;
