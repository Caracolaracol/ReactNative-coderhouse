import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useState } from 'react';

import FavouriteBookingsList from './src/components/FavouriteBookingsList';
import Header from './src/layout/Header'
import NavBar from './src/layout/NavBar';

export default function App() {
  const [count, setCount] = useState(0)

  const onPress = () => { 
    setCount(prevState => prevState + 1)
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}> 
       <Header />
      </View>
      <View 
        style={styles.navBarContainer}>
        <NavBar onPress={onPress}/>
      </View>
        {/*{<View style={{ flex: 32, justifyContent:'center', alignItems:'center' }}><Text>Hola N° {count}</Text></View>} */}
      <View style={styles.FlatListContainer}>
        <FavouriteBookingsList />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#577CFF",
    
  },
  header: {
    flex: 2,
    flexDirection:'row',
    backgroundColor:"#58CCB1",
    width: '100%',
    justifyContent: 'space-between',
    alignItems:'flex-end',
    paddingBottom:10,
    paddingHorizontal:20,
    
  },
  navBarContainer: {
    flex:1,
    flexDirection:'row',
    gap:4,
    justifyContent:'space-evenly'
  },
  FlatListContainer: {
    flex:14,
    paddingBottom:30
}
});
