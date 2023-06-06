import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

import Layout from '../../Layout/Index';
import Card from '../../components/Card';

import bookingList from '../../db/bookingList'
import { useDispatch, useSelector } from 'react-redux';
import { addFavourite, getFavourites } from '../../store/features/favouritesSlice';
import { DB_TORCHND } from '../../services/firebaseConfig';
import { child, onValue, push, ref, set, update } from 'firebase/database';

const Explore = ({navigation}) => {
  const bookings = useSelector((state) => state.bookings.data)
  const favourites = useSelector((state) => state.favourites.data)
  const token = useSelector((state) => state.auth.token)
  const iduser = useSelector((state) => state.auth.userId)
  const [data, setData] = useState([])  
  const dispatch = useDispatch()

  // ADD TO FAVOURITES
  const onHandleAdd = (id) => {
    let idFound = data.find((el) => el.id === id)
    dispatch(addFavourite(idFound.id))
    
    // update favourites to the database
    update(ref(DB_TORCHND, 'users/' + iduser), {
      favourites:[...favourites, idFound.id]
    })
  }

  useEffect(() => {
    setData(bookingList)
    
    //fetching favourites data
    const favsRef = ref(DB_TORCHND, 'users/' + iduser + '/favourites');
    onValue(favsRef, (snapshot) => {
      const data = snapshot.val();
      getFavourites(data);
    });
    console.log(`token:${token},id:${iduser}`)
    console.log(favourites)
  }, [favourites])



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