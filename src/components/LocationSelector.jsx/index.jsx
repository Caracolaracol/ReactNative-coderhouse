import { useNavigation } from "@react-navigation/native"
import { useState } from "react"
import { Button, Text, View } from "react-native"
import colors from "../../theme/colors"
import * as Location from 'expo-location'
import MapPreview from "../MapPreview"

const LocationSelector = (props) => {
    const [pickedLocation, setPickedLocation] = useState()
    const [isLocating, setIsLocating] = useState(false)
 
    const veryPermissions = async () => {
        const {status} = await Location.requestForegroundPermissionsAsync()
        if(status !== "granted") {
            Alert.alert("PermisosInsuficientes", "necesitamos permisos par l aubicacion", [{text:"Ok"}])
            return false
        }
        return true
    }

    const handleGetLocation = async () => {
        try {
        setIsLocating(true)

        const isLocationOk = await veryPermissions()
        if(!isLocationOk) return
        const location = await Location.getCurrentPositionAsync()
        console.log(`location obtained : ${location.coords.latitude} ${location.coords.longitude}`)
        setPickedLocation({
            lat:location.coords.latitude,
            lng:location.coords.longitude
        })
        props.onLocation({
            lat:location.coords.latitude,
            lng:location.coords.longitude
        })
        props.setHasLocation(true)
        } catch(error) {
            Alert.alert(
                'No se pudo',
                'Intente denuevo',
                [{text: 'Okay'}]
            )

        }
        setIsLocating(false)
    }

    return (
        <View style={{marginBottom:20, height:300}}>
            <MapPreview location={pickedLocation}>
                {isLocating ? <Text>Procesando Ubicación...</Text> : <Text style={{fontFamily:'lost-ages', fontSize:18}}> Seleccióna la ubicación:</Text> }
            </MapPreview>
            <Button 
            title="Get Ubication"
            color={colors.orange}
            onPress={handleGetLocation}/>
        </View>
    )
}

export default LocationSelector