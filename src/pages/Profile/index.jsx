import { View, Text, Pressable } from 'react-native'
import React from 'react'
import Layout from '../../Layout/Index'
import { FIREBASE_AUTH } from '../../services/firebaseConfig'

const Profile = () => {
  return (
    <Layout>
      <Text>Profile</Text>
      <Pressable onPress={() => FIREBASE_AUTH.signOut()}>
        <View>
        <Text>
        Logout
          </Text>
        </View>
      </Pressable>
    </Layout>
  )
}

export default Profile