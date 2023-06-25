import { FlatList, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

import Layout from '../../Layout/Index';
import Card from '../../components/Card';

import bookingList from '../../db/bookingList'
import { useDispatch, useSelector } from 'react-redux';
import { addFavourite, getFavourites, removeFavourite, setFavourites } from '../../store/features/favouritesSlice';
import { DB_TORCHND } from '../../services/firebaseConfig';
import {  onValue, push, ref, update } from 'firebase/database';


const Explore = ({navigation}) => {
  const bookings = useSelector((state) => state.bookings.data)
  const favourites = useSelector((state) => state.favourites.data)
  const token = useSelector((state) => state.auth.token)
  const iduser = useSelector((state) => state.auth.userId)
  const [data, setData] = useState([])  
  const dispatch = useDispatch()

  useEffect(() => {
    //fetching favourites data
    const fetchFavsData = () => {
      const favsRef = ref(DB_TORCHND, 'users/' + iduser + '/favourites');
      onValue(favsRef, (snapshot) => {
        const data = snapshot.val();
        console.log(`favourites from explore page: ${data}`)
        if(data == null) {
          console.log('no favourites')
          dispatch(setFavourites())
        } else {
          dispatch(getFavourites(data))
        }
      });
      console.log(`fetching token:${token},id:${iduser}, favourites:${favourites}`)
    }

    fetchFavsData()
    setData(bookingList)
  }, [])
  
  // ADD TO FAVOURITES
  const onHandleAdd = (id) => {
    let idFound = data.find((el) => el.id === id)
    console.log(`idFound: ${idFound.id}`)
    let idfoundData = idFound.id
    dispatch(addFavourite({idfoundData}))
    
    // update favourites to the database
    if(favourites == undefined) {
      update(ref(DB_TORCHND, 'users/' + iduser), {
        favourites:[idFound.id]
      })
    } else {
      update(ref(DB_TORCHND, 'users/' + iduser), {
        favourites:[...favourites, idFound.id]
      })
    }
  }

  const onHandleRemove = (id) => {
    dispatch(removeFavourite({id}))

    if(favourites == undefined) {
      update(ref(DB_TORCHND, 'users/' + iduser), {
        favourites:[]
      })
    } else {
      update(ref(DB_TORCHND, 'users/' + iduser),{
      favourites:[...favourites]
    })
  }
  }



  return (
    <Layout>
      {(bookings) && <SafeAreaView style={{flex: 1}}>
       

        <FlatList
            data={bookings}
            disableScrollViewPanResponder
            nestedScrollEnabled
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
              onHandleRemove={onHandleRemove}
              />
              )}
              keyExtractor={(item) => item.key}

              initialNumToRender={8}
              />
         
          </SafeAreaView>
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