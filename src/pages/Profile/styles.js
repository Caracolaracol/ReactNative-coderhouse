import { StyleSheet } from "react-native";
import colors from "../../theme/colors";


const styles = StyleSheet.create({
    titleContainer:{
        width: '100%',
        height: 90,
        backgroundColor:colors.yellow,
        marginVertical:10,
        paddingHorizontal:10
    },
    title: {
        fontFamily:'MORGANA',
        fontSize:44,
        color:colors.violet
    },
    addBookingContainer:{
        width: '100%',
        marginVertical:10, 

        backgroundColor:colors.yellow,
        paddingHorizontal:10,
    },


    mapPreview: {
        justifyContent:'center',
        alignItems:'center'
    },
    mapImage: {
        width:'100%',
        height:200,
    },


    container:{
        marginBottom:50
    },
    preview: {
        width:'100%',
        height:200,
        marginBottom:10,
        justifyContent:'center',
        alignItems:'center',
        borderWidth:1,
        borderColor:colors.orange_a
    },
    image: {
        width: "100%",
        height: "100%",
      },




    inputTitleContainer:{
        flexDirection:'row',
        alignItems:'center',
        gap:10  
    },
    addTitle:{
        fontFamily:'lost-ages',
        fontSize:18
    },
    inputTitle:{
        backgroundColor:colors.white,
        width:'40%',
        borderRadius:6,
        borderWidth:1,
        borderColor:colors.violet_dark,
    },




    btnSaveBooking:{
        marginVertical:20, 
        width:'80%',
        backgroundColor:colors.orange,
        padding:10,
        borderRadius:6,
        alignSelf:'center'
    }
})

export default styles