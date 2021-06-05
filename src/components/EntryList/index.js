import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Text, FlatList } from 'react-native'
import { getEntries } from "../../services/Entries"

export default function EntryList({ navigation }) {
    [entries, setEntries] = useState([])

    useEffect(() => {
        async function loadEntries() {
            const data = await getEntries();
            setEntries(data);
        }
        loadEntries();
    }, []);

    return (
        <View>
            <Text> Últimos Lançamentos</Text>

            <FlatList
                data={entries}
                renderItem={({ item }) =>(
                    <View>
                        <Text> - {item.description}</Text>
                        <Button 
                        title={item.id} 
                        onPress = {() => {navigation.navigate('NewEntry', {entry: item})}}/>
                    </View>)
                }

            >
            </FlatList>
        </View>
    )
}

const styles = StyleSheet.create({})
