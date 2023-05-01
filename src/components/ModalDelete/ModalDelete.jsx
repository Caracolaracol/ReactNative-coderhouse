import { View, Text, StyleSheet, Button, Modal} from 'react-native'
import React from 'react'

export default function ModalDelete({onHandleDelete, itemSelected}) {

  return (
    <Modal style={styles.modalContainer}>
      <Text>Are you sure you want to Delete this Booking from your favourites?</Text>
      <Text></Text>
      <View>

        <Button 
        title="Eliminar"
        color={'red'}
        onPress={() => onHandleDelete(itemSelected)}
        />
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
modalContainer: {
    flex:1,
        justifyContent:"center",
        alignItems:"center"
}
})