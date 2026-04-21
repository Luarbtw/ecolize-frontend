import { NavigationContainer } from '@react-navigation/native'
import { useFonts, Poppins_700Bold } from '@expo-google-fonts/poppins'

import AppNavigator from './src/navigation/AppNavigator'

export default function App() {
  const [fontsLoaded] = useFonts({ Poppins_700Bold })

  if (!fontsLoaded) return null

  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  )
}
