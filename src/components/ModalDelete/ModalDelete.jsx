import { View, Text, StyleSheet, Button, Modal, Pressable} from 'react-native'
import React from 'react'

export default function ModalDelete({onHandleDelete, itemSelected, onHandleCancel}) {
  return (
    <View style={styles.modalContainer}>
      <Modal
        animationType="fade"
        transparent={true}
        onRequestClose={() => onHandleCancel()}
      >
        <Pressable
          style={styles.modalOuter}
          onPress={(event) => {event.target == event.currentTarget &&onHandleCancel()}}
        >
          <View style={styles.modalInner}>
            <Text>
              Are you sure you want to Delete this Booking from your favourites?
            </Text>
            <Text></Text>
            <View style={{ flexDirection: "row", gap: 20 }}>
              <Button
                title="Remove"
                color={"red"}
                onPress={() => onHandleDelete(itemSelected)}
              />
              <Button
                title="Cancel"
                color={"red"}
                onPress={() => onHandleCancel()}
              />
            </View>
          </View>
        </Pressable>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex:1,
  },
  modalOuter: {
      backgroundColor: "rgba(1, 1, 1, 0.2)",
      flex: 1,
  },
  modalInner: {
    flex:1,
    backgroundColor:'white',
    padding:18,
    borderRadius:12,
    margin:50,
    marginVertical:'80%',
    justifyContent:'center',
    alignItems:'center',
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