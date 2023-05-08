import { Text, View } from "react-native"
import styles from "./styles";
import React from "react";


export default function Header() {

  return (
    <>
      <View style={styles.titleContainer}>
        <Text style={{ fontSize: 48, color: '#493757', fontFamily: 'MORGANA' }}>torchnd</Text>
      </View>
    </>
  );
}

