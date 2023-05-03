import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column',
        maxWidth:'100%',
        padding:0,
        margin:10,
        marginHorizontal:20,
    },
    imageContainer:{
        flex:1,
    },
    itemBody: {
        flex:1,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        maxWidth:'100%'
    },
    itemBodyInfo: {
        flex:2
    },
    itemBodyRemove:{
        flex:1
    },
    ubicationContainer:{
        flex:1,
    },
    firstdescriptionContainer:{
        flex:1
    },
    priceContainer:{
        flex:1,
        flexDirection:"row"
    },
    imageList:{
       width:'100%',
       height:'100%',
       borderRadius:10,
       aspectRatio: 1,
       overflow: 'hidden'
    },
    likeImage:{
        width: 40,
        height: 40,
        resizeMode: 'cover',
        alignSelf:'flex-end',
        margin:10,
        marginHorizontal:12,
        opacity:0.9
    },
    removeLikeBtn: {
        width: 40,
        height: 40,
        resizeMode: 'cover',
        alignSelf:'flex-end',
        margin:10,
        marginHorizontal:12,
    }
})

export default styles