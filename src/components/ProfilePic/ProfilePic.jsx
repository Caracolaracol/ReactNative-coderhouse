import { View, Text, StyleSheet, Image } from 'react-native'
import React, { useEffect } from 'react'
import colors from '../../theme/colors'
import { useSelector } from 'react-redux'

const ProfilePic = ({onProfilePic}) => {
    const places = useSelector(state => state.places.places)

/*     useEffect(() =>{
        console.log(places[0].Image)
        if (places[0].Image !== undefined) {
            onProfilePic(true)
            console.log(places[0].Image)
        }
    },[places])
   */
    return (
      <View style={styles.container}>
            <Text>{places[0].title}</Text>
          <View style={styles.preview}>
                <Image source={places[0].Image}/>
          </View>
      </View>
  )
}

export default ProfilePic

const styles = StyleSheet.create({
    container:{
        marginBottom:10
    },
    preview: {
        width:'100%',
        height:200,
        marginBottom:10,
        justifyContent:'center',
        alignItems:'center',
        borderWidth:1,
        borderColor:colors.orange_a
    }
})