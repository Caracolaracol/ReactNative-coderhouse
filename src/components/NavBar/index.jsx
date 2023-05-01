import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const NavBar = () => {
  return (
    <>
      <View style={styles.btnContainer}>
      <Text>Explora</Text>

      </View>
      <View style={styles.btnContainer}>

      <Text>Favoritos</Text>
      </View>
      <View style={styles.btnContainer}>
      <Text>Notificaciones</Text>

      </View>
      <View style={styles.btnContainer}>

      <Text>Perfil</Text>
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