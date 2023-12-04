import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Home } from "@screens/Home"
import { Movimentation } from "@screens/Movimentation"
import { RegisterMov } from '@screens/RegisterMov';
const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes() {
  return (
    <Navigator 
    screenOptions={{headerShown:false}}
    initialRouteName="home">
      <Screen name="home" component={Home} />

      <Screen name="movimentation" component={Movimentation} />

      <Screen name="registerMov" component={RegisterMov} />
    </Navigator>
  )
}
