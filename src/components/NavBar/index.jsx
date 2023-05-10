import { View, Text, StyleSheet, Pressable, Image } from 'react-native'
import React from 'react'
import { Path, Svg } from 'react-native-svg'

const NavBar = ({onHandleExplore, onHandleFavs, onHandleNotifications, onHandleProfile}) => {


  return (
    <>
      <View style={styles.btnContainer}>
        <Pressable onPress={onHandleExplore} style={styles.pressable}>
          <View style={styles.iconContainer}>
            <Image source={require('../../assets/icons/explore.png')} style={{width:30, height:30}}/>
          </View>
          <View style={styles.textContainer}>

          <Text style={{ fontFamily: 'lost-ages', fontSize: 16, color: '#493757'}}>explore</Text>
          </View>
        </Pressable>

      </View>
      <View style={styles.btnContainer}>
        <Pressable onPress={onHandleFavs} style={styles.pressable}>
          <View style={styles.iconContainer}>
          <Image source={require('../../assets/icons/favourites.png')} style={{width:30, height:30}}/>
          </View>
          <View style={styles.textContainer}>

          <Text style={{ fontFamily: 'lost-ages', fontSize: 16, color: '#493757'}}>favourites</Text>
          </View>
        </Pressable>
      </View>
      <View style={styles.btnContainer}>
        <Pressable onPress={onHandleNotifications} style={styles.pressable}>
          <View style={styles.iconContainer}>
            <Image source={require('../../assets/icons/notifications.png')} style={{width:30, height:30}}/>
          </View>
          <View style={styles.textContainer}>

          <Text style={{ fontFamily: 'lost-ages', fontSize: 16, color: '#493757'}}>notifications</Text>
          </View>
        </Pressable>

      </View>
      <View style={styles.btnContainer}>
        <Pressable onPress={onHandleProfile} style={styles.pressable}>
          <View style={styles.iconContainer}>
            <Image source={require('../../assets/icons/profile.png')} style={{width:30, height:30}}/>
          </View>
          <View style={styles.textContainer}>
            <Text style={{ fontFamily: 'lost-ages', fontSize: 16, color: '#493757'}}>profile</Text>
          </View>
        </Pressable>
      </View>
    </>
  )
}

export default NavBar

const styles = StyleSheet.create({
    btnContainer: {
        marginBottom:6,
  
    },
    pressable: {
      flexDirection:'column',
      alignItems:'center'
    },  
    iconContainer: {

    },
    textContainer:{ 

    }
})