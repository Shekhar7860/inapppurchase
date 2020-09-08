import React, { Component } from 'react';
import {View,Text , TouchableOpacity, StyleSheet, ImageBackground, ScrollView, Platform} from 'react-native'
import firebase from 'react-native-firebase';
import * as RNIap from 'react-native-iap';
import { ScaledSheet, moderateScale } from 'react-native-size-matters';
const Banner = firebase.admob.Banner;
const AdRequest = firebase.admob.AdRequest;

const advert = firebase.admob().interstitial('ca-app-pub-1023595993469094/6452098527')
const request = new AdRequest();
request.addKeyword('foobar');
const advert2 = firebase.admob().interstitial('ca-app-pub-1023595993469094/2176029328')
const request2 = new AdRequest();
request2.addKeyword('foobar');

const items = Platform.select({
 ios: [
  'com.example.productId'
 ],
 android: [
  'com.demo'
 ]
});
export default class Home extends Component {
	
	takeMe = () => {
		// alert("hiiii")
	}

  openInApp = () => {
    
   // RNIap.prepare();
RNIap.getProducts(items).then((products) => {
 console.log('products', products)
 RNIap.requestPurchase(products[0].productId).then((result) => {
 console.log('res', result)
 advert2.loadAd(request.build());
advert2.on('onAdLoaded', () => {
  console.log('Advert ready to show.');
});

setTimeout(() => {
  if (advert2.isLoaded()) {
    advert2.show();
  } else {
  console.log('error occured')
  }
}, 1000)
this.props.navigation.navigate('Videos')
}).catch((error) => {
 alert(JSON.stringify(error))
})
}).catch((error) => {
 alert(JSON.stringify(error))
})
  }
	componentDidMount = () => {
 
		
	}
 render () {
		return (<View
			 style={{flex:1}}>
       <ScrollView>
			 <View style={{width:"100%", flexDirection : 'row', marginTop:30}}>
			 <View style={{width:moderateScale(10)}}></View>
			 <TouchableOpacity style={styles.outerBorder} onPress={() => this.props.navigation.navigate("Offers")}>
			 <ImageBackground  source={require('./images/dream.png')}  style={{width:moderateScale(165), height : moderateScale(100), justifyContent :"flex-end", borderColor : "#bdc3c7"}}><Text style={{fontSize : 12, textAlign:"center", color: "#ced6e0"}}>Motivational</Text></ImageBackground>
			 </TouchableOpacity>
			 <View style={{width:moderateScale(10)}}></View>
			 <TouchableOpacity style={styles.outerBorder} onPress={() => this.props.navigation.navigate("Joining")}>
			 <ImageBackground  source={require('./images/motivation.jpg')}  style={{width:moderateScale(165), height : moderateScale(100), justifyContent : 'flex-end'}}><Text style={{fontSize : 12, textAlign:"center", color : "#16a085"}}>Success Quotes</Text></ImageBackground>
			 </TouchableOpacity>
			 <View style={{width:"5%"}}></View>
			 </View>

			 
			 <View style={{width:"100%", flexDirection : 'row', marginTop:30}}>
			 <View style={{width:moderateScale(10)}}></View>
			 <TouchableOpacity style={styles.outerBorder} onPress={() => this.props.navigation.navigate("Sponsoring")}>
			 <ImageBackground  source={require('./images/hope.jpg')}  style={{width:moderateScale(165), height : moderateScale(100), justifyContent :"flex-end"}}><Text style={{fontSize : 12, textAlign:"center", color : "white"}}>Hope</Text></ImageBackground>
			 </TouchableOpacity>
			 <View style={{width:moderateScale(10)}}></View>
			 <TouchableOpacity style={styles.outerBorder} onPress={() => this.props.navigation.navigate("Seminar")} >
			 <ImageBackground  source={require('./images/planning.jpg')} style={{width:moderateScale(165), height : moderateScale(100), justifyContent :"flex-end"}}><Text style={{fontSize : 12, textAlign:"center", color : "white"}}>Planning</Text></ImageBackground>
			 </TouchableOpacity>
			 <View style={{width:"5%"}}></View>
			 </View>


			 <View style={{width:"100%", flexDirection : 'row', marginTop:30}}>
			 <View style={{width:moderateScale(10)}}></View>
			 <TouchableOpacity style={styles.outerBorder} onPress={() => this.props.navigation.navigate("Complaints")}>
			 <ImageBackground  source={require('./images/inspire.jpg')}  style={{width:moderateScale(165), height : moderateScale(100), justifyContent :"flex-end"}}><Text style={{fontSize : 12, textAlign:"center", color : "#182C61"}}>Inspire</Text></ImageBackground>
			 </TouchableOpacity>
			 <View style={{width:moderateScale(10)}}></View>
			 <TouchableOpacity style={styles.outerBorder} onPress={() => this.props.navigation.navigate("BirthDays")}>
			 <ImageBackground  source={require('./images/happiness.jpeg')}  style={{width:moderateScale(165), height : moderateScale(100), justifyContent :"flex-end"}}><Text style={{fontSize : 12, textAlign:"center", color : "#2c3e50"}}>Happiness</Text></ImageBackground>
			 </TouchableOpacity>
			 <View style={{width:"5%"}}></View>
			 </View>



			 <View style={{width:"100%", flexDirection : 'row', marginTop:30}}>
			 <View style={{width:moderateScale(10)}}></View>
			 <TouchableOpacity style={styles.outerBorder} onPress={() => this.props.navigation.navigate("Benefits")}>
			 <ImageBackground  source={require('./images/god.png')}  style={{width:moderateScale(165), height : moderateScale(100), justifyContent :"flex-end"}}><Text style={{fontSize : 12, textAlign:"center"}}>Faith</Text></ImageBackground>
			 </TouchableOpacity>
			 <View style={{width:moderateScale(10)}}></View>
			 <TouchableOpacity style={styles.outerBorder} onPress={() => this.props.navigation.navigate("Screen1")}>
			 <ImageBackground  source={require('./images/birthday.jpg')}  style={{width:moderateScale(165), height : moderateScale(100), justifyContent :"flex-end"}}><Text style={{fontSize : 12, textAlign:"center", color : "#9b59b6"}}>BirthDays</Text></ImageBackground>
			 </TouchableOpacity>
			 <View style={{width:"5%"}}></View>
			 </View>


			<TouchableOpacity onPress={ () => this.openInApp() } style={{marginTop : 20, width : '90%', backgroundColor : '#8e44ad', alignSelf : 'center', height : 50, justifyContent : 'center', alignItems : 'center'}}>
      <Text style={{color : "white"}}>Open  Motivational Videos </Text>
      </TouchableOpacity>
 <Banner
       style={{alignSelf:'center',marginLeft:0, marginTop:20}}
    size={"SMALL_BANNER"}
  unitId={"ca-app-pub-1023595993469094/7026813595"}
  request={request.build()}
  onAdLoaded={() => {
    console.log('Advert loaded');
  }} />
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