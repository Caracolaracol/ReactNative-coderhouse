import { Image, Text, View } from "react-native"
import styles from "./styles";
import React, { useCallback } from "react";
import { useFonts } from "expo-font";

export default function Header() {




  return (
    <>
      <View style={styles.titleContainer}>
        <Text style={{ fontSize: 24, fontFamily:"Atkinson-Hyperlegible-Regular-102" }}>Fantasy Booking</Text>
      </View>
      <View>
       {/*  <Image
          style={styles.logoImage}
          source={require("../../assets/logo1.jpg")}
        /> */}
      </View>
    </>
  );
}

