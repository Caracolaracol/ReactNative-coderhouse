import { Image, Text, View } from "react-native"
import styles from "./styles";
import React, { useCallback } from "react";
import { useFonts } from "expo-font";


export default function Header() {





  return (
    <>
      <View style={styles.titleContainer}>
        <Text style={{ fontSize: 48, color:'#493757', fontFamily:'MORGANA' }}>torchnd</Text>
      </View>
      <View>
       {/*  <Imager
          style={styles.logoImage}
          source={require("../../assets/logo1.jpg")}
        /> */}
      </View>
    </>
  );
}

