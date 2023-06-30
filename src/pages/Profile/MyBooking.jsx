import { View, Text, StyleSheet, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import colors from '../../theme/colors'
import Map from '../../constants/Map'
import { fetchAddress } from '../../db'

const MyBooking = () => {
    const [myBookingData, setMyBookingData] = useState()
    const [map, setMap] = useState()

    useEffect(()=> {
        const fetchBooking = async () => {
          try {
            const result = await fetchAddress()
            if (result.rows.length != 0) {
              setMyBookingData(result.rows._array)
              const mapPreviewUrl =`https://maps.googleapis.com/maps/api/staticmap?center=${result.rows._array[0].lat},${result.rows._array[0].lng}&zoom=13&size=600x300&maptype=roadmap&markers=color:blue%7Clabel:S%7C${result.rows._array[0].lat},${result.rows._array[0].lng}&key=${Map.API_KEY}`
                setMap(mapPreviewUrl)
            }
          } catch (error){
            console.log(`error message:${error.message}`)
            throw error
          }
        }
        fetchBooking()
      },[])

    return (
        <>
            {
                
                myBookingData &&
                (
                <>
                <View style={styles.inputTitleContainer}>
                <Text style={styles.addTitle}>{myBookingData[0].title}</Text>
            </View>
            <View style={styles.container}>
                <View style={styles.preview}>
                    <Image style={styles.image} source={{ uri: myBookingData[0].image }} />

                </View>
            </View>
            <View style={styles.mapPreview}>
                <Image style={styles.mapImage} source={{ uri: map }} />
            </View>
            </>)
            }
        </>
    )
}

export default MyBooking

const styles = StyleSheet.create({

    inputTitleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    },
    addTitle: {
        fontFamily: 'lost-ages',
        fontSize: 18
    },



    container: {
        marginBottom: 50
    },
    preview: {
        width: '100%',
        height: 200,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: colors.orange_a
    },
    image: {
        width: "100%",
        height: "100%",
    },



    mapPreview: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    mapImage: {
        width: '100%',
        height: 200,
    },


})