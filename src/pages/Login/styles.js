import { StyleSheet } from "react-native";
import colors from "../../theme/colors";

export const styles = StyleSheet.create({ 
    container:{
      flex:1,
      flexDirection:'column',
      justifyContent:'space-around',
      alignItems:'center'
    },
    title: {
      flex:1,
      flexDirection:'row',
      alignItems:'flex-end',
    },
    body: {
      flex:2,
      alignItems:'center'
    },
    inputContainer:{
      width:'100%',
      marginBottom:20
    }, 
    input: {
      backgroundColor:colors.yellow,
      color:colors.violet_dark,
      aspectRatio:7,
      margin:10,
      padding:4,
      borderRadius:10,
      fontFamily:'lost-ages',
      fontSize:17,
      borderBottomWidth:.4,
      borderColor:colors.red
    },
    authContainer:{
      width:'100%',
      flex:1,
      alignItems:'center',
      gap:10
    },
    loginBtn: {
      aspectRatio:5,
      alignItems:'center',
      backgroundColor:colors.violet,
      padding:10,
      borderRadius:10,
    },
    signUpBtn:{
      marginTop:80,
      aspectRatio:5,
      alignItems:'center',
      backgroundColor:colors.orange_a,
      opacity:.6,
      padding:10,
      borderRadius:10,
    },
    signUpGoogleBtn: {
      marginTop:10,
      aspectRatio:6,
      alignItems:'center',
      backgroundColor:colors.orange,
      opacity:.6,
      padding:10,
      borderRadius:10,
    },
  
  
    body2: {
      flex:2,
      alignItems:'center'
    },
  
  })

  export default styles