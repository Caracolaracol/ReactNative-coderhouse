import { View, Text, SafeAreaView, ScrollView, ImageBackground, Pressable, Image, Button } from 'react-native'
import React from 'react'
import Images from '../../components/ItemDetail/Images'
import styles from './styles'
import Characteristics from '../../components/ItemDetail/Characteristics'
import colors from '../../theme/colors'
import { StatusBar } from 'expo-status-bar'

const ReserveBook = ({navigation, route}) => {
    console.log(route)
    return (
        <SafeAreaView>
            <ScrollView styles={styles.detailDataContainer}>
                <View style={styles.container}>
                    <Text>
                        "requested reservation"
                    </Text>
                </View>

                <View style={styles.container}>
                    <View style={styles.innerTextImage}>
                        <Image source={route.params.item.cardImages} style={styles.bookImage}
                        />
                        <View style={styles.imagetextContainer}>
                            <Text style={styles.textImage}>{route.params.item.card_description}</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.container}>
                    <View>
                        <Text>Your travel</Text>
                    </View>
                    <View>
                    <Text>Dates</Text>
                    <Pressable>
                        <Text>Edit</Text>
                    </Pressable>
                    </View>
                </View>

                <View style={styles.container}>
                    <View>
                        <Text>Price Details</Text>
                    </View>
                </View>

                <View style={styles.container}>
                    <View>
                        <Text>Pay with</Text>
                        <Text>Your gold</Text>
                        <Text>Something in your inventory</Text>
                    </View>
                </View>

                <View style={styles.container}>
                    <View>
                        <Text>Cancellation policy</Text>
                    </View>
                    <View>
                        <Text>Free cancellation, If you cancel before the arriving date you will recieve partial refund.</Text>
                    </View>
                </View>

                <View style={styles.container}>
                    <View>
                        <Text>Basic Rules</Text>
                    </View>
                    <View>
                        <Text>We ask all guests to remember a few simple things about what makes a great guest:
                            - Follow the house rules
                            - Treat the host's home as if it were your own</Text>
                    </View>
                </View>

                <View style={styles.container}>
                    <View>
                        <Button title="Reservation requested"></Button>
                    </View>
                </View>
            </ScrollView>
      </SafeAreaView>
  )
}

export default ReserveBook