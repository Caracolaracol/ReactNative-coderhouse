import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'

const NavBar = ({onHandleExplore, onHandleFavs, onHandleNotifications, onHandleProfile}) => {


  return (
    <>
      <View style={styles.btnContainer}>
        <Pressable onPress={onHandleExplore}>
          <Text  style={{fontFamily: 'MORGANA', fontSize:24, color:'#493757'}}>explore</Text>
        </Pressable>

      </View>
      <View style={styles.btnContainer}>
      <Pressable onPress={onHandleFavs}>

        <Text style={{fontFamily: 'MORGANA', fontSize:24, color:'#493757'}}>favourites</Text>
      </Pressable>
      </View>
      <View style={styles.btnContainer}>
      <Pressable onPress={onHandleNotifications}>

        <Text style={{fontFamily: 'MORGANA', fontSize:24, color:'#493757'}}>notifications</Text>
      </Pressable>

      </View>
      <View style={styles.btnContainer}>
      <Pressable onPress={onHandleProfile}>

        <Text style={{fontFamily: 'MORGANA', fontSize:24, color:'#493757'}}>profile</Text>
      </Pressable>
      </View>
    </>
  )
}

export default NavBar

const styles = StyleSheet.create({
    btnContainer: {
        marginBottom:7
        
    }
})