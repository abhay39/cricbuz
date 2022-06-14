import { StyleSheet, Text, View,Image,StatusBar } from 'react-native'
import React from 'react'
import Onboarding from 'react-native-onboarding-swiper';

const OnBoarding = ({navigation}) => {
  return (
    <>
    <StatusBar backgroundColor="#D83A3A" barStyle="default" />
    
    <Onboarding
    style={styles.container}
    onDone={() => {
      navigation.navigate('Home')
    }}
  pages={[
    {
      backgroundColor: '#fff',
      
      image: <Image style={styles.secimages} source={require('../images/second.png')} />,
      title: 'Cricket Meri Jaan',
      subtitle: 'Done with React Native Onboarding Swiper',
    },
    {
      backgroundColor: '#fff',
      
      image: <Image style={styles.images} source={require('../images/first.png')} />,
      title: 'Onboarding',
      subtitle: 'Done with React Native Onboarding Swiper',
    },
  ]}
/>
  </>
  )
}




export default OnBoarding

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  images: {
    width: '100%',
    height: '110%',
  },
  secimages: {
    width: 400,
    height: 600,
  }
})