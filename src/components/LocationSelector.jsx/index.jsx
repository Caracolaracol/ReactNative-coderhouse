import { useNavigation } from "@react-navigation/native"
import { useState } from "react"
import { Button, Text, View } from "react-native"
import colors from "../../theme/colors"
import * as Location from 'expo-location'
import MapPreview from "../MapPreview"

const LocationSelector = ({onLocation, setHasLocation, setLocating}) => {
    const navigation = useNavigation()
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
        setIsLocating(true)
        setLocating(true)
        const isLocationOk = await veryPermissions()
        if(!isLocationOk) return

        const location = await Location.getCurrentPositionAsync()
        console.log(`location obtained : ${location.coords.latitude} ${location.coords.longitude}`)
        setPickedLocation({
            lat:location.coords.latitude,
            lng:location.coords.longitude
        })
        onLocation({
            lat:location.coords.latitude,
            lng:location.coords.longitude
        })
        setHasLocation(true)
        setLocating(false)
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