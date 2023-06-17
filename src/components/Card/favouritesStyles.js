import { StyleSheet } from "react-native";

const favouritesStyles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'row',
        maxWidth:'100%',
        padding:0,
        margin:10,
        marginHorizontal:20,
        gap:5
    },
    imageContainer:{
        flex:1,
    },
    itemBody: {
        flex:1.8,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        maxWidth:'100%',
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
        flexDirection:"row",
        alignContent:'center',
        alignItems:'center'
    },
    imageList:{
       width:'100%',
       height:'100%',
       borderRadius:10,
       aspectRatio: 1,
       overflow: 'hidden'
    },
    likeImage:{
        width: 30,
        height: 30,
        resizeMode: 'cover',
        alignSelf:'flex-end',
        margin:0,
        marginHorizontal:2,
        opacity:0.9,
        backgroundColor:'#7C798068',
        borderRadius:10
    },
    likedImage: {
        width: 30,
        height: 30,
        resizeMode: 'cover',
        alignSelf:'flex-end',
        margin:0,
        marginHorizontal:2,
        opacity:1,
        backgroundColor:'#7C798068',
        borderRadius:10,
    },
    addLikeBtn: {
        width: 30,
        height: 30,
        resizeMode: 'cover',
        alignSelf:'flex-end',
        margin:10,
        marginHorizontal:12,
        
    }
})

export default favouritesStyles