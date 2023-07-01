import React, { useEffect, useState } from 'react'
import { View, Text, Image, ImageBackground, TouchableOpacity, StyleSheet, Pressable, SafeAreaView, StatusBar, ScrollView } from 'react-native'
import styles from "./styles";
import Images from '../../components/ItemDetail/Images'
import colors from '../../theme/colors'
import Characteristics from '../../components/ItemDetail/Characteristics'
import { useDispatch, useSelector } from 'react-redux';
import { addFavourite, removeFavourite } from '../../store/features/favouritesSlice';
import { ref, update } from 'firebase/database';
import { DB_TORCHND } from '../../services/firebaseConfig';

const ItemDetail = ({route, navigation}) => {
  const favourites = useSelector((state) => state.favourites.data)
  const bookings = useSelector((state) => state.bookings.data)
  const [bookingData, setBookingData] = useState(null)
  const [isFavourite, setIsFavourite] = useState(false)
  const iduser = useSelector((state) => state.auth.userId)
  const dispatch = useDispatch()

  useEffect(() => {
    // loading booking selected
    const bookingFound = bookings.find(el => el.id == route.params.id)
    setBookingData(bookingFound)
    if (favourites == undefined){
    } else {
      let conditionFav = favourites.includes(route.params.id) 
      if (conditionFav) {
        setIsFavourite(true)
      } else {
        setIsFavourite(false)
      }
    }
  },[favourites, bookingData, bookings])

  const onHandleRemove = (id) => {
    dispatch(removeFavourite({id}))
  }

  const onHandleAdd = (id) => {
    dispatch(addFavourite({id}))
    // update favourites to the database
    if(favourites == undefined) {
      update(ref(DB_TORCHND, 'users/' + iduser), {
        favourites:[id]
      })
    } else {
      update(ref(DB_TORCHND, 'users/' + iduser), {
        favourites:[...favourites, id]
      })
    }
  }

  return (
    <>
      {bookingData &&
    <SafeAreaView styles={styles.container}>
      
      <ScrollView styles={styles.detailDataContainer}>
          <Images cardImages={bookingData.cardImages} onHandleRemove={onHandleRemove} id={bookingData.id} isFavourite={isFavourite} onHandleAdd={onHandleAdd}/>
          <View style={styles.titleContainer}>
            <Text style={{fontFamily:'lost-ages', fontSize:32}}>{bookingData.card_description}</Text>
          </View>
          <Characteristics host={bookingData.host} />
          <View style={styles.descriptionContainer}>
            <Text style={{fontFamily:'lost-ages', fontSize:24}}>About this place</Text>
            <Text style={{fontFamily:'lost-ages', fontSize:16, letterSpacing:1.6, lineHeight:20}}>{bookingData.detail_description}</Text>
          </View>
          <View style={styles.hostDataContainer}>
            <View style={{flex:1}}>
              <Text style={{fontFamily:'lost-ages', fontSize:24}}>Meet your host</Text>
              <Text style={{fontFamily:'lost-ages', fontSize:18}}>{bookingData.host}</Text>
            </View>
            <View style={styles.hostImageContainer}>
              <Image source={bookingData.host_image} style={styles.hostImage} resizeMode='contain' />
            </View>
           
          </View>
          <View style={{width:'100%', aspectRatio:5}}>
          </View>
      </ScrollView>
      <ImageBackground source={require('../../assets/bg2.png')} style={styles.reserveContainer}>
        <View style={{flexDirection:'row', gap:7}}>
          <Text style={{fontFamily:'lost-ages', fontSize:20}}>Price</Text>
          <Text style={{fontFamily:'WickedGrit', fontSize:18}}>${bookingData.price_per_night}</Text>
          <Text style={{fontFamily:'lost-ages', fontSize:20}}>/night</Text>
        </View>
        <Pressable  onPress={() => navigation.navigate('ReserveBook', { item: bookingData, id:route.params.id })} style={{backgroundColor:colors.red_a, padding:10, borderRadius:10}}>
          <Text style={{fontFamily:'lost-ages', fontSize:20}}>Reserve</Text>
        </Pressable>
      </ImageBackground>
      </SafeAreaView>
    }
    </>
  )
}

export default ItemDetail

