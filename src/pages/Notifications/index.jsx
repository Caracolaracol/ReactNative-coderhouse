import { View, Text, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import Layout from '../../Layout/Index'
import { useSelector } from 'react-redux'
import colors from '../../theme/colors'

const Notifications = ({route}) => {
  const bookings = useSelector((state) => state.bookings.data)
  const [notifications, setNotifications] = useState(null)
  

  useEffect(() => {

    // Push notifications is not implemented for now, but I did this code for showing a notification for the recent booking reserved in the Notifications bottom tab.
    if (route.params.id) {
      const placeFound = bookings.find(el => el.id == route.params.id)
      if (!notifications) {
        setNotifications([placeFound])
        console.log(`placefound:${placeFound}`)
      }  else if (notifications.includes(placeFound)) {
        console.log('already in notifications')
      } else {
        setNotifications([...notifications, placeFound])
      }
    }
  },[bookings, route.params.id])

  return (
    <Layout>
      {
      notifications ? (
        notifications.map((element) => (
          <View key={element.id} style={{ flexDirection: 'row', width: '100%', backgroundColor: colors.yellow, marginTop: 10, justifyContent: 'space-around' }}>
              <Image source={element.host_image} style={{ width: 130, aspectRatio: 1, resizeMode: 'cover' }} />
              <Text style={{ width: 200, fontFamily: 'lost-ages', fontSize: 18 }}>Congratz! You have just reserved booking at my place. I will be your host and here I will send you notifications about your adventure!. </Text>
            </View>
            ))
      ) : (
        <View style={{ flexDirection: 'column', justifyContent: 'center', alignContent: 'center', flex: 1, alignItems: 'center' }}>
          <View>
            <Image source={require('../../assets/icons/bell.png')} style={{ width: 30, height: 30 }} />
          </View>
          <View>
            <Text>No notifications yet</Text>
          </View>
        </View>
      )}
    </Layout>
  )
}

export default Notifications