import { Text } from 'react-native';
import { useFonts } from 'expo-font';
import { registerRootComponent } from 'expo';
import Navigator from './src/navigation';

export default function App() {
  const [fontsLoaded] = useFonts({ 
    "Inter-Bold": require("./src/assets/fonts/Inter-Bold.otf"),
    "MORGANA": require('./src/assets/fonts/MORGANA.ttf'),
    "lost-ages": require('./src/assets/fonts/lost-ages.ttf'),
    "WickedGrit": require('./src/assets/fonts/WickedGrit.ttf'),
  })

  if (!fontsLoaded) {
    return <Text>Cargando</Text>
  }

  return (
    <Navigator/>
  )
}

registerRootComponent(App);