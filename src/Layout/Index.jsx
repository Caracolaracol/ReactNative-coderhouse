import { View,StyleSheet,} from 'react-native'
import React from 'react'
import Header from '../components/Header'
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
  