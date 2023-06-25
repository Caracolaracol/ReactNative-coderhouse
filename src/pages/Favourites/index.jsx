import { View, Text, StyleSheet, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'

import Card from '../../components/Card';
import Layout from '../../Layout/Index';
import { useDispatch, useSelector } from 'react-redux';
import { addFavourite, removeFavourite } from '../../store/features/favouritesSlice';
import { ref, update } from 'firebase/database';
import { DB_TORCHND } from '../../services/firebaseConfig';
import FavouritesCard from '../../components/Card/FavouritesCard';

const Favourites = ({navigation}) => {
  const favourites = useSelector((state) => state.favourites.data)
  const bookings = useSelector((state) => state.bookings.data)
  const iduser = useSelector((state) => state.auth.userId)
  const dispatch = useDispatch()
  const [data, setData] = useState([])  

  useEffect(() => {
    if (favourites == undefined) {
      setData([])
      update(ref(DB_TORCHND, 'users/' + iduser), {
        favourites:[]
      })
    } else {
      const filteredBookings = bookings.filter(element => favourites.includes(element.id))
      setData(filteredBookings)
      update(ref(DB_TORCHND, 'users/' + iduser),{
        favourites:[...favourites]
      })
    }

    console.log(`favourites useff: ${favourites}`)
  },[favourites, bookings])


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
  }


  return (
    <Layout >
      {data == "" ? (
        <Text>There is no favourite bookings, find one that you like!</Text>
      ) : (
          <FlatList
            data={data}
            renderItem={({ item, index }) => (
              <FavouritesCard
                key={item.key}
                id={item.id}
                bookingUbication={item.booking_ubication}
                cardDescription={item.card_description}
                cardImages={item.cardImages}
                onHandleRemove={onHandleRemove}
                onHandleAdd={onHandleAdd}
                navigation={navigation}
                item={item}
              />
            )}
            keyExtractor={(item) => item.key}
            ListFooterComponent={<View></View>}
            ListHeaderComponent={
              <View>
                <Text style={styles.favoriteBookingsTitle}>
                  My Favorite Bookings
                </Text>
              </View>
            }
            initialNumToRender={8}
          />
        
      )}
    </Layout>
  );
      }

export default Favourites

const styles = StyleSheet.create({
  favoriteBookingsTitle: {
    fontSize: 17,
    paddingTop: 10,
    textAlign: 'center'
  },


})