import { View, Text, FlatList } from 'react-native'
import React from 'react'

import OrderItem from '../../components/OrderItem'
import { ORDERS } from '../../db/orders'


// THIS CODE IS NOT USED
// THIS SCREEN IS NOT ENABLED
// THIS SCREEN IS NOT ENABLED

const BookScreen = () => {
    const renderBookItem = ({item})=> (
        <OrderItem item={item} onDelete={handleDeleteBook} />
    )

    const handleDeleteBook = () => {
        console.log('eliminar book')
    }

  return (
    <View>
      <Text>BookScreen</Text>
      <FlatList data={ORDERS} 
      keyExtractor={item => item.id}

      />
    </View>
  )
}

export default BookScreen