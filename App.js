import React  from 'react';
import {StatusBar} from 'expo-status-bar';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import TimerScreen from "./src/TimerScreen";
import OptionsScreen from "./src/OptionsScreen";

const Stack = createStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={"Timer"}>
                <Stack.Screen name="Timer" component={TimerScreen} options={{headerShown: false}}/>
                <Stack.Screen name="Options" component={OptionsScreen} />
            </Stack.Navigator>
            <StatusBar style="auto"/>
        </NavigationContainer>
    );
}

export default App;