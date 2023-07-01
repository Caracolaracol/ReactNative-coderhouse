import { View, Text, TextInput, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import colors from '../../theme/colors'
import { Path, Svg } from 'react-native-svg'
import { useDispatch, useSelector } from 'react-redux'
import { resetBooking } from '../../store/features/bookingsSlice'


const SearchBooking = ({ onHandleSearch}) => {
    const bookings = useSelector((state) => state.bookings.data)
    const [value, setValue] = useState("")
    const dispatch = useDispatch()

    const onChangeText = (text) => {
        setValue(text)
    }

    const onSubmitText = () => {
        // Simple código para buscar un booking
        let formatedText = value.toLowerCase()
        let itemFound
        if(formatedText === null) {
            dispatch(resetBooking()) 
        } else {
            itemFound = bookings.find((element) => element.key.includes(formatedText))
        }
        onHandleSearch(itemFound)
    }
    
    return (
        <View style={styles.searchContainer}>
            <Svg xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 96 960 960" fill="#ab4929"  width="30"><Path d="M770.891 916.826 531.326 677.5q-29.761 25.264-69.6 39.415-39.84 14.15-85.161 14.15-109.835 0-185.95-76.195Q114.5 578.674 114.5 471t76.196-183.87q76.195-76.195 184.369-76.195t183.87 76.195q75.695 76.196 75.695 184.02 0 43.328-13.641 82.97-13.641 39.641-40.924 74.402L821.63 868.087q10.196 9.877 10.196 23.83 0 13.953-11.109 24.822-10.351 10.522-25.213 10.522t-24.613-10.435ZM375.65 662.935q79.73 0 135.29-56.245Q566.5 550.446 566.5 471t-55.595-135.69q-55.595-56.245-135.255-56.245-80.494 0-136.757 56.245Q182.63 391.554 182.63 471t56.228 135.69q56.227 56.245 136.792 56.245Z"/></Svg>
            <TextInput
                style={styles.textInput}
                onChangeText={onChangeText}
                value={value}
                placeholder='Buscar booking'
                onSubmitEditing={onSubmitText}/>
        </View>
    )
}

export default SearchBooking

const styles = StyleSheet.create({
    searchContainer: {
        borderRadius:12,
        backgroundColor:colors.white_a,
        opacity:.9,
        marginVertical:10,
        flexDirection:'row',
        alignItems:'center',
        height:30,
        borderBottomColor:'#caa59e',
      borderBottomWidth:0.3,
      borderStyle:'dashed',
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 0,
      },
      shadowOpacity: 0.65,
      shadowRadius: 5,
      elevation: 2,
    },
    textInput: {
        paddingHorizontal:10,
        opacity:0.7
    }
})