import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

import Layout from '../../Layout/Index';
import Card from '../../components/Card';

import bookingList from '../../db/bookingList'
import { useDispatch, useSelector } from 'react-redux';
import { addFavourite } from '../../store/features/favouritesSlice';

const Explore = ({navigation}) => {
  const bookings = useSelector((state) => state.bookings.data)
  const favourites = useSelector((state) => state.favourites.data)
  const token = useSelector((state) => state.auth.token)
  const id = useSelector((state) => state.auth.userId)
  const [data, setData] = useState([])  
  const dispatch = useDispatch()

  // ADD TO FAVOURITES
  const onHandleAdd = (id) => {
    let idFound = data.find((el) => el.id === id)
    dispatch(addFavourite(idFound.id))
    console.log(idFound)
  }

  useEffect(() => {
    setData(bookingList)
    console.log(`token:${token},id:${id}`)
    console.log(favourites)
},[favourites])



  return (
    <Layout>
      {bookings && <SafeAreaView style={{flex: 1}}><FlatList
            data={bookings}
            renderItem={({ item, index }) => (
              <Card
                key={item.key}
                id={item.id}
                bookingUbication={item.booking_ubication}
                cardDescription={item.card_description}
                cardImages={item.cardImages}
                navigation={navigation}
                item={item}
                onHandleAdd={onHandleAdd}
              />
            )}
            keyExtractor={(item) => item.key}
            ListFooterComponent={<View></View>}
            ListHeaderComponent={
              <View>
              </View>
            }
            initialNumToRender={8}
          /></SafeAreaView>
          }
    </Layout>
  )
}

export default Explore


const styles = StyleSheet.create({
  favoriteBookingsTitle:{
      fontSize:17,
      paddingTop:10,
      textAlign:'center'
  },


})