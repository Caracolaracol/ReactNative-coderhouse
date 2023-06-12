import React from 'react'
import { View, Text, StyleSheet, Pressable, Image, ImageBackground } from 'react-native'

import colors from '../../theme/colors'
import { useIsFocused, useNavigationState, useRoute } from '@react-navigation/native'

const NavBar = ({navigation, state}) => {

  const styleColors = (number) => {
    return state.index == number ?  {...styles.titleSection, color: colors.red_a} : {...styles.titleSection, color:colors.violet_dark}
  }

  return (
    <ImageBackground source={require('../../assets/bg2.png')} style={styles.navBarContainer}>
      <View style={styles.btnContainer}>
        <Pressable onPress={() => navigation.navigate('Explore')} style={styles.pressable}>
          <View style={styles.iconContainer}>
            <Image source={require('../../assets/icons/explorelogo.png')} style={{width:30, height:30}}/>
          </View>
          <View style={styles.textContainer}>

          <Text style={styleColors(0)}>explore</Text>
          </View>
        </Pressable>

      </View>
      <View style={styles.btnContainer}>
        <Pressable onPress={() => navigation.navigate('Favourites')} style={styles.pressable}>
          <View style={styles.iconContainer}>
          <Image source={require('../../assets/icons/favourites.png')} style={{width:30, height:30}}/>
          </View>
          <View style={styles.textContainer}>

          <Text style={styleColors(1)}>favourites</Text>
          </View>
        </Pressable>
      </View>
      <View style={styles.btnContainer}>
        <Pressable onPress={() => navigation.navigate('Notifications')} style={styles.pressable}>
          <View style={styles.iconContainer}>
            <Image source={require('../../assets/icons/notifications.png')} style={{width:30, height:30}}/>
          </View>
          <View style={styles.textContainer}>

          <Text style={styleColors(2)}>notifications</Text>
          </View>
        </Pressable>

      </View>
      <View style={styles.btnContainer}>
        <Pressable onPress={() => {navigation.navigate("Profile")}} style={styles.pressable}>
          <View style={styles.iconContainer}>
            <Image source={require('../../assets/icons/profile.png')} style={{width:30, height:30}}/>
          </View>
          <View style={styles.textContainer}>
            <Text style={styleColors(3)}>profile</Text>
          </View>
        </Pressable>
      </View>
    </ImageBackground>
  )
}

export default NavBar

const styles = StyleSheet.create({
    btnContainer: {
        marginBottom:6,
        marginTop:2
    },
    pressable: {
      flexDirection:'column',
      alignItems:'center'
    },  
    iconContainer: {

    },
    textContainer:{ 

    },
    navBarContainer: {
      flexDirection:'row',
      width: '100%',
      borderTopColor:'#caa59e',
      borderTopWidth:0.3,
      borderStyle:'dashed',
      backgroundColor:colors.yellow,
      justifyContent:'space-evenly',
      alignItems:'flex-end',
      shadowColor: "black",
      shadowOffset: {
        width: 0,
        height: 0,
      },
      shadowOpacity: 1,
      shadowRadius: 10,
      elevation: 5,
      zIndex:4
    },

    titleSection: {
      fontFamily: 'lost-ages', 
      fontSize: 16,
    }
})