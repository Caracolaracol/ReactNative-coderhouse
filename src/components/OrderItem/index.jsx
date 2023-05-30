import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import colors from '../../theme/colors'

const formatDay = date => {
    const newDate = newDate(date)
    return newDate.toLocaleDateString()
}


const OrderItem = ({item, onDelete}) => {
  return (
      <View>
          <View>
            <Text styles={styles.date}>{formatDay(item.date)}</Text>
            <Text styles={styles.total}>Total: {item.total}</Text>
          </View>
          <View>
              <TouchableOpacity onPress={()=> onDelete(item.id)}>
                <text>delete</text>
              </TouchableOpacity>
          </View>
      </View>
  )
}
export default OrderItem

const styles = StyleSheet.create({
    order:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        padding:10,
        margin:10,
        borderColor:colors.yellow,
        borderWidth1,
        borderRadius6
    },
})