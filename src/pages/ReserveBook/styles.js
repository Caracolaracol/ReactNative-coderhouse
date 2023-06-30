import { Platform, StatusBar, StyleSheet } from "react-native"
import colors from "../../theme/colors";

const styles = StyleSheet.create({
  AreaViewContainer: {
    flex:1,
    backgroundColor:colors.white_a,
    flexDirection:'column',
    justifyContent:'space-around',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  container:{
    backgroundColor:colors.yellow,
    flex:1,
    alignSelf:'center',
    paddingHorizontal:'6.5%',
    minWidth:'100%',
    marginBottom:10,
    paddingVertical:10,
    
  },
  selectDate: {
    backgroundColor:colors.orange,
    width:'30%',
    borderRadius:6,
    alignItems:'center',
    alignSelf:'center',
    padding:5
  },  
  innerTextImage: {
    flexDirection:'row',
    justifyContent:'flex-start',
    gap:15

  },
  input: {
    backgroundColor:colors.orange,
    borderRadius:7,
    width:'15%',
    padding:5,
    fontSize:20
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
  },
  textDetail: {
    fontFamily:'lost-ages',
    fontSize:24
  },

  bookReserveBtn:{
    backgroundColor:colors.orange,
    borderRadius:5,
    alignSelf:'center',
    padding:5
  }
})

  export default styles