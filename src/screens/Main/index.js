import React from 'react'
import { View, Text, Button } from 'react-native'
import EntryList from '../../components/EntryList'
export default function Main({ navigation }) {
    return (
        <View>
            <Text> Main Page</Text>
            <Button title="NewEntry" onPress={() => { navigation.navigate("NewEntry") }} />
            <Button title="Save" />
            <EntryList />
        </View>
    )
}
