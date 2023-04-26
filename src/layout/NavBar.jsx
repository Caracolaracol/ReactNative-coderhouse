import { StyleSheet, Text, TouchableOpacity } from "react-native"


export default function NavBar({onPress}) {

    return (
        <>
            <TouchableOpacity style={styles.navBarBtn} onPress={onPress}>
                <Text style={{fontSize:13}}>Favourite Bookings</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navBarBtn}>
                <Text style={{fontSize:13}}>Add Space</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navBarBtn}>
                <Text style={{fontSize:13}}>Register</Text>
            </TouchableOpacity>
        </>
    )
}

const styles = StyleSheet.create({
    navBarBtn: {
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#51BDA4',
        width:120,
        height:40,
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10,
      },
})