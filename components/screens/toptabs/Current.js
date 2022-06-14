import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Current = () => {
  return (
    <View style={{marginLeft:20}}>
      <View style={{flexDirection:'row' }}>
        <Text style={styles.battingCountry}>AUS</Text>
        <Text style={styles.inning}>2nd inning</Text>
      </View>
      <View style={{flexDirection:'row' }}>
        <Text style={styles.score}>224-7 (69)</Text>
        <Text style={styles.runrate}>CRR</Text>
      </View>
      <Text style={styles.runraterate}>3.25</Text>
      <Text style={styles.status}>Day 4: Stumps -Australia lead by 238 runs</Text>
      <View style = {styles.lineStyle} />
      <View style={{flexDirection:'row',justifyContent:'space-between',marginRight:20,marginTop:5}}>
        <Text style={styles.partnership}>P'SHIP 11(19)</Text>
        <Text style={styles.more}>MORE</Text>
      </View>
      <View style = {styles.lineStyle} />
      <View style={{flexDirection:'row',justifyContent:'space-between',marginRight:20,marginTop:5}}>
        <Text style={styles.partnership}>Batsman         </Text>
        <Text style={styles.headingofDetails}>R</Text>
        <Text style={styles.headingofDetails}>B</Text>
        <Text style={styles.headingofDetails}>4s</Text>
        <Text style={styles.headingofDetails}>6s</Text>
        <Text style={styles.headingofDetails}>SR</Text>
      </View>
      <View style = {styles.lineStyle} />
      <View style={{flexDirection:'row',justifyContent:'space-between',marginRight:20,marginTop:5}}>
        <Text style={styles.partnership}>Matt Henry     </Text>
        <Text style={styles.headingofDetails}>8</Text>
        <Text style={styles.headingofDetails}>8</Text>
        <Text style={styles.headingofDetails}>2</Text>
        <Text style={styles.headingofDetails}>0</Text>
        <Text style={styles.headingofDetails}>100.0</Text>
      </View>
      <View style={{flexDirection:'row',justifyContent:'space-between',marginRight:20,marginTop:5}}>
        <Text style={styles.partnership}>Matt Henry     </Text>
        <Text style={styles.headingofDetails}>8</Text>
        <Text style={styles.headingofDetails}>8</Text>
        <Text style={styles.headingofDetails}>2</Text>
        <Text style={styles.headingofDetails}>0</Text>
        <Text style={styles.headingofDetails}>100.0</Text>
      </View>
      <View style = {styles.lineStyle} />
      <View style={{flexDirection:'row',justifyContent:'space-between',marginRight:20,marginTop:5}}>
        <Text style={styles.partnership}>Batsman         </Text>
        <Text style={styles.headingofDetails}>R</Text>
        <Text style={styles.headingofDetails}>B</Text>
        <Text style={styles.headingofDetails}>4s</Text>
        <Text style={styles.headingofDetails}>6s</Text>
        <Text style={styles.headingofDetails}>SR</Text>
      </View>
      <View style = {styles.lineStyle} />
     
      

    </View>
  )
}

export default Current

const styles = StyleSheet.create({
  battingCountry: {
    fontSize: 24,
    fontFamily: 'sans-serif-medium',
    color: 'black',
    fontWeight: 'bold',
  },
  inning: {
    fontSize: 18,
    fontFamily: 'sans-serif-medium',
    marginLeft:30,
    marginTop:4,
  },
  score: {
    marginTop:4,
    fontSize: 28,
    fontFamily: 'sans-serif-medium',
    color: 'black',
    fontWeight: 'bold',
  },
  runrate: {
    fontSize: 18,
    fontFamily: 'sans-serif-medium',
    marginLeft:150,
    marginTop:-5,
  },
  runraterate: {
    fontSize: 18,
    fontFamily: 'sans-serif-medium',
    marginLeft:288,
    marginTop:-20,
    color: 'black',
  },
  status: {
    fontSize: 18,
    fontFamily: 'sans-serif-medium',
    marginTop:5,
    color: 'red',
    fontWeight: 'bold',
  },
  lineStyle: {
    borderWidth:1,
    borderColor:'gray',
    marginLeft:-20,
    marginTop:6,
  },
  partnership: {
    fontSize: 18,
    fontFamily: 'sans-serif-medium',
    color: '#fb3737',
    fontWeight: 'bold',
  },
  more: {
    fontSize: 18,
    fontFamily: 'sans-serif-medium',
    color: '#46A2F1',
    fontWeight: 'bold',
  },
  headingofDetails: {
    fontSize: 18,
    marginLeft:20,
    fontFamily: 'sans-serif-medium',
    color: '#46A2F1',
    fontWeight: 'bold',
  }
})