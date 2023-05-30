import { View, Text, ImageBackground, StyleSheet, KeyboardAvoidingView, ScrollView, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import NavBar from '../components/NavBar'
import Header from '../components/Header'
import { StatusBar } from 'expo-status-bar'
import colors from '../theme/colors'

const Layout = ({children}) => {

  return (
      <View style={styles.container}>
        <Header />
        <View style={styles.bodyContainer}>
          {children}
        </View>
      </View>
  )
}

export default Layout

const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor:colors.white,
  
    },
    bodyContainer: {
      flex:1,
      zIndex:-10
    }
  });
  