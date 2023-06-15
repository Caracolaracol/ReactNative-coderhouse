import React, { useEffect, useState } from 'react'
import { View, Text, Pressable,TextInput, Image } from 'react-native'

import * as FileSystem from 'expo-file-system'

import { FIREBASE_AUTH } from '../../services/firebaseConfig'

import { useDispatch, useSelector} from 'react-redux'
import { signOut } from '../../store/features/authSlice'
import { addPlace } from '../../store/features/placesSlice'

import LayoutProfile from '../../Layout/LayoutProfile'
import colors from '../../theme/colors'
import ImageSelector from '../../components/ImageSelector/Index'
import LocationSelector from '../../components/LocationSelector.jsx'

import styles from './styles'
import { fetchAddress, insertAddress } from '../../db'
import Map from '../../constants/Map'
import MyBooking from './MyBooking'

const Profile = () => {
  const userId = useSelector(state => state.auth.userId)
  const place = useSelector(state => state.places.places)
  const dispatch = useDispatch()
  const [title, setTitle] = useState("")
  const [image, setImage] = useState()
  const [location, setLocation] = useState()
  const [hasProfilePic, setHasProfilePic] = useState(false)
  const [hasLocation, setHasLocation] = useState(false)
  const [hasSavedBooking, setHasSavedBooking] = useState(false)
  const [myBookingData, setMyBookingData] = useState()

  useEffect(()=> {
    const fetchBooking = async () => { //hace el fetch de datos de la db de SQLite.
      try {
        const result = await fetchAddress()
        if (result.rows.length != 0) {
          setHasSavedBooking(true)
          setMyBookingData(result.rows._array)
            /* dispatch(addPlace({title:result.rows._array[0].title, image: result.rows._array[0].image, lat:result.rows._array[0].lat, lng:result.rows._array[0].lng})) */
        }
      } catch (error){
        console.log(`error message:${error.message}`)
        throw error
      }
    }
    fetchBooking()
  },[dispatch])

  const titleHandler = (text) => {setTitle(text)}

  const saveHandler = async () => { // SAVING BOOKING
    const fileName = image.split("/").pop()
    const Path = FileSystem.documentDirectory + fileName
    try {
      FileSystem.moveAsync({
        from: image,
        to: Path
      }).then(() => {
        /* locating ? dispatch(addPlace({title:title,image:Path,lat:lat, lng:lng})) : '' */
        insertAddress(title, Path, location.lat, location.lng )
      })
    } catch(error) {
      console.log(error.message)
      throw error
    }
  }

  const signOutHandler = () => { // SIGNOUT APP
    FIREBASE_AUTH.signOut(FIREBASE_AUTH).then(() => {
      dispatch(signOut())
    })
  }

  return (
    <LayoutProfile>
      <View style={{ width: '100%', height: 44 }}></View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Profile</Text>
        <Text>Your user Id is: {userId}</Text>
      </View>

      <View style={styles.addBookingContainer}>
        <Text style={styles.title}>Your Location</Text>
        {
          hasSavedBooking ?  <MyBooking myBookingData={myBookingData} />: (
            <>
              <View style={styles.inputTitleContainer}>
                <Text style={styles.addTitle}>Add your location:</Text>
                <View style={styles.inputTitle}>
                  <TextInput value={title} onChangeText={titleHandler} placeholder='Name of your location' />
                </View>
              </View>
              <View>
                <Text style={styles.addTitle}>Add a picture of your place</Text>
                <ImageSelector onImage={setImage} setHasProfilePic={setHasProfilePic} />
                <LocationSelector onLocation={setLocation} setHasLocation={setHasLocation} />
                <Pressable style={(hasProfilePic && hasLocation) ? styles.btnSaveBooking : { ...styles.btnSaveBooking, backgroundColor: colors.white_a }} onPress={saveHandler} disabled={(hasProfilePic && hasLocation) ? false : true}>
                  <Text style={{ textAlign: 'center', fontFamily: 'lost-ages', fontSize: 22 }}>Save your booking</Text>
                </Pressable>
              </View>
            </>
          )
        }
      </View>


      <View style={styles.addBookingContainer}>
        <Text style={styles.title}>Log Out</Text>
        <Pressable style={{ backgroundColor: colors.orange, aspectRatio: 7, marginHorizontal: 30, borderRadius: 10, alignItems: 'center', flexDirection: 'column', justifyContent: 'center' }} onPress={signOutHandler}>
          <Text style={{ fontFamily: 'lost-ages', fontSize: 24, textAlign: 'center' }}>
            Logout
          </Text>
        </Pressable>
      </View>
    </LayoutProfile>
  )
}

export default Profile