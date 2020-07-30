import styled from 'styled-components/native';

export const Container = styled.View`
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  border-radius: 4px;
  margin-right: 10px;
  position: relative;
`;

export const ContentIcon = styled.View`
  width: 30px;
  height: 30px;
  border-radius: 15px;
  background-color: #fff;
  position: absolute;
  bottom: ${props => props.position_bottom}%;
  left: ${props => props.position_left}%; 
  align-items: center;
  justify-content: center;
`;

export const CardImage = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 4px;
`;
