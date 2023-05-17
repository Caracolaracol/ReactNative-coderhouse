import { View, Text, Image, ImageBackground, TouchableOpacity, Pressable, StyleSheet } from 'react-native'
import React, { useState } from 'react'

import { LinearGradient } from 'expo-linear-gradient';



import styles from './styles'
import likeLogo from "../../assets/likebtn.png"

export default function Card({ otherStyles, bookingUbication, cardDescription, cardImages, onHandleModalDelete, id, item, navigation }) {

  return (
    <Pressable onPress={() => navigation.navigate('ItemDetail', {item:item})}  style={{ ...styles.container, ...otherStyles}}  >
      <View style={styles.imageContainer}>
        {cardImages != "" ? (
          <ImageBackground source={cardImages} style={styles.imageList}>
            <LinearGradient
              colors={["#00000000", "rgba(0, 0, 0, 0.52)"]}
              style={{ height: "100%", width: "100%" }}
              start={{ x: 0.5, y: 0.1 }}
              end={{ x: 0.5, y: 1 }}
              locations={[0.8, 2]}
            >
              <View>
              <TouchableOpacity
            onPress={() => onHandleModalDelete(id)}
            style={styles.removeLikeBtn}
          >
                <Image 
                source={likeLogo}
                style={styles.likeImage}
                
                />
                </TouchableOpacity> 
              </View>
            </LinearGradient>
          </ImageBackground>
        ) : (
          ""
        )}
      </View>
      <View style={styles.itemBody}>
        <View style={styles.itemBodyInfo}>
          <View style={styles.ubicationContainer}>
            <Text style={{ fontSize: 29, fontFamily:'lost-ages' }}>{bookingUbication}</Text>
          </View>
          <View style={styles.firstdescriptionContainer}>
            <Text style={{ fontSize: 17, fontFamily:'lost-ages', opacity: 0.7 }}>
              {cardDescription}
            </Text>
          </View>
          <View style={styles.priceContainer}>
            <Text style={{fontSize:14, fontFamily:'WickedGrit' }}>$20.000 </Text>
            <Text style={{fontSize:18, fontFamily:'lost-ages'}}>per night</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
}
