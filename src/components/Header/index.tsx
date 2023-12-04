import { useNavigation } from '@react-navigation/native';
import { BackIcon, Container, Logo, BackButton } from './style';
import { useMovements } from '../../contexts/MovementsContext' ;

type Props = {
  showBackButton?: boolean
}
export function Header({showBackButton = false}: Props) {
  const { movements, totalBalance, addMovement } = useMovements();

  const navigation = useNavigation()
  function handleGoBack(){
    navigation.goBack();
  }
  return (
    <Container>
      {
        showBackButton &&
      <BackButton onPress={handleGoBack}>
      <BackIcon  />
      </BackButton>
      }
    </Container>
  )
}