import { View, Text, SafeAreaView, ScrollView, Pressable, Image, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './styles'
import {Picker} from '@react-native-picker/picker';
import colors from '../../theme/colors';
import { onValue, ref, update } from 'firebase/database';
import { DB_TORCHND } from '../../services/firebaseConfig';
import { useSelector } from 'react-redux';
import TravelSettings from './TravelSettings';
import Policy from './Policy';

const ReserveBook = ({route, navigation: {navigate}}) => {
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [date, setDate] = useState(null)
    const [nights, setNights] = useState('1');
    const [selectedPayment, setSelectedPayment] = useState();
    const iduser = useSelector((state) => state.auth.userId)
    const [gold, setGold] = useState(0)


    const onChangedNights = (text) => {
        setNights(text);
    }
    const showDatePicker = () => {
        setDatePickerVisibility(true);
      };
    
      const hideDatePicker = () => {
        setDatePickerVisibility(false);
      };
    
      const handleConfirm = (datePicked) => {
        // pick date for the booking
        setDate(datePicked.toDateString())
        hideDatePicker();
      };

    const handleReserve = () =>{

        // Reserve booking button, check if you have enough money.
        if (selectedPayment == "inventory") { // the inventory system is not implemented for now.
            Alert.alert("You dont have items in your inventory")
            return
        }
        if (date && (gold >= (route.params.item.price_per_night * nights))) {
            let updatedGold = gold - (route.params.item.price_per_night * nights)
            update(ref(DB_TORCHND, 'users/' + iduser), {
                gold: updatedGold
            })
            Alert.alert('Booking Requested!', 'Have Fun & Relax!', [{ text: 'Ok!', onPress: () => navigate('Notifications', { name: 'Notifications', id:route.params.id}) }])
        } else if (!date) {
            Alert.alert("Select a date first")
        } else {
            Alert.alert("You dont have enough money")
        }
    }

      useEffect(() => {
            // Getting the User's Gold from Firebase Database
          const goldCountRef = ref(DB_TORCHND, 'users/' + iduser + '/gold');
          onValue(goldCountRef, (snapshot) => {
              const data = snapshot.val();
              setGold(data);
          });
      },[route.params.id])


    return (
        <SafeAreaView style={styles.AreaViewContainer}>
            <ScrollView styles={styles.detailDataContainer}>
                <View style={styles.container}>
                    <Text style={styles.textDetail}>
                        Requested reservation
                    </Text>
                </View>

                <View style={styles.container}>
                    <View style={styles.innerTextImage}>
                        <Image source={{ uri: route.params.item.cardImages[0].url }} style={styles.bookImage}
                        />
                        <View style={styles.imagetextContainer}>
                            <Text style={styles.textImage}>{route.params.item.card_description}</Text>
                        </View>
                    </View>
                </View>

                <TravelSettings 
                date={date}
                onChangedNights={onChangedNights} 
                nights={nights} 
                showDatePicker={showDatePicker}
                hideDatePicker={hideDatePicker}
                handleConfirm={handleConfirm}
                isDatePickerVisible={isDatePickerVisible}
                />

                <View style={styles.container}>
                    <View>
                        <Text style={styles.textDetail}>Price Details</Text>
                        <Text>Booking price:${route.params.item.price_per_night} Per Night</Text>
                        <View style={{ flexDirection: 'row', gap: 5, alignItems: 'center', justifyContent: 'center', marginTop: 30, borderWidth: 1, borderColor: colors.whine, width: '70%', alignSelf: 'center', borderRadius: 6 }}>
                            <Text style={{ fontFamily: 'lost-ages', fontSize: 24, alignSelf: 'center', }}>Total: </Text>
                            <Text style={{ fontSize: 20, alignSelf: 'center' }}>${route.params.item.price_per_night * nights} </Text>
                            <Text style={{ fontFamily: 'lost-ages', fontSize: 24, alignSelf: 'center', }}>Gold</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.container}>
                    <View>
                        <Text style={styles.textDetail}>Pay with</Text>
                        <Picker
                            selectedValue={selectedPayment}
                            onValueChange={(itemValue, itemIndex) =>
                                setSelectedPayment(itemValue)
                            }>
                            <Picker.Item label={`Your Gold (${gold})`} value="gold" />
                            <Picker.Item label="Something in your inventory" value="inventory" />
                        </Picker>
                        <View style={{ height: 20 }}>
                            {
                                selectedPayment == "inventory" ? <Text> You don't have nothing in your inventory </Text> : ''
                            }
                        </View>
                    </View>
                </View>
                <Policy />
                <View style={styles.container}>
                    <Pressable onPress={handleReserve} style={styles.bookReserveBtn}>
                        <Text style={{ fontFamily: 'lost-ages', fontSize: 24, alignSelf: 'center' }}>Reservation requested</Text>
                    </Pressable>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default ReserveBook