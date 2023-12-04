import { useTheme } from "styled-components"
import styled from "styled-components/native"
import { UsersThree } from "phosphor-react-native"
import { SafeAreaView } from "react-native-safe-area-context"

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${() => useTheme().COLORS.GRAY_600};
  padding: 24px;
`
export const Content = styled.View`
  flex: 1;
`
export const ListContent = styled.View`
  padding-bottom: 200px;
  flex: 1;
  width: 100%;
`
