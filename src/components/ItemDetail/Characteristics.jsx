import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import colors from '../../theme/colors'

const Characteristics = ({host}) => {
  return (
      <View>
          <Text style={{fontFamily:'lost-ages', fontSize:24}}>Room in a house. Host: {host}</Text>
          <View style={styles.characteristicsContainer} >
              <View style={styles.card}><Text style={styles.text}>two Beds</Text></View>
              <View style={styles.card}><Text style={styles.text}>Exclusive Bathroom</Text></View>
              <View style={styles.card}><Text style={styles.text}>Work area</Text></View>
              <View style={styles.card}><Text style={styles.text}>Shared Areas</Text></View>
          </View>
      </View>
  )
}

export default Characteristics

const styles = StyleSheet.create({
    characteristicsContainer:{
        flex:1,
        flexDirection:'row',
        flexWrap:'wrap',
        width:'100%',
        justifyContent:'center',
        gap:12
      },
    card: {
        backgroundColor:colors.yellow,
        paddingHorizontal:'5%',
        paddingVertical:20,
        maxWidth:'25%'
    },
    text: {
        fontFamily:'lost-ages'
    }
})