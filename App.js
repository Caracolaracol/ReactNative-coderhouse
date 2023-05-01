import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View,} from 'react-native';
import FavouriteBookingsList from './src/components/FavouriteBookingsList';
import Header from './src/components/Header/index'
import NavBar from './src/components/NavBar';


export default function App() {

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}> 
       <Header />
      </View>
      <View style={styles.FlatListContainer}>
        <FavouriteBookingsList />
      </View>
      <View style={styles.navBarContainer}>
        <NavBar/>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d7d8ed",
  },
  headerContainer: {
    flex: 1.8,
    flexDirection:'row',
    backgroundColor:"#39a48c",
    width: '100%',
    justifyContent: 'space-between',
    alignItems:'flex-end',
    paddingBottom:10,
    paddingHorizontal:20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 20,
    },
    shadowOpacity: 0.95,
    shadowRadius: 10,
    elevation: 5,
  },
  navBarContainer: {
    flex:1.2,
    flexDirection:'row',
    width:'100%',
    height:'100%',
    backgroundColor:'#39a48c',
    justifyContent:'space-evenly',
    alignItems:'flex-end',
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 100,
    elevation: 99,
    zIndex:99
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
