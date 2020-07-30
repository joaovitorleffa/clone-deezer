import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
Entypo.loadFont();

import { Container, CardImage, ContentIcon } from './styles';

const Card = ({ height, width, position_bottom, position_left }) => {
  return (
    <Container height={height} width={width}>
      <CardImage source={require('~/assets/images/image.jpg')} />
      <ContentIcon position_bottom={position_bottom} position_left={position_left} >
        <Entypo name="controller-play" color="#000" size={18} />
      </ContentIcon>
    </Container>
  );
}

export default Card;