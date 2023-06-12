import React, { useState } from 'react'
import { View, Text, Pressable,TextInput } from 'react-native'

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

const Profile = () => {
  const userId = useSelector(state => state.auth.userId)
  const dispatch = useDispatch()
  const [title, setTitle] = useState("")
  const [image, setImage] = useState()
  const [location, setLocation] = useState()
  const [hasProfilePic, setHasProfilePic] = useState(false)

  const titleHandler = (text) => {setTitle(text)}

  const saveHandler = async () => { // SAVING BOOKING
    const fileName = image.split("/").pop()
    const Path = FileSystem.documentDirectory + fileName
    try {
      FileSystem.moveAsync({
        from: image,
        to: Path
      })
    } catch(error) {
      console.log(error.message)
      throw error
    }
    dispatch(addPlace({title, image: Path}))
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
        <View style={styles.inputTitleContainer}>
          <Text style={styles.addTitle}>Add your location:</Text>
          <View style={styles.inputTitle}>
            <TextInput value={title} onChangeText={titleHandler} placeholder='Name of your location' />
          </View>
        </View>
        <View>
          <Text style={styles.addTitle}>Add a picture of your place</Text>
          <ImageSelector onImage={setImage} setHasProfilePic={setHasProfilePic} />
          <LocationSelector onLocation={setLocation} />
          <Pressable style={hasProfilePic ? styles.btnSaveBooking : { ...styles.btnSaveBooking, backgroundColor: colors.white_a }} onPress={saveHandler} disabled={hasProfilePic ? false : true}>
            <Text style={{ textAlign: 'center', fontFamily: 'lost-ages', fontSize: 22 }}>Save your booking</Text>
          </Pressable>
        </View>
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