import styled from 'styled-components/native';

export const Content = styled.View``;

export const Title = styled.Text`
  margin-left: 24px;
  padding: 8px 0;
  font-size: 20px;
  font-weight: 700;
`;

export const RecentlyPlayed = styled.ScrollView.attrs({
  horizontal: true,
  contentContainerStyle : { paddingLeft: 24, paddingRight: 24 },
  showsHorizontalScrollIndicator: false
})``;
