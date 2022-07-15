import {  ScrollView,  StatusBar,StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React,{useState} from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'


const Current = () => {
 const [inning, setInning] = useState()
 const [totalRuns, setTotalRuns] = useState()
 const [wickets, setWickets] = useState()
  const [overs, setOvers] = useState()
  const [runRate, setRunRate] = useState()
  const [runReqRate, setRunReqRate] = useState()
 const [battingTeam, setBattingTeam] = useState()
 const [batStriker, setBatStriker] = useState()
  const [batNonStriker, setBatNonStriker] = useState()
  const [bowlerStriker, setBowlerStriker] = useState()
  const [bowlerRuns, setBowlerRuns] = useState()
  const [bowlerOver, setBowlerOver] = useState()
  const [bowlerEconomy, setBowlerEconomy] = useState()
  const [curstate, setCurstate] = useState()
  const [partnership, setPartnership] = useState()
  const [batBalls, setBatBalls] = useState()
  const [batRuns, setBatRuns] = useState()
  const [batsFours, setBatsFours] = useState()
  const [batsSixes, setBatsSixes] = useState()
  const [batsStrikeRate, setBatsStrikeRate] = useState()
  const [batsNonStrikeRate, setBatsNonStrikeRate] = useState()
  const [batNonBalls, setBatNonBalls] = useState()
  const [batNonRuns, setBatNonRuns] = useState()
  const [batsNonFours, setBatsNonFours] = useState()
  const [batsNonSixes, setBatsNonSixes] = useState()
  const [lastWicket,  setLastWicket] = useState()
  const [matchStatus, setMatchStatus] = useState()
  const [commentryLines, setCommentryLines] = useState()
  const [commentryLinesOverNum, setCommentryLinesOverNum] = useState()
  const [commentryLinesEvent, setCommentryLinesEvent] = useState()
  
  
  const fetchApi=() => {
    fetch('https://unofficial-cricbuzz.p.rapidapi.com/matches/get-scorecard?matchId=38657',{
      method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c981ec28f8msha31db1f448a4ae6p1207ebjsne85f4cd569ad',
		'X-RapidAPI-Host': 'unofficial-cricbuzz.p.rapidapi.com'
	    }
    })
	.then(response => response.json())
	.then(response =>{
    setTotalRuns(response.scorecard[1].score);
    setInning(response.scorecard[1].inningsId)
    setWickets(response.scorecard[1].wickets)
    setOvers(response.scorecard[1].overs)
    setRunRate(response.scorecard[1].runRate)
    setRunRate(response.scorecard[1].runRate)
    setRunReqRate(response.scorecard[1].runRate)
    setBattingTeam(response.scorecard[1].batTeamSName)


    
  }).catch(err => {});
}
  const commentry=() => {
    fetch('https://unofficial-cricbuzz.p.rapidapi.com/matches/get-commentaries?matchId=38657',{
      method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c981ec28f8msha31db1f448a4ae6p1207ebjsne85f4cd569ad',
		'X-RapidAPI-Host': 'unofficial-cricbuzz.p.rapidapi.com'
	    }
    })
	.then(response => response.json())
	.then(response =>{
    setCommentryLines(response.commentaryLines[0].commentary.commtxt);
    setCommentryLinesOverNum(response.commentaryLines[0].commentary.overNum);
    setCommentryLinesEvent(response.commentaryLines[0].commentary.eventType);
    setBatStriker(response.miniscore.batsmanStriker.name);
    setBatBalls(response.miniscore.batsmanStriker.balls);
    setBatRuns(response.miniscore.batsmanStriker.runs);
    setBatsFours(response.miniscore.batsmanStriker.fours);
    setBatsSixes(response.miniscore.batsmanStriker.sixes);
    setBatsStrikeRate(response.miniscore.batsmanStriker.strkRate);
    setBatNonBalls(response.miniscore.batsmanNonStriker.balls);
    setBatNonRuns(response.miniscore.batsmanNonStriker.runs);
    setRunReqRate(response.miniscore.rrr);
    setBatsNonFours(response.miniscore.batsmanNonStriker.fours);
    setBatsNonSixes(response.miniscore.batsmanNonStriker.sixes);
    setBatsNonStrikeRate(response.miniscore.batsmanNonStriker.strkRate);
    setLastWicket(response.miniscore.lastWkt);
    setBatNonStriker(response.miniscore.batsmanNonStriker.name);
    setBowlerStriker(response.miniscore.bowlerStriker.name);
    setBowlerOver(response.miniscore.bowlerStriker.overs);
    setBowlerRuns(response.miniscore.bowlerStriker.runs);
    setBowlerEconomy(response.miniscore.bowlerStriker.economy);
    setCurstate(response.miniscore.curOvsStats);
    setPartnership(response.miniscore.partnership);
    setMatchStatus(response.matchHeaders.status);
   
    
  }).catch(err => {});
}


  return (
    <View style={{marginLeft:20,}}>
      <View style={{flexDirection:'row' }}>
        <Text style={styles.battingCountry}>{battingTeam}</Text>
        <Text style={styles.inning}>{inning} inning</Text>
        <TouchableOpacity
          onPress={() => {
            fetchApi();
            commentry();
          }}
        >
          <Ionicons name="refresh" size={30} color="black" style={{marginLeft:200}} />
        </TouchableOpacity>
      </View>
      <View style={{flexDirection:'row' }}>
        <Text style={styles.score}>{totalRuns}-{wickets} ({overs})</Text>
        <Text style={styles.runrate}>CRR</Text>
        <Text style={styles.runrateRequired}>RR</Text>
      </View>
      <Text style={styles.runraterate}>       {runRate}</Text>
      <Text style={styles.runrateRerate}>       {runReqRate}</Text>
      <Text style={styles.status}>{matchStatus}</Text>
      <View style = {styles.lineStyle} />
      <View style={{flexDirection:'row',justifyContent:'space-between',marginRight:20,marginTop:5}}>
        <Text style={styles.partnership}>P'SHIP {partnership}</Text>
        <Text style={styles.more}>MORE</Text>
      </View>
      <View style = {styles.lineStyle} />
      <View style={{flexDirection:'row',justifyContent:'space-between',marginRight:20,marginTop:5}}>
        <Text style={[styles.partnership,{color:'red'}]}>Batsman         </Text>
        <Text style={[styles.headingofDetails,{color:'red',marginLeft:60}]}>R</Text>
        <Text style={[styles.headingofDetails,{color:'red'}]}>B</Text>
        <Text style={[styles.headingofDetails,{color:'red'}]}>4s</Text>
        <Text style={[styles.headingofDetails,{color:'red'}]}>6s</Text>
        <Text style={[styles.headingofDetails,{color:'red'}]}>SR</Text>
      </View>
      <View style = {styles.lineStyle} />
      <View style={{flexDirection:'row',justifyContent:'space-between',marginRight:20,marginTop:5}}>
        <TouchableOpacity>
          <Text style={styles.partnership}>{batStriker}*** </Text>
        </TouchableOpacity>
        <Text style={[styles.headingofDetails,{color:'red',marginLeft:8}]}>{batRuns}</Text>
        <Text style={styles.headingofDetails}>{batBalls}</Text>
        <Text style={styles.headingofDetails}>{batsFours}</Text>
        <Text style={styles.headingofDetails}>{batsSixes}</Text>
        <Text style={styles.headingofDetails}>{batsStrikeRate}</Text>
      </View>
      <View style={{flexDirection:'row',justifyContent:'space-between',marginRight:20,marginTop:5}}>
        <TouchableOpacity>
          <Text style={styles.partnership}>{batNonStriker} ||  </Text>
        </TouchableOpacity>
        <Text style={[styles.headingofDetails,{color:'red',marginLeft:30}]}>{batNonRuns}</Text>
        <Text style={styles.headingofDetails}>{batNonBalls}</Text>
        <Text style={styles.headingofDetails}>{batsNonFours}</Text>
        <Text style={styles.headingofDetails}>{batsNonSixes}</Text>
        <Text style={styles.headingofDetails}>{batsNonStrikeRate}</Text>
      </View>
      <View style = {styles.lineStyle} />
      <View style={{flexDirection:'row',justifyContent:'space-between',marginRight:20,marginTop:5}}>
        <Text style={[styles.partnership,{color:'red'}]}>Bowlers             </Text>
        <Text style={[styles.headingofDetails,{color:'red'}]}>Overs</Text>
        <Text style={[styles.headingofDetails,{color:'red'}]}>Runs</Text>
        <Text style={[styles.headingofDetails,{color:'red'}]}> Ec.</Text>
      </View>
      <View style = {styles.lineStyle} />
      <View style={{flexDirection:'row',justifyContent:'space-between',marginRight:20,marginTop:5}}>
        <TouchableOpacity>
          <Text style={styles.partnership}>{bowlerStriker}</Text>
        </TouchableOpacity>
        <Text style={styles.headingofDetails}>{bowlerOver}</Text>
        <Text style={styles.headingofDetails}>{bowlerRuns}</Text>
        <Text style={styles.headingofDetails}>{bowlerEconomy}</Text>
        
      </View>
      <View style = {styles.lineStyle} />
      <View>
        <Text style={{textAlign:'justify',marginRight:20,marginTop:10,marginBottom:5,fontSize:16,fontWeight:'bold',
        fontFamily:'Roboto',
        color: 'black',
      }}
        >
        Recent:{curstate}
        
        </Text>
        <View style = {styles.lineStyle} />
        <View style={{flexDirection:'row'}}>
          <Text style={{textAlign:'left',fontSize:18,fontWeight:'500',
          fontFamily:'Roboto',
          color: 'black',
        }}>
          Last Wicket: 
          </Text>
          <Text style={{textAlign:'left',fontSize:18,fontWeight:'bold',marginLeft:10,
          marginRight:100,
          fontFamily:'Roboto',
          color: 'black',
        }}>
          {lastWicket}
          </Text>
        </View>
        <View style = {styles.lineStyle} />
        <View style={{flexDirection:'row'}}>
          <Text style={{textAlign:'left',fontSize:18,fontWeight:'bold',
          fontFamily:'Roboto',
          color: 'black',
        }}>
          {commentryLinesOverNum} 
          </Text>
          <Text style={{textAlign:'left',fontSize:18,fontWeight:'bold',
          fontFamily:'Roboto',marginLeft:10,
          color: 'black',
        }}>
          {commentryLinesEvent} 
          </Text>
          <Text style={{textAlign:'justify',fontSize:18,
          fontFamily:'Roboto',marginLeft:10,marginRight:150,
          color: 'black',
        }}>
            {commentryLines}.
          </Text>
        </View>
        <View style = {styles.lineStyle} />
      </View>
    </View>
    
  )
}

export default Current;


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
    marginLeft:140,
    marginTop:-5,
  },
  runrateRequired: {
    fontSize: 18,
    fontFamily: 'sans-serif-medium',
    marginLeft:20,
    marginTop:-5,
  },
  runraterate: {
    fontSize: 18,
    fontFamily: 'sans-serif-medium',
    marginLeft:210,
    marginTop:-20,
    color: 'black',
  },
  runrateRerate: {
    fontSize: 18,
    fontFamily: 'sans-serif-medium',
    marginLeft:260,
    marginTop:-25,
    color: 'black',
  },
  status: {
    fontSize: 18,
    fontFamily: 'sans-serif-medium',
    marginTop:5,
    color: 'black',
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
    color: 'black',
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
    color: 'black',
    fontWeight: 'bold',
  }
})
