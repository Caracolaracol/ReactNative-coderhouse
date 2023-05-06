import { StyleSheet, View, Text, ImageBackground} from 'react-native';
import colors from './src/constants/colors'
import Header from './src/components/Header/index'
import NavBar from './src/components/NavBar';
import { useFonts } from 'expo-font';

import Favourites from './src/pages/Favourites';
import { StatusBar } from 'expo-status-bar';

export default function App() {
 const [fontsLoaded] = useFonts({ 
    "Inter-Bold": require("./src/assets/fonts/Inter-Bold.otf"),
    "veltic": require('./src/assets/fonts/veltic.ttf'),
    "MORGANA": require('./src/assets/fonts/MORGANA.ttf'),
    "charlotte": require('./src/assets/fonts/charlotte.ttf')
  }) 

  
  if (!fontsLoaded) {
    return <Text>Cargando</Text>
  } 

  return (
      <View style={styles.container}>
          <StatusBar />
          <View style={styles.headerContainer}>

              <Header />

          </View>
          <View style={styles.FlatListContainer}>
            <Favourites />
          </View>
          <View style={styles.navBarContainer}>
            <NavBar/>
          </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:colors.white,

  },
  headerContainer: {
    flex: 1.1,
    flexDirection:'row',
    paddingTop:22,
    backgroundColor: colors.yellow,
    width: '100%',
    justifyContent: 'space-between',
    overflow:'hidden',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.95,
    shadowRadius: 10,
    elevation: 5,
  },
  navBarContainer: {
    flex:1.2,
    flexDirection:'row',
    backgroundColor:colors.yellow,
    justifyContent:'space-evenly',
    alignItems:'flex-end',
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 5,
    zIndex:4
  },
/*   navBarContainer: {
    flex:1,
    flexDirection:'row',
    gap:4,
    justifyContent:'space-evenly',
    position:'absolute',
    top:118,
    left:20,
    zIndex:-1,
    backgroundColor:'transparent',
  }, */
  FlatListContainer: {
    flex:14,
    zIndex:-10
}
});
