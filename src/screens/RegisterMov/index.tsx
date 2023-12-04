import { Header } from '@components/Header'
import {ColumnContainer, Container, ContainerView, RadioButton, RadioButtonSelected, RadioContainer, RadioLabel, Title} from './styles'
import { Input } from '@components/Input'

import React, { useState } from 'react'
import { Button } from '@components/Button'
import { useNavigation } from '@react-navigation/native'
import { Movement, useMovements } from '../../contexts/MovementsContext' 

export function RegisterMov() {
  const { addMovement } = useMovements();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [balance, setBalance] = useState(0); // Defina o estado para balance
  const [metodoPagamento, setMetodoPagamento] = useState(false); // Defina o estado para metodoPagamento
  const [tipoEntrada, setTipoEntrada] = useState(false); // Defina o estado para tipoEntrada

  const navigation = useNavigation();

  const handleAddMovement = () => {
    const newMovement:Movement = {
      name,
      description,
      balance,
      metodoPagamento,
      tipoEntrada,


    };
    addMovement(newMovement);
    navigation.navigate('movimentation');
    // Resto da lógica...
  };
  
  
  return (
    <Container>
      <Header showBackButton />
      <ContainerView>
      <Container>
      <Input
        autoCorrect={false}
        returnKeyType='done'
        value={name}
        onChangeText={(text) => setName(text)}
        placeholder="Nome da Movimentação"
        style={{marginBottom:20}}
      />
      <Input
        value={description}
        onChangeText={(text) => setDescription(text)}
        placeholder="Descrição da Movimentação"
        style={{marginBottom:20}}
      />
      <Input
       value={balance.toString()}
       onChangeText={(text) => setBalance(parseFloat(text))}
        placeholder="Valor da Movimentação"
        keyboardType="numeric"
        style={{marginBottom:20}}
      />

      <Title>Método de Pagamento:</Title>
      <RadioContainer>
        
        <RadioLabel>Pix/Transferência</RadioLabel>
        
        <RadioButton onPress={() => setMetodoPagamento(true)}>
        {metodoPagamento && <RadioButtonSelected />}
        </RadioButton>


        <RadioLabel>Dinheiro</RadioLabel>
        <RadioButton onPress={() => setMetodoPagamento(false)}>
              {!metodoPagamento && <RadioButtonSelected />}
        </RadioButton>
      </RadioContainer>

      <Title>Tipo de Entrada</Title>
      <ColumnContainer>
      <RadioContainer>
        <RadioLabel>Saída</RadioLabel>
        <RadioButton onPress={() => setTipoEntrada(false)}>
                {!tipoEntrada && <RadioButtonSelected />}
        </RadioButton>

        <RadioLabel>Entrada</RadioLabel>
        <RadioButton onPress={() => setTipoEntrada(true)}>
                {tipoEntrada && <RadioButtonSelected />}
        </RadioButton>
      </RadioContainer>
      </ColumnContainer>
      <Button 
        style={{marginTop:1}}
        title='Cadastrar Movimentação'
        onPress={handleAddMovement}
        />
    </Container>
      </ContainerView>

    </Container>
  )
}