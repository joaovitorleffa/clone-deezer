import styled from 'styled-components/native';

export const Content = styled.View`
  margin-top: ${(props) => (props.marginTop ? '18px' : '0px') };
`;

export const Title = styled.Text`
  margin-left: 24px;
  padding: 8px 0;
  font-size: 20px;
  font-weight: 700;
`;

export const RecentlyPlayed = styled.ScrollView.attrs({
  horizontal: true,
  contentContainerStyle: { paddingLeft: 24, paddingRight: 24 },
  showsHorizontalScrollIndicator: false,
})``;

export const Wrapper = styled.View`
  align-items: center;
  width: 300px;
  margin: 24px auto;
`;

export const Description = styled.Text`
  margin: 14px;
  font-size: 14px;
  color: #1c1a1a;
  text-align: center;
`;
