import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Livescreen from './Livescreen'
import TopNavigation from './toptabs/TopNavigation'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import Splash from './Splash'

const Main = ({navigation}) => {
  return (
    
    <SafeAreaProvider>
        <Livescreen />
        <TopNavigation />
        
    </SafeAreaProvider>
    
    
  )
}

export default Main

const styles = StyleSheet.create({})