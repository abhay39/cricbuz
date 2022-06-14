import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
const Tab = createMaterialTopTabNavigator();
import TopNavigtion from './toptabs/TopNavigation'
import { useNavigation } from '@react-navigation/native';

const navigation = useNavigation(); 

const Livescreen = () => {

    

  return (
    <View>
        <StatusBar barStyle="default" backgroundColor={'#D83A3A'} />
      <View style={{
        backgroundColor:'#D83A3A',
        height:60,
        }}>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <TouchableOpacity
                     onPress={() => navigation.goBack()}
                >
                    <AntDesign name="arrowleft" size={30} color="white" style={{marginLeft:10,marginTop:20}} />
                </TouchableOpacity>
                <Text style={styles.country}>IND VS AUS</Text>
                <TouchableOpacity >
                    <Entypo name="share" size={30} color="white" style={{marginRight:10,marginTop:20}} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Ionicons name="notifications-outline" size={30} color="white" style={{marginRight:10,marginTop:20}} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Entypo name="dots-three-vertical" size={30} color="white" style={{marginRight:10,marginTop:20}} />
                </TouchableOpacity>
            </View>
            
      </View>
        
    </View>
    
    
  )
}

export default Livescreen

const styles = StyleSheet.create({
    country:{
        marginRight:25,
        marginTop:20,
        fontSize:25,
        fontWeight:'bold',
        color:'white',
        fontFamily:'sans-serif-condensed',
    }
})