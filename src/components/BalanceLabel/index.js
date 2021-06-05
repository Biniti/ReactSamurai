import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function BalanceLabel({currentBalance}) {

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Saldo Atual</Text>
            <Text style={styles.value}>{currentBalance}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: 'green',
    },
    label: {
        fontSize: 18,
    },
    value: {
        fontSize: 18,
    },
})