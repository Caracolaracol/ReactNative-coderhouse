import { useState } from 'react';
import { StyleSheet, View, Text, ImageBackground, SafeAreaView } from 'react-native';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';

import colors from './src/theme/colors'
import Header from './src/components/Header/index'
import NavBar from './src/components/NavBar';
import Favourites from './src/pages/Favourites';
import Explore from './src/pages/Explore';
import Notifications from './src/pages/Notfications';
import Profile from './src/pages/Profile';


export default function App() {
  const [section, setSection] = useState('explore')
  const [fontsLoaded] = useFonts({ 
    "Inter-Bold": require("./src/assets/fonts/Inter-Bold.otf"),
    "MORGANA": require('./src/assets/fonts/MORGANA.ttf'),
    "lost-ages": require('./src/assets/fonts/lost-ages.ttf'),
    "WickedGrit": require('./src/assets/fonts/WickedGrit.ttf'),
 })


  if (!fontsLoaded) {
    return <Text>Cargando</Text>
  }
  const onHandleExplore = () => {
    section != 'explore' ? setSection('explore') : ''
  }
  const onHandleFavs = () => {
    section != 'favs' ? setSection('favs') : ''
  }
  const onHandleNotifications = () => {
    section != 'notifications' ? setSection('notifications') : ''
  }
  const onHandleProfile = () => {
    section != 'profile' ? setSection('profile') : ''
  }

  return (
    <View style={styles.container}>
      <StatusBar />
      <Header />
        <View style={styles.FlatListContainer}>
          { section == 'explore' && <Explore /> }
          { section == 'favs' && <Favourites /> }
          { section == 'notifications' && <Notifications /> }
          { section == 'profile' && <Profile /> }
        </View>
        <ImageBackground source={require('./src/assets/bg2.png')} style={styles.navBarContainer}>
          <NavBar onHandleExplore={onHandleExplore} onHandleFavs={onHandleFavs} onHandleNotifications={onHandleNotifications} onHandleProfile={onHandleProfile}/>
        </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:colors.white,

  },
  
  navBarContainer: {
    flex:1.3,
    flexDirection:'row',
    width: '100%',
    borderTopColor:'#caa59e',
    borderTopWidth:0.3,
    borderStyle:'dashed',
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
  
  FlatListContainer: {
    flex:14,
    zIndex:-10
}
});
