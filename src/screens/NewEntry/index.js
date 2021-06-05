import React, {useState} from 'react';
import {View, Button, TextInput, StyleSheet} from 'react-native';
import BalanceLabel from '../../components/BalanceLabel';

import {saveEntry} from '../../services/Entries';

export default function NewEntry({navigation}) {
  const balance = '2.500';
  const entry = navigation.getParam('entry', {
    id: null,
    amount: '0',
    entryAt: new Date(),
  });
  const [amount, setAmount] = useState(`${entry.amount}`);

  const save = () => {
    const value = {
      amount: parseFloat(amount),
    };
    saveEntry(value, entry);
  };

  return (
    <View>
      <View>
        <BalanceLabel currentBalance={balance} />
      </View>

      <View>
        <TextInput
          style={styles.input}
          onChangeText={event => {
            setAmount(event);
          }}
        />
        <TextInput style={styles.input} />
        <Button title="Camera" />
        <Button title="Localização" />
      </View>

      <View>
        <Button title="Adicionar" onPress={save} />
        <Button
          title="Cancelar"
          onPress={() => {
            navigation.goBack();
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderRadius: 20,
    margin: 8,
  },
});
