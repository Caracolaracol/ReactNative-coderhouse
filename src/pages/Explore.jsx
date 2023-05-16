import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

import Layout from '../Layout/Index';
import Card from '../components/Card';

import bookingList from '../db/bookingList'

const Explore = ({navigation}) => {
  const [data, setData] = useState([])  

    
  useEffect(() => {
    setData(bookingList)
},[])


  return (
    <Layout>
      {data && <FlatList
            data={data}
            renderItem={({ item, index }) => (
              <Card
                id={item.id}
                bookingUbication={item.booking_ubication}
                cardDescription={item.card_description}
                cardImages={item.cardImages}
                navigation={navigation}
              />
            )}
            keyExtractor={(item) => item.key}
            ListFooterComponent={<View></View>}
            ListHeaderComponent={
              <View>
                <Text style={styles.favoriteBookingsTitle}>
                  Bookings
                </Text>
              </View>
            }
            initialNumToRender={8}
          />
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