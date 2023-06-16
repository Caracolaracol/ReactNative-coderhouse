import { useState } from 'react'
import { Alert, Button, Image, StyleSheet, Text, View } from 'react-native'
import  * as ImagePicker from 'expo-image-picker'

import colors from '../../theme/colors'

const ImageSelector = (props) => {
    const [pickedUri, setPickedUri] = useState()

    const verifyPermissions = async () => {
        const { status } = await ImagePicker.requestCameraPermissionsAsync()

        if(status != 'granted') {
            Alert.alert("Permits insufficients", "We need to allow using the camera for the app",[{text:"Ok"}] )
            return false
        }
        return true
    }

    const handlerTakeImage = async () => {
        const hasPermission = await verifyPermissions()
        if (!hasPermission) return

        const image = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            aspect: [16, 9],
            quality: 0.8

        })
        setPickedUri(image.assets[0].uri)
        props.onImage(image.assets[0].uri)
        props.setHasProfilePic(true)
    }

    return (
        <View style={styles.container}>
            <View style={styles.preview}>
                {!pickedUri ? (
                    <Text>No hay imagen seleccionada...</Text>
                ) : (<Image style={styles.image} source={{uri:pickedUri}} />)}
            </View>
            <Button
                title='tomar foto'
                color={colors.orange}
                onPress={handlerTakeImage}
            />
        </View>
    )
}

export default ImageSelector

const styles = StyleSheet.create({
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
        height: " 100%",
      },
})