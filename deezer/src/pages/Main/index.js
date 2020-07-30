import React from 'react';

import Header from '~/assets/components/Header';
import Card from '~/assets/components/Card';

import { Content, Title, RecentlyPlayed } from './styles';

const Main = () => (
  <>
    <Header title="Músicas" />
    <Content>
      <Title>Tocadas Recentemente</Title>
      <RecentlyPlayed>
        <Card height="100" width="100" position_bottom="8" position_left="8" />
        <Card height="100" width="100" position_bottom="8" position_left="8" />
        <Card height="100" width="100" position_bottom="8" position_left="8" />
        <Card height="100" width="100" position_bottom="8" position_left="8" />
        <Card height="100" width="100" position_bottom="8" position_left="8" />
        <Card height="100" width="100" position_bottom="8" position_left="8" />
        <Card height="100" width="100" position_bottom="8" position_left="8" />
      </RecentlyPlayed>
    </Content>
   
    <Content>
      <Title>Feito pra você</Title>
      <RecentlyPlayed>
        <Card height="150" width="150" position_bottom="40" position_left="40" />
        <Card height="150" width="150" position_bottom="40" position_left="40" />
        <Card height="150" width="150" position_bottom="40" position_left="40" />
        <Card height="150" width="150" position_bottom="40" position_left="40" />
        <Card height="150" width="150" position_bottom="40" position_left="40" />
        <Card height="150" width="150" position_bottom="40" position_left="40" />
        <Card height="150" width="150" position_bottom="40" position_left="43" />
      </RecentlyPlayed>
    </Content>
  </>
);

export default Main;
