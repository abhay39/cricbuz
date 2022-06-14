import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Info from './Info';
import Scoreboard from './Scoreboard';
import Current from './Current';
import Overs from './Overs';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        activeTintColor: 'white',
        inactiveTintColor: '#D0CCCB',
        backgroundColor: 'black',
        
        tabStyle: {
          tabBarScrollEnabled: true,
        },
        tabBarStyle: {
          backgroundColor: '#D83A3A',
          borderColor: 'white', 
          marginBottom: 10,
          
        }
      }}
      initialRouteName="Current"
    >
        <Tab.Screen name="Info" component={Info} />
        <Tab.Screen name="Current" component={Current} />
        <Tab.Screen name="Scorecard" component={Scoreboard} />
        <Tab.Screen name="Overs" component={Overs} />
    </Tab.Navigator>
  )
}

export default function TopNavigation(){
  return(
   <MyTabs />
  )
}

const styles = StyleSheet.create({})