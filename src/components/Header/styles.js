import { StyleSheet } from "react-native";
import colors from "../../theme/colors";

const styles = StyleSheet.create({
    headerContainer: {
      flex: 1.5,
      flexDirection:'row',
      justifyContent:'flex-start',
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
    imageContainer: {
      margin:0,
      paddingLeft:2,
      paddingTop:34
    },
    titleContainer: {
      margin:0,
      paddingLeft:10,
      paddingTop:20
    },
  });

  export default styles