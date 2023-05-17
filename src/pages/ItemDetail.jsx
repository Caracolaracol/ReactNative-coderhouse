import React from 'react'
import { View, Text, Image, ImageBackground, TouchableOpacity, StyleSheet, Pressable, SafeAreaView, StatusBar, ScrollView } from 'react-native'

import Images from '../components/ItemDetail/Images'
import colors from '../theme/colors'

const ItemDetail = ({route}) => {

  return (
    <SafeAreaView styles={styles.container}>
      <ScrollView styles={styles.detailDataContainer}>
        <Images cardImages={route.params.item.cardImages}/>
        <View styles={styles.bodyDetailContainer}>
          <View style={styles.titleContainer}>
            <Text style={{fontFamily:'lost-ages', fontSize:32}}>{route.params.item.card_description}</Text>
          </View>
          <View style={styles.characteristicsContainer} >
            <Text>2 Beds</Text>
            <Text>Exclusive Bathroom</Text>
            <Text>Work area</Text>
            <Text>Shared Areas</Text>
          </View>
          <View style={styles.descriptionContainer}>
            <Text>About this place</Text>
            <Text>{route.params.item.detail_description}</Text>
          </View>
          <View style={styles.hostDataContainer}>
            <Text>Meet your host</Text>
            <Text>{route.params.item.host}</Text>
          </View>
        </View>
      </ScrollView>
      <View style={styles.reserveContainer}>
        <Text>Precio</Text>
        <Pressable>
          <Text>Reserve</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  )
}

export default ItemDetail


const styles = StyleSheet.create({
  container:{ 
    flex:1,
    flexDirection:'column',
    justifyContent:'space-between',
    backgroundColor:colors.white,
  },
  detailDataContainer:{
    flexDirection:'column',
    justifyContent:'space-between'
  },
  
  bodyDetailContainer:{
    height:400,
    flex:1,
    justifyContent:'center',
    borderWidth: 0,
  },

  reserveContainer: {
    position:'absolute',
    backgroundColor:colors.white,
    width:'100%',
    aspectRatio:6,
    bottom:0
  },
  titleContainer:{
    borderWidth: 0,
    padding:10
  },
  characteristicsContainer:{
    flex:1,
    flexDirection:'row',
    flexWrap:'wrap',
    gap:10
  },
  descriptionContainer:{
    borderWidth: 0,
  },
  hostDataContainer: {
    borderWidth: 0,
  }




})