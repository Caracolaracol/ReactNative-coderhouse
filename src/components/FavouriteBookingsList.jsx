import { FlatList, Image, StyleSheet, Text, View } from "react-native"

import Card from "./Card/index";
import favouriteBookings from "../db/favouriteBookings";
import { useEffect, useState } from "react";
import ModalDelete from "./ModalDelete/ModalDelete";

function FavouriteBookingsList() {
    const [data, setData] = useState([])  
    const [isModalVisible, setIsModalVisible] = useState(false)
    const [itemSelected, setItemSelected] = useState([])

    useEffect(() => {
        setData(favouriteBookings)
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
              <Text style={styles.favoriteBookingsTitle}>
                My Favorite Bookings
              </Text>
            }
            initialNumToRender={8}
          />
        )}
        {isModalVisible && (
          <ModalDelete
            onHandleDelete={onHandleDelete}
            itemSelected={itemSelected}
          />
        )}
      </>
    );
}

export default FavouriteBookingsList

const styles = StyleSheet.create({
    favoriteBookingsTitle:{
        fontSize:17,
        paddingTop:10,
        textAlign:'center'
    },


})