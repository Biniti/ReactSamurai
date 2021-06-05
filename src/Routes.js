import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Main from './screens/Main'
import NewEntry from './screens/NewEntry'
import Report from './screens/Report'

const Stack = createStackNavigator();

export default function Routes() {
    return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Main">
                    <Stack.Screen name="Main" component={Main} />
                    <Stack.Screen name="NewEntry" component={NewEntry} />
                    <Stack.Screen name="Report" component={Report} />
                </Stack.Navigator>
            </NavigationContainer>
    )
}
