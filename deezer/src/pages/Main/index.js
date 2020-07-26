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
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </RecentlyPlayed>
    </Content>
  </>
);

export default Main;
