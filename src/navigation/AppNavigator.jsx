import { createNativeStackNavigator } from '@react-navigation/native-stack'

import LoginScreen from '../screens/auth/LoginScreen'
import RegisterScreen from '../screens/auth/RegisterScreen'
import HomeScreen from '../screens/home/HomeScreen'
import WaterDetailsScreen from '../screens/home/WaterDetailsScreen'
import Slide1 from '../screens/onboarding/Slide1'
import Slide2 from '../screens/onboarding/Slide2'
import Slide3 from '../screens/onboarding/Slide3'

const Stack = createNativeStackNavigator()

export default function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Slide1" component={Slide1} />
      <Stack.Screen name="Slide2" component={Slide2} />
      <Stack.Screen name="Slide3" component={Slide3} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="WaterDetails" component={WaterDetailsScreen} />
    </Stack.Navigator>
  )
}
