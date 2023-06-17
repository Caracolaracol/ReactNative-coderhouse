import { View, ImageBackground, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'


import likeLogo from '../../assets/likebtn.png'

const Images = ({cardImages}) => {

    return (
    <View style={styles.imageContainer}>

        <ImageBackground source={{uri:cardImages[0].url}} >
            <LinearGradient
                colors={["#00000000", "rgba(0, 0, 0, 0.52)"]}
                style={{ height: "100%", width: "100%" }}
                start={{ x: 0.5, y: 0.1 }}
                end={{ x: 0.5, y: 1 }}
                locations={[0.8, 2]}
            >
                <View style={{ flex: 1 }}>
                    <TouchableOpacity
                        onPress={() => onHandleModalDelete(id)}
                    >
                        <Image
                            source={likeLogo}
                            style={styles.likeImage}
                        />
                    </TouchableOpacity>
                </View>
            </LinearGradient>
        </ImageBackground>
    </View>
    )
}

export default Images

const styles = StyleSheet.create({
    imageContainer: {
        width:'100%',
        aspectRatio:1.4,
        borderWidth: 0,
      },
    
      
    likeImage:{
        width: 40,
        height: 40,
        resizeMode: 'cover',
        alignSelf:'flex-end',
        margin:35,
        marginHorizontal:12,
        opacity:0.9
    },
    
})