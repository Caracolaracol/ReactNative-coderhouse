import { Image, Text, View } from "react-native"
import styles from "./styles";
import React from "react";

export default function Header() {
  return (
    <>
      <View style={styles.titleContainer}>
        <Text style={{ fontSize: 24 }}>Fantasy Booking</Text>
      </View>
      <View>
        <Image
          style={styles.logoImage}
          source={require("../../assets/logo1.jpg")}
        />
      </View>
    </>
  );
}

