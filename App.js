import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useFonts, Poppins_700Bold } from '@expo-google-fonts/poppins'

import Slide1 from './src/screens/onboarding/slide1'
import Slide2 from './src/screens/onboarding/slide2'
import Slide3 from './src/screens/onboarding/slide3'

// Quando criar a tela Home, descomente:
// import Home from './src/screens/home/Home'

const Stack = createNativeStackNavigator()

export default function App() {
  const [fontsLoaded] = useFonts({ Poppins_700Bold })

  if (!fontsLoaded) return null

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Slide1" component={Slide1} />
        <Stack.Screen name="Slide2" component={Slide2} />
        <Stack.Screen name="Slide3" component={Slide3} />
        {/* <Stack.Screen name="Home" component={Home} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  )
}