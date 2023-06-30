import { View,StyleSheet, ScrollView,} from 'react-native'
import React from 'react'
import colors from '../theme/colors'

const LayoutProfile = ({children}) => {

  return (
      <View style={styles.container}>
        <ScrollView style={styles.bodyContainer}>
          {children}
        </ScrollView>
      </View>
  )
}

export default LayoutProfile

const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor:colors.white,
  
    },
    bodyContainer: {
      flex:1,
      zIndex:-10,
    }
  });
  