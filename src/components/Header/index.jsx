import React, { useEffect, useState } from "react";
import { Image, ImageBackground, Text, View } from "react-native"

import styles from "./styles";
import SearchBooking from "../SearchBooking";
import { useDispatch, useSelector } from "react-redux";
import { findBooking } from "../../store/features/bookingsSlice";


export default function Header() {
  const [data, setData] = useState()
  const dispatch = useDispatch()
  

  const onHandleSearch = (itemFound) => {
    dispatch(findBooking([itemFound]))
 
  }
  
  
  return (
        <ImageBackground source={require('../../assets/bg2.png')} style={styles.headerContainer}>
          <View style={styles.logotitleContainer}>
            <Text style={styles.titleContainer}>torchnd</Text>
            <View style={styles.imageContainer}>
              <Image source={require('../../assets/iconlogo.png')} style={{ width: 34, height: 34 }} />
            </View>
          </View> 
          
          <View style={styles.searchContainer}>
            <SearchBooking onHandleSearch={onHandleSearch} />
          </View>
        </ImageBackground>
  );
}

