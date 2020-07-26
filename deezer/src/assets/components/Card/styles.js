import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100px;
  height: 100px;
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
  bottom: 8px;
  left: 8px; 
  align-items: center;
  justify-content: center;
`;

export const CardImage = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 4px;
`;
