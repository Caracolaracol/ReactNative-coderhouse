import { View, Text, StyleSheet, Dimensions, FlatList, KeyboardAvoidingView } from 'react-native'
import React, { useEffect, useState } from 'react'

import favouriteBookings from "../db/favouriteBookings";
import SearchBooking from '../components/SearchBooking';
import Card from '../components/Card';
const width = Dimensions.get("window").width
const heigth = Dimensions.get('window').height

const Favourites = () => {
  const [data, setData] = useState([])  
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [itemSelected, setItemSelected] = useState([])
  
  useEffect(() => {
      setData(favouriteBookings)
      console.log(width)
  },[])
  
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

  const onHandleSearch = (itemFound) => {
    console.log(itemFound)
    setData([itemFound])
  }
  
  return (
    <>
      {data == "" ? (
        <Text>There is no favourite bookings, find one that you like!</Text>
      ) : (
        
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
                <Text style={styles.favoriteBookingsTitle}>
                  My Favorite Bookings
                </Text>
                <KeyboardAvoidingView  style={{flex:1}}>

                <SearchBooking data={data} onHandleSearch={onHandleSearch}/>
                </KeyboardAvoidingView>
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
    </>
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