import { View, Text, StyleSheet, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'

import Card from '../../components/Card';
import Layout from '../../Layout/Index';
import { useSelector } from 'react-redux';

const Favourites = ({navigation}) => {
  const favourites = useSelector((state) => state.favourites.data)
  const bookings = useSelector((state) => state.bookings.data)
  const [data, setData] = useState([])  
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [itemSelected, setItemSelected] = useState([])
  
  useEffect(() => {
    const filteredBookings = bookings.filter(element => favourites.includes(element.id))
    setData(filteredBookings)
  },[favourites, bookings])


  // These functions are disabled for now
  const onHandleModalDelete = (id) => {
      let item = data.find(element => element.key == id)
      setIsModalVisible(true)
      setItemSelected(item)
  }

  const onHandleDelete = (item) => {
      let newItemList = data.filter(element => element.key != item.key)
      setData(newItemList)
      setIsModalVisible(false)
  }

  const onHandleCancel = () => {
      setIsModalVisible(false)
  }


  return (
    <Layout >
      {data == "" ? (
        <Text>There is no favourite bookings, find one that you like!</Text>
      ) : (
        
          <FlatList
            data={data}
            renderItem={({ item, index }) => (
              <Card
                id={item.key}
                bookingUbication={item.ubication}
                cardDescription={item.firstdescription}
                cardImages={item.cardImages}
                
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
      {isModalVisible && (
        <ModalDelete
          onHandleDelete={onHandleDelete}
          itemSelected={itemSelected}
          onHandleCancel={onHandleCancel}
        />
      )}
    </Layout>
  );
      }

export default Favourites

const styles = StyleSheet.create({
  favoriteBookingsTitle:{
      fontSize:17,
      paddingTop:10,
      textAlign:'center'
  },


})