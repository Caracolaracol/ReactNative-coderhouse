import { View, Text, Pressable, TextInput } from 'react-native'
import React from 'react'
import styles from './styles'
import DateTimePicker from 'react-native-modal-datetime-picker';

const TravelSettings = ({ date, onChangedNights, nights, showDatePicker, isDatePickerVisible, handleConfirm, hideDatePicker }) => {


    return (
        <View style={{ ...styles.container, minHeight: 120, gap:10 }}>
            <View>
                <Text style={styles.textDetail}>Your travel</Text>
            </View>
            <View style={{width:'100%', flexDirection:'row', alignItems:'center', alignContent:'center'}}>
                <Pressable onPress={showDatePicker} style={styles.selectDate}>
                    <Text style={{ fontFamily: 'lost-ages', fontSize: 16 }}>Select Date</Text>
                </Pressable>
                <DateTimePicker
                    isVisible={isDatePickerVisible}
                    mode="date"
                    onConfirm={handleConfirm}
                    onCancel={hideDatePicker}
                />
                <View>
                    {date && <Text style={{ fontSize: 20}}> From: {date}</Text>}
                </View>
            </View>
            <View style={{ flexDirection: 'row', gap: 5, alignItems: 'center', justifyContent:'flex-start' }}>
                <Text style={{ fontSize: 20 }}>for</Text>
                <TextInput
                    keyboardType='numeric'
                    inputMode='numeric'
                    onChangeText={text => onChangedNights(text)}
                    value={nights}
                    style={styles.input}
                    defaultValue='1'
                    maxLength={10}

                />
                <Text style={{ fontSize: 20 }}>nights</Text>
            </View>
        </View>
    )
}

export default TravelSettings