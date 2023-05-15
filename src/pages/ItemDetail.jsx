import { View, Text } from 'react-native'
import React from 'react'
import Layout from '../Layout/Index'

const ItemDetail = ({route}) => {

  return (
    <Layout>
      <Text>{route.params.id}</Text>
    </Layout>
  )
}

export default ItemDetail