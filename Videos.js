import React, { Component } from 'react';
import {View,Text , TouchableOpacity, StyleSheet, ScrollView, Image} from 'react-native'
import YouTube from 'react-native-youtube';
import firebase from 'react-native-firebase';
const Banner = firebase.admob.Banner;
const AdRequest = firebase.admob.AdRequest;
const advert = firebase.admob().interstitial('ca-app-pub-1023595993469094/6452098527')
const request = new AdRequest();
request.addKeyword('foobar');
import { ScaledSheet, moderateScale } from 'react-native-size-matters';

export default class Videos extends Component {
	
	takeMe = () => {
		alert("hiiii")
	}

  goBack= () => {
    this.props.navigation.goBack()
  }

 render () {
		return (<View
			 style={{flex:1}}>
       <View style={styles.toolbar}>
       <TouchableOpacity style={styles.toolbarButton}  onPress={() => this.goBack()}>
        <Image style={{width:30,marginLeft:5,  height:30}} source={require('./images/back.png')}></Image>
        </TouchableOpacity>
        <Text style={styles.toolbarTitle}>MotiVational Videos</Text>
       <TouchableOpacity style={styles.toolbarButton}>
        <Image style={{width:30,marginLeft:5,  height:30}}></Image>
        </TouchableOpacity>
        </View> 
			 <ScrollView>
			 <Text style={{textAlign:"center", margin:10}}>Here are some videos that can make you feel motivated and inspired. Watch Out {"\n"} (यहां कुछ वीडियो हैं जो आपको प्रेरित और प्रेरित महसूस कर सकते हैं। ध्यान रहे)  </Text>
       <Banner
       style={{alignSelf:'center',marginLeft:0, marginTop:10}}
    size={"SMALL_BANNER"}
  unitId={"ca-app-pub-1023595993469094/3842380509"}
  request={request.build()}
  onAdLoaded={() => {
    console.log('Advert loaded');
  }} />

			 <View style={{marginTop:10}}><Text style={{textAlign:"center", marginTop:0}}></Text>
      <Text style={{textAlign:'center', marginBottom : 10, marginTop:10}}>Video For All Time</Text>
    <YouTube
  videoId="Sd-YsMs3OzA" // The YouTube video ID
  // control playback of video with true/false
   // control whether the video should play in fullscreen or inline
  loop // control whether the video should loop when ended
  onReady={e => this.setState({ isReady: true })}
  onChangeState={e => this.setState({ status: e.state })}
  onChangeQuality={e => this.setState({ quality: e.quality })}
  onError={e => this.setState({ error: e.error })}
  style={{ alignSelf: 'stretch', height: 300 }}
  apiKey="AIzaSyBEV-Lj5Bt6kRE9ulZLir-lm6b5vXuuxuM"
/>
</View>
<View style={{marginTop:20}}>
<Text style={{textAlign:'center', marginBottom : 10}}>Motivational Video About Study</Text>
 <YouTube
  videoId="OFwKVTF3mrI" // The YouTube video ID
  // control playback of video with true/false
   // control whether the video should play in fullscreen or inline
  loop // control whether the video should loop when ended
  onReady={e => this.setState({ isReady: true })}
  onChangeState={e => this.setState({ status: e.state })}
  onChangeQuality={e => this.setState({ quality: e.quality })}
  onError={e => this.setState({ error: e.error })}
  style={{ alignSelf: 'stretch', height: 300 }}
  apiKey="AIzaSyByq_EaxQPVTzOBDTok_LP7MQn8OoOBf0k"
  
/>
</View>
<View style={{marginTop:20}}>
<Text style={{textAlign:'center', marginBottom : 10}}>Motivational Video About Love BreakUp</Text>
 <YouTube
  videoId="rqxKBSEhuu8" // The YouTube video ID
  // control playback of video with true/false
   // control whether the video should play in fullscreen or inline
  loop // control whether the video should loop when ended
  onReady={e => this.setState({ isReady: true })}
  onChangeState={e => this.setState({ status: e.state })}
  onChangeQuality={e => this.setState({ quality: e.quality })}
  onError={e => this.setState({ error: e.error })}
  style={{ alignSelf: 'stretch', height: 300 }}
  apiKey="AIzaSyB2IGYbtz-iTLj1Q0fjGW2uYre6hdAhgmM"
  
/>
</View>
<View style={{marginTop:20}}>
<Text style={{textAlign:'center', marginBottom : 10}}>Motivational Video About Gym</Text>
 <YouTube
  videoId="zRf3iMKW87M" // The YouTube video ID
  // control playback of video with true/false
   // control whether the video should play in fullscreen or inline
  loop // control whether the video should loop when ended
  onReady={e => this.setState({ isReady: true })}
  onChangeState={e => this.setState({ status: e.state })}
  onChangeQuality={e => this.setState({ quality: e.quality })}
  onError={e => this.setState({ error: e.error })}
  style={{ alignSelf: 'stretch', height: 300 }}
  apiKey="AIzaSyCCLtw8M4vQyqL7ARGScoAgrqTpSz5yU6o"
  
/>
</View>
<View style={{marginTop:20}}>
<Text style={{textAlign:'center', marginBottom : 10}}>Motivational Video About Health</Text>
 <YouTube
  videoId="9-8UN0cPCmQ" // The YouTube video ID
  // control playback of video with true/false
   // control whether the video should play in fullscreen or inline
  loop // control whether the video should loop when ended
  onReady={e => this.setState({ isReady: true })}
  onChangeState={e => this.setState({ status: e.state })}
  onChangeQuality={e => this.setState({ quality: e.quality })}
  onError={e => this.setState({ error: e.error })}
  style={{ alignSelf: 'stretch', height: 300 }}
  apiKey="AIzaSyB3EyO0WPxAbz0S9SesA_iNgcXJhDTUefY"
  
/>
</View>
<View style={{marginTop:20}}>
<Text style={{textAlign:'center', marginBottom : 10}}>Motivational Video For IAS/UPSC Aspirants</Text>
 <YouTube
  videoId="G7wF_Pwaurs" // The YouTube video ID
  // control playback of video with true/false
   // control whether the video should play in fullscreen or inline
  loop // control whether the video should loop when ended
  onReady={e => this.setState({ isReady: true })}
  onChangeState={e => this.setState({ status: e.state })}
  onChangeQuality={e => this.setState({ quality: e.quality })}
  onError={e => this.setState({ error: e.error })}
  style={{ alignSelf: 'stretch', height: 300 }}
  apiKey="AIzaSyDQAo5QkFkzUweDNtSpGjOBq-jLevxvqVY"
  
/>
</View>
<View style={{marginTop:20}}>
<Text style={{textAlign:'center', marginBottom : 10}}>Motivational Video About Business</Text>
 <YouTube
  videoId="3soVHA-f1zQ" // The YouTube video ID
  // control playback of video with true/false
   // control whether the video should play in fullscreen or inline
  loop // control whether the video should loop when ended
  onReady={e => this.setState({ isReady: true })}
  onChangeState={e => this.setState({ status: e.state })}
  onChangeQuality={e => this.setState({ quality: e.quality })}
  onError={e => this.setState({ error: e.error })}
  style={{ alignSelf: 'stretch', height: 300 }}
  apiKey="AIzaSyC_DPivQzt9Wrn5vrOayGYxl8uZsdbkbqs"
  
/>
</View>
<View style={{marginTop:20}}>
<Text style={{textAlign:'center', marginBottom : 10}}>Motivational Inspiring Speech By A.P.J Abdul Kalaam</Text>
 <YouTube
  videoId="3SDkzDlw1yc" // The YouTube video ID
  // control playback of video with true/false
   // control whether the video should play in fullscreen or inline
  loop // control whether the video should loop when ended
  onReady={e => this.setState({ isReady: true })}
  onChangeState={e => this.setState({ status: e.state })}
  onChangeQuality={e => this.setState({ quality: e.quality })}
  onError={e => this.setState({ error: e.error })}
  style={{ alignSelf: 'stretch', height: 300 }}
  apiKey="AIzaSyA6oZoetANfBoM8Zg275AhpuMeU16REED4"
  
/>
</View>
<View style={{marginTop:20}}>
<Text style={{textAlign:'center', marginBottom : 10}}>Motivational Video About Love BreakUp</Text>
 <YouTube
  videoId="rqxKBSEhuu8" // The YouTube video ID
  // control playback of video with true/false
   // control whether the video should play in fullscreen or inline
  loop // control whether the video should loop when ended
  onReady={e => this.setState({ isReady: true })}
  onChangeState={e => this.setState({ status: e.state })}
  onChangeQuality={e => this.setState({ quality: e.quality })}
  onError={e => this.setState({ error: e.error })}
  style={{ alignSelf: 'stretch', height: 300 }}
  apiKey="AIzaSyDFlUpa1YjmbEb3VzY9FxynEug2TnNAA5M"
  
/>
</View>
<View style={{marginTop:20}}>
<Text style={{textAlign:'center', marginBottom : 10}}>If you feel you are weak,watch this </Text>
 <YouTube
  videoId="J2HR9UGh-1M" // The YouTube video ID
  // control playback of video with true/false
   // control whether the video should play in fullscreen or inline
  loop // control whether the video should loop when ended
  onReady={e => this.setState({ isReady: true })}
  onChangeState={e => this.setState({ status: e.state })}
  onChangeQuality={e => this.setState({ quality: e.quality })}
  onError={e => this.setState({ error: e.error })}
  style={{ alignSelf: 'stretch', height: 300 }}
  apiKey="AIzaSyAs3eMjXGtW9EmyP3Heh1sBCfxvaubsL6U"
  
/>
</View>
<View style={{marginTop:20}}>
<Text style={{textAlign:'center', marginBottom : 10}}>Motivational Video About Learning English</Text>
 <YouTube
  videoId="Y07dnUKwqyw" // The YouTube video ID
  // control playback of video with true/false
   // control whether the video should play in fullscreen or inline
  loop // control whether the video should loop when ended
  onReady={e => this.setState({ isReady: true })}
  onChangeState={e => this.setState({ status: e.state })}
  onChangeQuality={e => this.setState({ quality: e.quality })}
  onError={e => this.setState({ error: e.error })}
  style={{ alignSelf: 'stretch', height: 300 }}
  apiKey="AIzaSyD6TNqyDe-WmvxzHYR5uXvADEm6amODrp8"
  
/>
</View>
<View style={{marginTop:20}}>
<Text style={{textAlign:'center', marginBottom : 10}}>Motivational Video About Learning Something New</Text>
 <YouTube
  videoId="KSf3vde-odQ" // The YouTube video ID
  // control playback of video with true/false
   // control whether the video should play in fullscreen or inline
  loop // control whether the video should loop when ended
  onReady={e => this.setState({ isReady: true })}
  onChangeState={e => this.setState({ status: e.state })}
  onChangeQuality={e => this.setState({ quality: e.quality })}
  onError={e => this.setState({ error: e.error })}
  style={{ alignSelf: 'stretch', height: 300 }}
  apiKey="AIzaSyBgyC7GFQOyktkupNL8U9CIWmFbWnp1RkU"
  
/>
</View>
<View style={{marginTop:20}}>
<Text style={{textAlign:'center', marginBottom : 10}}>Motivational Video - Stop Negative Thoughts</Text>
 <YouTube
  videoId="rGpwRlCOLbY" // The YouTube video ID
  // control playback of video with true/false
   // control whether the video should play in fullscreen or inline
  loop // control whether the video should loop when ended
  onReady={e => this.setState({ isReady: true })}
  onChangeState={e => this.setState({ status: e.state })}
  onChangeQuality={e => this.setState({ quality: e.quality })}
  onError={e => this.setState({ error: e.error })}
  style={{ alignSelf: 'stretch', height: 300 }}
  apiKey="AIzaSyAmedoKjR6ejopodsaOhLPkljzv9wzPcQQ"
  
/>
</View>
<View style={{marginTop:20}}>
<Text style={{textAlign:'center', marginBottom : 10}}>Motivational Video About Love BreakUp</Text>
 <YouTube
  videoId="rqxKBSEhuu8" // The YouTube video ID
  // control playback of video with true/false
   // control whether the video should play in fullscreen or inline
  loop // control whether the video should loop when ended
  onReady={e => this.setState({ isReady: true })}
  onChangeState={e => this.setState({ status: e.state })}
  onChangeQuality={e => this.setState({ quality: e.quality })}
  onError={e => this.setState({ error: e.error })}
  style={{ alignSelf: 'stretch', height: 300 }}
  apiKey="AIzaSyB2IGYbtz-iTLj1Q0fjGW2uYre6hdAhgmM"
  
/>
</View>
<View style={{marginTop:20}}>
<Text style={{textAlign:'center', marginBottom : 10}}>Motivational Video - Being Happy All The Time</Text>
 <YouTube
  videoId="G-NTw4OcRPs" // The YouTube video ID
  // control playback of video with true/false
   // control whether the video should play in fullscreen or inline
  loop // control whether the video should loop when ended
  onReady={e => this.setState({ isReady: true })}
  onChangeState={e => this.setState({ status: e.state })}
  onChangeQuality={e => this.setState({ quality: e.quality })}
  onError={e => this.setState({ error: e.error })}
  style={{ alignSelf: 'stretch', height: 300 }}
  apiKey="AIzaSyDjrnihlG6rg3mnNg5Kf2_LKdTttBWuWdk"
  
/>
</View>
<View style={{marginTop:20}}>
<Text style={{textAlign:'center', marginBottom : 10}}>Motivational Video About Love BreakUp</Text>
 <YouTube
  videoId="rqxKBSEhuu8" // The YouTube video ID
  // control playback of video with true/false
   // control whether the video should play in fullscreen or inline
  loop // control whether the video should loop when ended
  onReady={e => this.setState({ isReady: true })}
  onChangeState={e => this.setState({ status: e.state })}
  onChangeQuality={e => this.setState({ quality: e.quality })}
  onError={e => this.setState({ error: e.error })}
  style={{ alignSelf: 'stretch', height: 300 }}
  apiKey="AIzaSyBz9fSGO6NyXP72Wj8-SAj2bssfbqR6ruo"
  
/>
</View>
<View style={{marginTop:20}}>
<Text style={{textAlign:'center', marginBottom : 10}}>Motivational Video About Love BreakUp</Text>
 <YouTube
  videoId="ayDLsz4Y2Vk" // The YouTube video ID
  // control playback of video with true/false
   // control whether the video should play in fullscreen or inline
  loop // control whether the video should loop when ended
  onReady={e => this.setState({ isReady: true })}
  onChangeState={e => this.setState({ status: e.state })}
  onChangeQuality={e => this.setState({ quality: e.quality })}
  onError={e => this.setState({ error: e.error })}
  style={{ alignSelf: 'stretch', height: 300 }}
  apiKey="AIzaSyAbwUc9HjpIv9RFrZ1ab4JMuu6W0NyD_yk"
  
/>
</View>
<View style={{marginTop:20}}>
<Text style={{textAlign:'center', marginBottom : 10}}>Motivational Video - When Hope Is Lost</Text>
 <YouTube
  videoId="bqVxBT-Z4yE" // The YouTube video ID
  // control playback of video with true/false
   // control whether the video should play in fullscreen or inline
  loop // control whether the video should loop when ended
  onReady={e => this.setState({ isReady: true })}
  onChangeState={e => this.setState({ status: e.state })}
  onChangeQuality={e => this.setState({ quality: e.quality })}
  onError={e => this.setState({ error: e.error })}
  style={{ alignSelf: 'stretch', height: 300 }}
  apiKey="AIzaSyA3_h6b-vXcy-P2Rp97BeYd2o7nvkheeEE"
  
/>
</View>
<View style={{marginTop:20}}>
<Text style={{textAlign:'center', marginBottom : 10}}>Motivational Video For Depressed Students</Text>
 <YouTube
  videoId="sb2nbhvKKIw" // The YouTube video ID
  // control playback of video with true/false
   // control whether the video should play in fullscreen or inline
  loop // control whether the video should loop when ended
  onReady={e => this.setState({ isReady: true })}
  onChangeState={e => this.setState({ status: e.state })}
  onChangeQuality={e => this.setState({ quality: e.quality })}
  onError={e => this.setState({ error: e.error })}
  style={{ alignSelf: 'stretch', height: 300 }}
  apiKey="AIzaSyA3_h6b-vXcy-P2Rp97BeYd2o7nvkheeEE"
  
/>
</View>
 </ScrollView>
			 	</View>)
	}
}


const styles = StyleSheet.create({
    toolbar:{
        backgroundColor:'#81c04d',
        paddingTop:20,
        paddingBottom:10,
        flexDirection:'row'    //Step 1
    },
    toolbarButton:{
        width: 50,            //Step 2
        color:'#fff',
        textAlign:'center'
    },
    toolbarTitle:{
        color:'#fff',
        textAlign:'center',
        fontWeight:'bold',
        flex:1,
        fontSize:20                //Step 3
    },
    ImagesRow : {
      flexDirection : 'row',
      marginHorizontal : moderateScale(30),
      marginTop : moderateScale(10)
    },
    mainContainer:{
      flex:1                  //Step 1
  },
  content:{
      backgroundColor:'#ebeef0',
      flex:1                //Step 2
  },
  commonWidth : {
    width : moderateScale(130)
  },
  messageBox:{
    alignItems : 'center'
  },
  messageBoxBodyText:{
    margin:10,
    fontSize:18
  },
  messageBoxBodyText2:{
    margin:10,
    fontSize:18,
    fontWeight : 'bold'
  }
  });