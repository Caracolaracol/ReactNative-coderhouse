import { Image, StyleSheet, Text, View } from "react-native"


export default function Header() {
  return (
    <>
      <View style={styles.titleContainer}>
        <Text style={{ fontSize: 24 }}>Fantasy Booking</Text>
      </View>
      <View>
        <Image
          style={styles.logoImage}
          source={require("../assets/logo1.jpg")}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
    titleContainer: {
      margin:15,
      
    },
    logoImage: {
      width:60,
      height:60,
      borderRadius:99,
      
    },
  });