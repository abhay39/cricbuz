import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image
} from "react-native";
import React from "react";
import Feather from "react-native-vector-icons/Feather";
import Ionicons from "react-native-vector-icons/Ionicons";
import fetchApi from "../API/Cricket";

const Home = ({ navigation }) => {
  const [data, setData] = React.useState([]);

  const fetchApi=() => {
    fetch('https://cricbuzz-cricket.p.rapidapi.com/mcenter/v1/41881',{
        method: 'GET',
	    headers: {
            'X-RapidAPI-Key': 'c981ec28f8msha31db1f448a4ae6p1207ebjsne85f4cd569ad',
            'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com'
	    }
    })
	.then(response => response.json())
	.then(response => 
    {}
    )
	.catch(err => {});
}

  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          backgroundColor: "#D83A3A",
          height: 70,
          padding: 20
        }}
      >
        <TouchableOpacity>
          <Feather name="align-left" size={30} color="white" />
        </TouchableOpacity>
        <Text style={styles.header}>CRICZONE</Text>
        <TouchableOpacity>
          <Ionicons name="ios-settings-sharp" size={30} color="white" />
        </TouchableOpacity>
      </View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={true} >
        <TouchableOpacity style={{marginLeft:20,marginTop:30,borderRadius:20,width:370,height:200,backgroundColor:'#d3e3d7', flex:1}} 
        onPress={() => navigation.navigate("Main")}
        >
              <Text style={styles.title}>Indian Premier Leauge 2022, 37th Match</Text>
              <Text style={styles.timing}>7:30pm | 13 Jun</Text>
              <Text style={styles.update}>Upcoming</Text>
              <View style={{flexDirection:'row'}}>
                <Image style={styles.team} source={require('../images/l.png')} />
                <Text style={styles.vs}>VS</Text>
                <Image style={styles.team} source={require('../images/p.png')} />
              </View>
            </TouchableOpacity>
        </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  header: {
    marginTop: -5,
    letterSpacing: 1.5,
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
    fontFamily: "sans-serif-condensed"
  },
  container: {
    backgroundColor: "#fff",
    width: "80%",
    height: "30%",
    marginLeft: "10%",
    borderRadius: 20,
    marginTop: "5%"
  },
  category: {
    backgroundColor: "#fff",
    marginLeft: 20,
    marginRight: 20,
  },
  title: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: "bold",
    textAlign:'center',
    fontFamily: "sans-serif-condensed",
    color: 'black',
  },
  timing: {
    marginTop: 10,
    fontSize: 18,
    textAlign:'center',
    color: 'black',
    fontFamily: "sans-serif-condensed",
    fontWeight: "bold",
  },
  update: {
    marginTop: 10,
    fontSize: 18,
    textAlign:'center',
    color: 'red',
    fontFamily: "sans-serif-condensed",
    fontWeight: "bold",
  },
  team: {
    borderRadius:20,
    marginLeft:50,
    marginTop: 5,
    width: 60,
    height: 70,
  },
  vs: {
    marginLeft: 50,
    marginTop: 10,
    fontSize: 20,
    fontWeight: "bold",
    color: 'white',
    backgroundColor: 'green',
    padding: 15,
    borderRadius: 10,
  }
});
