import { StyleSheet } from "react-native"
import colors from "../../theme/colors";

const styles = StyleSheet.create({
    reserveContainer: {
      position:'absolute',
      flexDirection:'row',
      justifyContent:'space-around',
      alignItems:'center',
      backgroundColor:colors.white,
      width:'100%',
      aspectRatio:7,
      bottom:0,
      shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 0,
        },
        shadowOpacity: 0.95,
        shadowRadius: 10,
        elevation: 5,
    },
    titleContainer:{
      borderWidth: 0,
      padding:10,
    },
    descriptionContainer:{
      marginTop:20,
      marginHorizontal:20,
      borderWidth: 0,
    },



    hostDataContainer: {
      marginTop:20,
      borderWidth: 0,
      marginHorizontal:20,
      flexDirection:'row',
      alignItems:'flex-start',
    },
    hostImageContainer: {
      flex:1, 
      backgroundColor:colors.yellow,
      borderRadius:10,
      borderWidth:2,
      borderColor:colors.white_a,
      borderStyle:'solid'
    },
    hostImage:{
      width:'90%',
      height:200
    }
  })

  export default styles