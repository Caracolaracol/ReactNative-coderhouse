import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'

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
        <View>
            <TextInput
                onChangeText={onChangeText}
                value={value}
                placeholder='Buscar booking'
                onSubmitEditing={onSubmitText}/>
                
        </View>
    )
}

export default SearchBooking