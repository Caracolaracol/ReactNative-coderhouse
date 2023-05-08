import { View, Text, FlatList, StyleSheet, KeyboardAvoidingView } from 'react-native'
import React, { useEffect, useState } from 'react'

import favouriteBookings from "../db/favouriteBookings";
import SearchBooking from '../components/SearchBooking';
import Card from '../components/Card';

const Explore = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    setData(favouriteBookings)
},[])

  const onHandleSearch = (itemFound) => {
    console.log(itemFound)
    setData([itemFound])
  }

  const onHandleModalDelete = (id) => {
    let item = data.find(element => element.key == id)
    setIsModalVisible(true)
    setItemSelected(item)
  }

  return (
    <>
      <FlatList
              data={data}
              renderItem={({ item, index }) => (
                <Card
                  id={item.key}
                  ubication={item.ubication}
                  firstdescription={item.firstdescription}
                  cardImages={item.cardImages}
                  onHandleModalDelete={onHandleModalDelete}
                />
              )}
              keyExtractor={(item) => item.key}
              ListFooterComponent={<View></View>}
              ListHeaderComponent={
                <View>
                  {/* <Text style={styles.favoriteBookingsTitle}>
                    My Favorite Bookings
                  </Text> */}
                  <KeyboardAvoidingView  style={{flex:1}}>
                    <SearchBooking data={data} onHandleSearch={onHandleSearch}/>
                  </KeyboardAvoidingView>
                </View>
              }
              initialNumToRender={8}
            />
    </>
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