import { Dimensions } from "react-native"
import { TouchableOpacity } from "react-native"
import styled, { useTheme } from "styled-components/native"

const windowWidth = Dimensions.get("window").width

export type ButtonTypeStyleProps = "PRIMARY" | "SECONDARY"

type Props = {
  type: ButtonTypeStyleProps
}

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  align-self: center;
`

export const RoundButtonWrapper = styled.View`
  flex: 1;
  align-items: center;
`

export const Line = styled.View`
  width: 100%;
  height: 2px;
  background-color: black;
`

export const RoundButton = styled(TouchableOpacity)<Props>`
  width: ${windowWidth * 0.15}px; /* 15% do tamanho da tela */
  height: ${windowWidth * 0.15}px; /* 15% do tamanho da tela */
  border-radius: ${windowWidth * 0.075}px; /* Metade do tamanho do botão */
  background-color: ${({ type }) =>
    type === "PRIMARY"
      ? useTheme().COLORS.GREEN_700
      : useTheme().COLORS.RED_DARK};
  align-items: center;
  justify-content: center;
`

export const ButtonText = styled.Text`
  font-size: ${() => useTheme().FONT_SIZE.MD}px;
  color: ${() => useTheme().COLORS.WHITE};
  font-family: ${() => useTheme().FONT_FAMILY.BOLD};
  margin-top: 8px; /* Espaçamento do texto em relação ao botão */
  text-align: center;
`

export const LineAboveButtonWrapper = styled(Line)`
  margin-bottom: 8px; /* Espaçamento da linha abaixo do RoundButtonWrapper */
`

export const LineBelowButtonContainer = styled(Line)`
  margin-top: 8px; /* Espaçamento da linha acima do RoundButtonContainer */
`
