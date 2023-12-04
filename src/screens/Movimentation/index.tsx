import { Header } from '@components/Header'
import {Container, Content, ListContent} from './styles'
import { Highlight } from '@components/Highlight'
import { Button } from '@components/Button'
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { FlatList, Text, View } from 'react-native'
import { Title } from '@components/Highlight/style'
import { Movement, useMovements } from "../../contexts/MovementsContext";
import { MovimentationCard } from "@components/MovimentationCard";

export function Movimentation() {
  const navigation = useNavigation();
  async function handleNewMovimentation() {
    navigation.navigate("registerMov");
  }
  const { movements } = useMovements();
  const { totalBalance } = useMovements();

  const renderItem = ({ item }: { item: Movement }) => {
    return (
      <View
        style={{ padding: 16, borderBottomWidth: 1, borderBottomColor: "#ccc" }}
      >
        <Text>Nome: {item.name}</Text>
        <Text>Valor: R${item.balance}</Text>
        <Text></Text>
      </View>
    );
  };
  const reversedMovements = movements.slice().reverse();

  return (
    <Container>
      <Header showBackButton />
      <Title>{totalBalance}</Title>
      <Highlight title="Movimentações" subtitle="Todas as Movimentações" />
      <Content>
        <Button
          style={{ marginTop: 1 }}
          title="Criar"
          onPress={handleNewMovimentation}
        />
      </Content>

      <ListContent></ListContent>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={reversedMovements} // Passa o array movements como fonte de dados
        renderItem={({ item }) => (
          <MovimentationCard
            description={item.description}
            name={item.name}
            value={item.balance}
            type={item.tipoEntrada}
          />
        )} // Renderiza cada item da lista usando a função renderItem
        keyExtractor={(item, index) => index.toString()} // Define uma chave única para cada item
      />
    </Container>
  );
}
