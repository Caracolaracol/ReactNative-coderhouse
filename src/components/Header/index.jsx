import React from "react";
import { Image, ImageBackground, Text, View } from "react-native"

import styles from "./styles";
import SearchBooking from "../SearchBooking";
import { useDispatch } from "react-redux";
import { findBooking } from "../../store/features/bookingsSlice";


export default function Header() {
  const dispatch = useDispatch()
  
  const onHandleSearch = (itemFound) => {
    //RUSTIC SEARCH HANDLER FOR SEARCH AN ITEM.
    dispatch(findBooking([itemFound]))
  }
  
  return (
        <ImageBackground source={require('../../assets/bg2.png')} style={styles.headerContainer}>
          <View style={styles.logotitleContainer}>
            <Text style={styles.titleContainer}>torchnd</Text>
            <View style={styles.imageContainer}>
              <Image source={require('../../assets/logotorchnd.png')} style={{ width: 42, height: 42 }} />
            </View>
          </View> 
          
          <View style={styles.searchContainer}>
            <SearchBooking onHandleSearch={onHandleSearch} />
          </View>
        </ImageBackground>
  );
}

