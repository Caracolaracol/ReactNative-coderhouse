import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0)

  const onPress = () => { 
    setCount(prevState => prevState + 1)
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.header}>
        <View style={styles.titleContainer}>
          <Text style={{fontSize:24}}>Fantasy Booking</Text>
        </View>
        <View>
          <Image 
            style={styles.logoImage}
            source={require('./assets/logo1.jpg')} />
        </View>
      </View>

      <View 
        style={styles.navBarContainer}>
        <TouchableOpacity style={styles.navBarBtn} onPress={onPress}>
          <Text style={{fontSize:13}}>Search Bookings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navBarBtn}>
        <Text style={{fontSize:13}}>Add Space</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navBarBtn}>
        <Text style={{fontSize:13}}>Register</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 32, justifyContent:'center', alignItems:'center' }}><Text>Hola N° {count}</Text></View>

      <View>
        
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
    flex: 4,
    flexDirection:'row',
    backgroundColor:"#58CCB1",
    width: '100%',
    justifyContent: 'space-between',
    alignItems:'flex-end',
    paddingBottom:10,
    paddingHorizontal:20,
    
  },
  titleContainer: {
    margin:15,
    
  },
  logoImage: {
    width:60,
    height:60,
    borderRadius:99,
    
  },
  navBarContainer: {
    flex:1,
    flexDirection:'row',
    gap:4,
    justifyContent:'space-evenly'
  },
  navBarBtn: {
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#51BDA4',
    width:120,
    height:40,
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10,
  }
});
