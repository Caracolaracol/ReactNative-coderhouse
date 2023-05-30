import { StyleSheet } from "react-native";
import colors from "../../theme/colors";

const styles = StyleSheet.create({
    headerContainer: {
      width:'100%',
      flexDirection:'row',
      justifyContent:'space-between',
      alignSelf:'flex-end',
      backgroundColor: colors.yellow,
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
      zIndex:4,
      paddingTop:20,
      paddingHorizontal:20
    },
    titleContainer: {
      flexDirection:'row',
      alignSelf:'flex-end',
      fontSize: 48, 
      color: '#493757', 
      fontFamily: 'MORGANA',
      
    },
    searchContainer:{
      alignSelf:'flex-end',
      width:'50%' 
    },
   imageContainer: {
      alignSelf:'flex-end',
      padding:8
    },
    /*
    titleContainer: {
      margin:0,
      paddingLeft:10,
      paddingTop:20
    }, */
  });

  export default styles