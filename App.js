import { useState } from 'react';
import { StyleSheet, View, Text, ImageBackground } from 'react-native';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';

import colors from './src/constants/colors'
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
    "veltic": require('./src/assets/fonts/veltic.ttf'),
   "MORGANA": require('./src/assets/fonts/MORGANA.ttf'),
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
      <ImageBackground source={require('./src/assets/bg2.png')} style={styles.headerContainer}>
        <Header />
      </ImageBackground>
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
  headerContainer: {
    flex: 1.5,
    flexDirection:'row',
    backgroundColor: colors.yellow,
    width: '100%',
    height:'100%',
    overflow:'hidden',
    borderBottomColor:'#caa59e',
    borderBottomWidth:0.3,
    borderStyle:'dashed',
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
    width: '100%',
    height:'100%',
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
