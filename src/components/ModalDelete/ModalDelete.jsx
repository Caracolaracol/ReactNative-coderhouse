import { View, Text, StyleSheet, Button, Modal} from 'react-native'
import React from 'react'

export default function ModalDelete({onHandleDelete, itemSelected, onHandleCancel}) {

  return (

      <Modal animationType='fade' transparent={true}>
        <View style={styles.modalView}>
          <Text>Are you sure you want to Delete this Booking from your favourites?</Text>
          <Text></Text>
          <View style={{flexDirection:'row', gap:20}}>

            <Button 
            title="Remove"
            color={'red'}
            onPress={() => onHandleDelete(itemSelected)}
            />
            <Button 
            title="Cancel"
            color={'red'}
            onPress={() => onHandleCancel()}
            />
          </View>
        </View>
      </Modal>
  )
}

const styles = StyleSheet.create({
modalView: {
    flex:1,
    flexDirection:'column',
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:'white',
    margin:20,
    padding:40,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,

}
})