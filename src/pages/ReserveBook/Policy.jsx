import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles'

const Policy = () => {
    return (
        <>
            <View style={styles.container}>
                <View>
                    <Text style={styles.textDetail}>Cancellation policy</Text>
                </View>
                <View>
                    <Text>Free cancellation, If you cancel before the arriving date you will recieve partial refund.</Text>
                </View>
            </View>

            <View style={styles.container}>
                <View>
                    <Text style={styles.textDetail}>Basic Rules</Text>
                </View>
                <View>
                    <Text>We ask all guests to remember a few simple things about what makes a great guest</Text>
                    <Text>{`\u2023 Follow the house rules.`}</Text>
                    <Text>{`\u2023 Treat the host's home as if it were your own.`}</Text>
                </View>
            </View>
        </>
    )
}

export default Policy