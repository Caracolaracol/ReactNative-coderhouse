import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const NavBar = () => {
  return (
    <>
      <View style={styles.btnContainer}>
      <Text  style={{fontFamily: 'charlotte', fontSize:16}}>Explora</Text>

      </View>
      <View style={styles.btnContainer}>

      <Text style={{fontFamily: 'charlotte', fontSize:16}}>Favoritos</Text>
      </View>
      <View style={styles.btnContainer}>
      <Text style={{fontFamily: 'charlotte', fontSize:16}}>Notificaciones</Text>

      </View>
      <View style={styles.btnContainer}>

      <Text style={{fontFamily: 'charlotte', fontSize:16}}>Perfil</Text>
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