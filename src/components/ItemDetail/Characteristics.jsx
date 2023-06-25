import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import colors from '../../theme/colors'
import beds from '../../assets/icons/beds.png'
import workarea from '../../assets/icons/workarea.png'
import sharedareas from '../../assets/icons/sharedareas.png'
import bathroom from '../../assets/icons/bathroom.png'


const Characteristics = ({host}) => {
    return (
        <View style={{ marginHorizontal: 20, }}>
            <View style={styles.characteristicsContainer} >
                <View style={styles.card}>
                    <Image source={beds} style={styles.icon} />
                    <Text style={styles.text}>two Beds</Text>
                </View>
                <View style={styles.card}>
                    <Image source={bathroom} style={styles.icon} />
                    <Text style={styles.text}>Exclusive bathroom</Text>
                </View>
                <View style={styles.card}>
                    <Image source={workarea} style={styles.icon} />
                    <Text style={styles.text}>Work area</Text>
                </View>
                <View style={styles.card}>
                    <Image source={sharedareas} style={styles.icon} />
                    <Text style={styles.text}>Shared Areas</Text>
                </View>
            </View>
        </View>
    )
}

export default Characteristics

const styles = StyleSheet.create({
    characteristicsContainer:{
        
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'center',
        gap:8,
        marginHorizontal:'1%'
      },
    card: {
        backgroundColor:colors.yellow,
        width:'22%',
        height:66,
        borderRadius:6,
        borderWidth:1,
        borderColor:colors.white_a,
        borderStyle:'solid',
        alignItems:'center'
    },
    text: {
        fontFamily:'lost-ages',
        fontSize:12,
    },
    icon: {
        width:30,
        height:30
    }
})