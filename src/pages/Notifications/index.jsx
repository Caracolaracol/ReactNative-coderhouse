import { View, Text, Image } from 'react-native'
import React from 'react'
import Layout from '../../Layout/Index'

const Notifications = () => {
  return (
    <Layout>
      <View style={{flexDirection:'column', justifyContent:'center', alignContent:'center', flex:1, alignItems:'center'}}>

      <View>
        <Image source={require('../../assets/icons/bell.png')} style={{ width: 30, height: 30 }} />
      </View>
      <View>
        <Text>No notifications yet</Text>
      </View>
      </View>
    </Layout>
  )
}

export default Notifications