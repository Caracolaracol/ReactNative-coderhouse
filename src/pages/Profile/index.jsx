import { View, Text, Pressable } from 'react-native'
import React from 'react'

import { FIREBASE_AUTH } from '../../services/firebaseConfig'
import { useDispatch, useSelector } from 'react-redux'
import LayoutProfile from '../../Layout/LayoutProfile'
import colors from '../../theme/colors'
import { signOut } from '../../store/features/authSlice'

const Profile = () => {
  const userId = useSelector(state => state.auth.userId)
  const userData = useSelector(state => state.auth.user)
  const dispatch = useDispatch()


  const signOutHandler = () => {
    FIREBASE_AUTH.signOut(FIREBASE_AUTH).then(() => {
      console.log('hola')
      dispatch(signOut())
    })
  }
  return (
    <LayoutProfile>
      <View style={{ flex: .2, width: '100%' }}></View>
      <View style={{ flex: 1, width: '100%' }}>
        <Text>Profile</Text>
      </View>
      <View style={{ flex: 1, width: '100%' }}>
        <Text>
          Your user Id is: {userId}
  
        </Text>
      </View>
      <View style={{flex:1, width:'100%'}}>
      <Pressable style={{backgroundColor:colors.orange, aspectRatio:7, marginHorizontal:30, borderRadius:10}} onPress={signOutHandler}>
        <View>
          <Text>
            Logout
          </Text>
        </View>
      </Pressable>
      </View>
    </LayoutProfile>
  )
}

export default Profile