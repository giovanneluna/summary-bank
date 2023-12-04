import { useState} from 'react';
import { useNavigation } from '@react-navigation/native'
import { Highlight } from '@components/Highlight';

import { Container } from './styles';
import { ButtonRounded } from '../../components/ButtonRounded/index';

export function Home() {
  const navigation = useNavigation();

  function handleMovimentation() {
    navigation.navigate('movimentation');
  }
  
  return (
    <Container>
      <Highlight 
        title="Hi, User"
        subtitle="Movimentação Mensal"
      />
      <ButtonRounded/>
    </Container>
  );
}