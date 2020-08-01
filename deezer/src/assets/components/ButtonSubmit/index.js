import React from 'react';

import { ButtonContainer, ButtonText } from './styles';

const ButtonSubmit = ({ title }) => {
  return (
    <ButtonContainer>
      <ButtonText>{title}</ButtonText>
    </ButtonContainer>
  );
}

export default ButtonSubmit;