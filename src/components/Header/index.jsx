import React from "react";
import { Image, ImageBackground, Text, View } from "react-native"

import styles from "./styles";

export default function Header() {

  return (
    <ImageBackground source={require('../../assets/bg2.png')} style={styles.headerContainer}>
      <View style={styles.titleContainer}>
        <Text style={{ fontSize: 48, color: '#493757', fontFamily: 'MORGANA' }}>torchnd</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image source={require('../../assets/iconlogo.png')} style={{width:34, height:34}}/>
      </View>
    </ImageBackground>
  );
}

