import { Header } from '@components/Header'
import {Container, Content, ListContent} from './styles'
import { Highlight } from '@components/Highlight'
import { Button } from '@components/Button'
import { Input } from '@components/Input'
import { useNavigation } from '@react-navigation/native'
import { useState } from 'react'
import { groupCreate } from '@storage/group/groupCreate'
import { AppError } from '@utils/AppError'
import { Alert, FlatList, Text, View } from 'react-native'
import { Filter } from '@components/Filter'

export function Movimentation() {
  const [movimentation,setMovimentation] = useState('')
  const navigation = useNavigation()
  async function handleNewMovimentation(){
  navigation.navigate('newMovimentation', {movimentation})
  }

  type DataItem = {
    key: string;
    value: string;
  };
  
  const data: DataItem[] = [
    { key: '1', value: 'Item 1' },
    { key: '2', value: 'Item 2' },
    { key: '3', value: 'Item 3' },
    { key: '4', value: 'Item 4' },
    { key: '5', value: 'Item 5' },
    { key: '6', value: 'Item 6' },
    { key: '7', value: 'Item 7' },
    { key: '5', value: 'Item 5' },
    { key: '5', value: 'Item 5' },
    { key: '5', value: 'Item 5' },
    { key: '5', value: 'Item 5' },
    { key: '5', value: 'Item 5' },
  ];
  
  type RenderItemType = {
    item: DataItem;
  };

  const renderItem: React.FC<RenderItemType> = ({ item }) => (
    <View style={{ padding: 10 }}>
      <Text>{item.value}</Text>
    </View>
  );

  return (
    <Container>
      <Header showBackButton />
      
      <Content>
        <Highlight 
        title='Movimentações'
        subtitle='Todas as Movimentações'
        />

        <Button 
        style={{marginTop:1}}
        title='Criar'
        onPress={handleNewMovimentation}
        />
      </Content>

      <ListContent>
      <FlatList
      data={data}
      renderItem={renderItem}
      
    />

      </ListContent>
      
    </Container>
  )
}