import React from 'react';

import Header from '~/assets/components/Header';
import Card from '~/assets/components/Card';
import ButtonSubmit from '~/assets/components/ButtonSubmit';

import { Content, Title, RecentlyPlayed, Wrapper, Description } from './styles';

const Main = () => (
  <>
    <Header title="Músicas" />
    <Content>
      <Title>Tocadas Recentemente</Title>
      <RecentlyPlayed>
        <Card height="100" width="100" position_bottom="8" position_left="8" circle="30" />
        <Card height="100" width="100" position_bottom="8" position_left="8" circle="30" />
        <Card height="100" width="100" position_bottom="8" position_left="8" circle="30" />
        <Card height="100" width="100" position_bottom="8" position_left="8" circle="30" />
        <Card height="100" width="100" position_bottom="8" position_left="8" circle="30" />
        <Card height="100" width="100" position_bottom="8" position_left="8" circle="30" />
        <Card height="100" width="100" position_bottom="8" position_left="8" circle="30" />
      </RecentlyPlayed>
    </Content>
    <Content marginTop={true}>
      <Title>Feito pra você</Title>
      <RecentlyPlayed>
        <Card height="150" width="150" position_bottom="35" position_left="35" circle="40" />
        <Card height="150" width="150" position_bottom="35" position_left="35" circle="40" />
        <Card height="150" width="150" position_bottom="35" position_left="35" circle="40" />
        <Card height="150" width="150" position_bottom="35" position_left="35" circle="40" />
        <Card height="150" width="150" position_bottom="35" position_left="35" circle="40" />
        <Card height="150" width="150" position_bottom="35" position_left="35" circle="40" />
        <Card height="150" width="150" position_bottom="35" position_left="35" circle="40" />
      </RecentlyPlayed>
    </Content>
    <Wrapper>
      <Description>Melhore suas recomendações, selecionando seus artistas favoritos.</Description>
      <ButtonSubmit title="adicione artistas" />
    </Wrapper>
  </>
);

export default Main;
