import { View, Text, Pressable } from 'react-native'
import React from 'react'

import { FIREBASE_AUTH } from '../../services/firebaseConfig'
import { useSelector } from 'react-redux'
import LayoutProfile from '../../Layout/LayoutProfile'
import colors from '../../theme/colors'

const Profile = () => {
  const userId = useSelector(state => state.auth.userId)
  const userData = useSelector(state => state.auth.user)
console.log(userData)
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
      <Pressable style={{backgroundColor:colors.orange, aspectRatio:7, marginHorizontal:30, borderRadius:10}} onPress={() => FIREBASE_AUTH.signOut(FIREBASE_AUTH)}>
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