import React, { useEffect, useState } from 'react'
import { View, Text, Image, ImageBackground, TouchableOpacity, Pressable } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';

import {  useSelector } from 'react-redux';

import favouritesStyles from './favouritesStyles';

import likeLogo from "../../assets/likebtn.png"
import likeLogoWhite from "../../assets/likebtnwhite.png"


export default function FavouritesCard({ otherStyles, bookingUbication, cardDescription, cardImages,onHandleAdd, onHandleRemove,id, item, navigation }) {
  const [isFavourite, setIsFavourite] = useState(false)
  const favourites = useSelector((state) => state.favourites.data)

  useEffect(() => {
    // DETECT IF THE BOOKING IS FAVORITED BY THE USER IN ORDER TO ADD THE "ADD" BTN OR "REMOVE" BTN FROM FAVOURITES
    if (favourites == undefined){
    } else {
      let conditionFav = favourites.includes(id) 
      if (conditionFav) {
        setIsFavourite(true)
      } else {
        setIsFavourite(false)
      }
    }
  },[favourites])

  return (
    <Pressable onPress={() => navigation.navigate('ItemDetail', { item: item })} style={{ ...favouritesStyles.container, ...otherStyles }}  >
      <View style={favouritesStyles.imageContainer}>
        {cardImages != "" ? (
          <ImageBackground source={{uri:cardImages[0].url}} style={favouritesStyles.imageList}>
            <LinearGradient
              colors={["#00000000", "rgba(0, 0, 0, 0.52)"]}
              style={{ height: "100%", width: "100%" }}
              start={{ x: 0.5, y: 0.1 }}
              end={{ x: 0.5, y: 1 }}
              locations={[0.8, 2]}
            >
              <View>
                {isFavourite ? <TouchableOpacity
                  style={favouritesStyles.addLikeBtn}
                  onPress={() => onHandleRemove(id)}>
                  <Image
                    source={likeLogoWhite}
                    style={favouritesStyles.likedImage}
                  />
                </TouchableOpacity> : <TouchableOpacity
                  onPress={() => onHandleAdd(id)}
                  style={favouritesStyles.addLikeBtn}
                >
                  <Image
                    source={likeLogo}
                    style={favouritesStyles.likeImage}

                  />
                </TouchableOpacity>
                }

              </View>
            </LinearGradient>
          </ImageBackground>
        ) : (
          ""
        )}
      </View>
      <View style={favouritesStyles.itemBody}>
        <View style={favouritesStyles.itemBodyInfo}>
          <View style={favouritesStyles.ubicationContainer}>
            <Text style={{ fontSize: 29, fontFamily: 'lost-ages' }}>{bookingUbication}</Text>
          </View>
          <View style={favouritesStyles.firstdescriptionContainer}>
            <Text style={{ fontSize: 17, fontFamily: 'lost-ages', opacity: 0.7 }}>
              {cardDescription}
            </Text>
          </View>
          <View style={favouritesStyles.priceContainer}>
            <Text style={{ fontSize: 14, fontFamily: 'WickedGrit' }}>${item.price_per_night} </Text>
            <Text style={{ fontSize: 18, fontFamily: 'lost-ages' }}>per night</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
}
