import { View, Text, Image, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'

import { LinearGradient } from 'expo-linear-gradient';

import styles from './styles'
import likeLogo from "../../assets/likebtn.png"
import Svg, {G, Path,} from 'react-native-svg'

export default function Card({ otherStyles, ubication, firstdescription, cardImages, onHandleModalDelete, id }) {

  return (
    <View style={{ ...styles.container, ...otherStyles }}>
      <View style={styles.imageContainer}>
        {cardImages != "" ? (
          <ImageBackground source={cardImages} style={styles.imageList}>
            <LinearGradient
              colors={["#00000000", "rgba(0, 0, 0, 0.52)"]}
              style={{ height: "100%", width: "100%" }}
              start={{ x: 0.5, y: 0.1 }}
              end={{ x: 0.5, y: 1 }}
              locations={[0.8, 2]}
            >
              <View>
              <TouchableOpacity
            onPress={() => onHandleModalDelete(id)}
            style={styles.removeLikeBtn}
          >
                <Image 
                source={likeLogo}
                style={styles.likeImage}
                
                />
                </TouchableOpacity> 
              </View>
            </LinearGradient>
          </ImageBackground>
        ) : (
          ""
        )}
      </View>
      <View style={styles.itemBody}>
        <View style={styles.itemBodyInfo}>
          <View style={styles.ubicationContainer}>
            <Text style={{ fontSize: 23 }}>{ubication}</Text>
          </View>
          <View style={styles.firstdescriptionContainer}>
            <Text style={{ fontSize: 17, opacity: 0.5 }}>
              {firstdescription}
            </Text>
          </View>
          <View style={styles.priceContainer}>
            <Text style={{ fontWeight: 900 }}>$20.000 </Text>
            <Text>noche</Text>
          </View>
        </View>

      </View>
    </View>
  );
}