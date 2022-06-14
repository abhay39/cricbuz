import { StyleSheet, Text, View,StatusBar } from 'react-native'
import React from 'react'
import OnBoarding from './components/screens/OnBoarding'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './components/screens/Home'

import Main from './components/screens/Main'
import Livescreen from './components/screens/Livescreen'


const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator
          initialRouteName="OnBoarding"
          screenOptions={{
            headerShown: false,
          }}
        >
            <Stack.Screen name="OnBoarding" component={OnBoarding} />
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="Live" component={Livescreen} />
            <Stack.Screen name="Main" component={Main}
            />
        </Stack.Navigator>
    </NavigationContainer>
    
  )
}


export default App

const styles = StyleSheet.create({})