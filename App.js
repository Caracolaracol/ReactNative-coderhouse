import { Text } from 'react-native';
import { useFonts } from 'expo-font';
import { registerRootComponent } from 'expo';
import Navigator from './src/navigation';

// redux
import store from './src/store';
import { Provider } from 'react-redux';
import { init } from './src/db';

import 'react-native-gesture-handler';

init() // init DATABASE
  .then(()=> console.log("Base de datos iniciada"))
  .catch(err=> {
    console.log("Base de datos no creada")
    console.log(err.message)
  })

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
    <Provider store={store}>
      <Navigator/>
    </Provider>
  )
}

registerRootComponent(App);