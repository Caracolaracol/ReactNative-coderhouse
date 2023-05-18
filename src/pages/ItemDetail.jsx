import React from 'react'
import { View, Text, Image, ImageBackground, TouchableOpacity, StyleSheet, Pressable, SafeAreaView, StatusBar, ScrollView } from 'react-native'

import Images from '../components/ItemDetail/Images'
import colors from '../theme/colors'
import Characteristics from '../components/ItemDetail/Characteristics'

const ItemDetail = ({route}) => {

  return (
    <SafeAreaView styles={styles.container}>
      <ScrollView styles={styles.detailDataContainer}>
          <Images cardImages={route.params.item.cardImages}/>
          <View style={styles.titleContainer}>
            <Text style={{fontFamily:'lost-ages', fontSize:32}}>{route.params.item.card_description}</Text>
          </View>
          <Characteristics host={route.params.item.host} />
          <View style={styles.descriptionContainer}>
            <Text style={{fontFamily:'lost-ages', fontSize:24}}>About this place</Text>
            <Text>{route.params.item.detail_description}</Text>
          </View>
          <View style={styles.hostDataContainer}>
            <Text style={{fontFamily:'lost-ages', fontSize:24}}>Meet your host</Text>
            <Text>{route.params.item.host}</Text>
          </View>
          <View style={{width:'100%', aspectRatio:5}}>
          </View>
      </ScrollView>
      <ImageBackground source={require('../assets/bg2.png')} style={styles.reserveContainer}>
        <View style={{flexDirection:'row', gap:10}}>
          <Text style={{fontFamily:'lost-ages', fontSize:20}}>Price</Text>
          <Text style={{fontFamily:'WickedGrit', fontSize:18}}>$20.000</Text>
          <Text style={{fontFamily:'lost-ages', fontSize:20}}>/night</Text>
        </View>
        <Pressable style={{backgroundColor:colors.red_a, padding:10, borderRadius:10}}>
          <Text style={{fontFamily:'lost-ages', fontSize:20}}>Reserve</Text>
        </Pressable>
      </ImageBackground>
    </SafeAreaView>
  )
}

export default ItemDetail


const styles = StyleSheet.create({
  reserveContainer: {
    position:'absolute',
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center',
    backgroundColor:colors.white,
    width:'100%',
    aspectRatio:7,
    bottom:0,
    shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 0,
      },
      shadowOpacity: 0.95,
      shadowRadius: 10,
      elevation: 5,
  },
  titleContainer:{
    borderWidth: 0,
    padding:10
  },
  descriptionContainer:{
    marginTop:20,
    marginHorizontal:20,
    borderWidth: 0,
  },
  hostDataContainer: {
    marginTop:20,
    borderWidth: 0,
    marginHorizontal:20,
  }
})