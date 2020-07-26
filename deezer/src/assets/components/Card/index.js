import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
Entypo.loadFont();

import { Container, CardImage, ContentIcon } from './styles';

const Card = () => {
  return (
    <Container>
      <CardImage source={require('~/assets/images/image.jpg')}/>
      <ContentIcon>
        <Entypo name="controller-play" color="#000" size={18} />
      </ContentIcon>
    </Container>
  );
}

export default Card;