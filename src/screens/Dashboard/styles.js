import styled from 'styled-components/native';

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

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {padding: 30},
})``;
