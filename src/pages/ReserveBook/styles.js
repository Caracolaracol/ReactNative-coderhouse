import { StyleSheet } from "react-native"
import colors from "../../theme/colors";

const styles = StyleSheet.create({

  detailDataContainer: {
    backgroundColor:'blue',
  },
  container:{
    backgroundColor:colors.white_a,
    flex:1,
    alignSelf:'center',
    paddingHorizontal:'6.5%',
    minWidth:'100%',
    marginTop:10
  },
  innerTextImage: {
    flexDirection:'row',
    justifyContent:'flex-start',
    gap:15

  },
  imagetextContainer:{

  },
  textImage: {
    fontFamily:'lost-ages',
    fontSize:18
  },
  bookImage: {
    aspectRatio:1.6,
    width:160,
    borderRadius:10,

  }
})

  export default styles