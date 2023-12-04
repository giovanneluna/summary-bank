import { TouchableOpacity,TouchableOpacityProps } from "react-native";
import { ButtonText, ButtonTypeStyleProps, RoundButton, Container, RoundButtonWrapper} from './styles'
import React from "react";
import { Ionicons } from '@expo/vector-icons';
import { Title } from "@components/GroupCard/styles";
import { useNavigation } from "@react-navigation/native";

type Props =  TouchableOpacityProps &{
  type?: ButtonTypeStyleProps
}

export function ButtonRounded({type = 'PRIMARY', ...rest}:Props){
  const navigation = useNavigation();

  function handleMovimentation() {
    navigation.navigate('movimentation');
  }
return (
 <Container type={type} {...rest}>
      <RoundButtonWrapper  >
        <RoundButton type="PRIMARY" onPress={handleMovimentation}>
          <Ionicons name="ios-cash-outline" size={32} color="white" />
        </RoundButton>
        <ButtonText>Despesas</ButtonText>
      </RoundButtonWrapper>

      <RoundButtonWrapper>
        <RoundButton type="SECONDARY">
          <Ionicons name="ios-card" size={32} color="white" />
        </RoundButton>
        <ButtonText>Cartões</ButtonText>
      </RoundButtonWrapper>

      <RoundButtonWrapper>
        <RoundButton type="SECONDARY">
          <Ionicons name="ios-megaphone" size={32} color="white" />
        </RoundButton>
        <ButtonText>Assinaturas</ButtonText>
      </RoundButtonWrapper>

      {/* Adicione os outros botões e textos da mesma forma */}
    </Container>
)
}

