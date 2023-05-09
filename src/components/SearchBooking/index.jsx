import { View, Text, TextInput, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import colors from '../../theme/colors'

const SearchBooking = ({data, onHandleSearch}) => {
    const [value, setValue] = useState("")

    const onChangeText = (text) => {
        setValue(text)
    }
    const onSubmitText = () => {
        let formatedText = value.toLowerCase()
        let itemFound = data.find((element) => element.key.includes(formatedText))
        console.log(itemFound)
        onHandleSearch(itemFound)
    }
    return (
        <View style={styles.searchContainer}>
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
        maxWidth:'60%',
        margin:5
    },
    textInput: {
        paddingHorizontal:10,
        opacity:0.6
    }
})