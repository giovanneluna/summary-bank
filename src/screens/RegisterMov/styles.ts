import { SafeAreaView } from "react-native-safe-area-context"
import { useTheme } from "styled-components"
import styled from "styled-components/native"

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${() => useTheme().COLORS.GRAY_600};
  padding: 24px;
`

export const ContainerView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`
export const Form = styled.View`
  width: 100%;
  background-color: ${() => useTheme().COLORS.GRAY_700};

  flex-direction: row;

  padding-right: 10px;
  border-radius: 6px;
`
export const HeaderList = styled.View`
  width: 100%;

  flex-direction: row;
  align-items: center;

  margin: 32px 0 12px;
`
export const NumbersOfPlayers = styled.Text`
  color: ${() => useTheme().COLORS.GRAY_200};
  font-family: ${() => useTheme().FONT_FAMILY.BOLD};
  font-size: ${() => useTheme().FONT_SIZE.SM}px;
`
export const Input = styled.TextInput`
  height: 40px;
  border-color: gray;
  border-width: 1px;
  margin-bottom: 20px;
  width: 100%;
`
export const RadioContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
`

export const RadioLabel = styled.Text`
  margin-right: 10px;
  color: white;
  margin-left: 10px;
`

export const RadioButton = styled.TouchableOpacity`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  border-width: 2px;
  justify-content: center;
  align-items: center;
  margin-right: 10px; /* Espaçamento entre os botões */
`

export const RadioButtonSelected = styled.View`
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: green; /* Altere a cor como preferir */
`

export const RadioButtonContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  flex: 1;
`
export const Title = styled.Text`
  font-size: ${() => useTheme().FONT_SIZE.MD}px;
  color: ${() => useTheme().COLORS.WHITE};
  font-family: ${() => useTheme().FONT_FAMILY.BOLD};
  text-align: center;
`
export const ColumnContainer = styled.View`
  flex-direction: column;
  margin-bottom: 20px;
`
