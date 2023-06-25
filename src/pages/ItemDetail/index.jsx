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
  const [isFavourite, setIsFavourite] = useState(false)
  const iduser = useSelector((state) => state.auth.userId)
  const dispatch = useDispatch()

  useEffect(() => {
    if (favourites == undefined){
    } else {
      let conditionFav = favourites.includes(route.params.item.id) 
      if (conditionFav) {
        setIsFavourite(true)
      } else {
        setIsFavourite(false)
      }
    }
  },[favourites])

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
    <SafeAreaView styles={styles.container}>
      <ScrollView styles={styles.detailDataContainer}>
          <Images cardImages={route.params.item.cardImages} onHandleRemove={onHandleRemove} id={route.params.item.id} isFavourite={isFavourite} onHandleAdd={onHandleAdd}/>
          <View style={styles.titleContainer}>
            <Text style={{fontFamily:'lost-ages', fontSize:32}}>{route.params.item.card_description}</Text>
          </View>
          <Characteristics host={route.params.item.host} />
          <View style={styles.descriptionContainer}>
            <Text style={{fontFamily:'lost-ages', fontSize:24}}>About this place</Text>
            <Text>{route.params.item.detail_description}</Text>
          </View>
          <View style={styles.hostDataContainer}>
            <View style={{flex:1}}>
              <Text style={{fontFamily:'lost-ages', fontSize:24}}>Meet your host</Text>
              <Text>{route.params.item.host}</Text>
            </View>
            <View style={styles.hostImageContainer}>
              <Image source={route.params.item.host_image} style={styles.hostImage} resizeMode='contain' />
            </View>
           
          </View>
          <View style={{width:'100%', aspectRatio:5}}>
          </View>
      </ScrollView>
      <ImageBackground source={require('../../assets/bg2.png')} style={styles.reserveContainer}>
        <View style={{flexDirection:'row', gap:10}}>
          <Text style={{fontFamily:'lost-ages', fontSize:20}}>Price</Text>
          <Text style={{fontFamily:'WickedGrit', fontSize:18}}>$20.000</Text>
          <Text style={{fontFamily:'lost-ages', fontSize:20}}>/night</Text>
        </View>
        <Pressable  onPress={() => navigation.navigate('ReserveBook', { item: route.params.item })} style={{backgroundColor:colors.red_a, padding:10, borderRadius:10}}>
          <Text style={{fontFamily:'lost-ages', fontSize:20}}>Reserve</Text>
        </Pressable>
      </ImageBackground>
    </SafeAreaView>
  )
}

export default ItemDetail

