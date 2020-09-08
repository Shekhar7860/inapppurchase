import React, { Component } from 'react';
//Import React
import { Platform, StyleSheet, Text, View, Share,ScrollView, TouchableOpacity, Image, FlatList, ImageBackground, Dimensions } from 'react-native';
import YouTube from 'react-native-youtube';
import { ScaledSheet, moderateScale } from 'react-native-size-matters';
import firebase from 'react-native-firebase';

const Banner = firebase.admob.Banner;
const AdRequest = firebase.admob.AdRequest;

const advert = firebase.admob().interstitial('ca-app-pub-1023595993469094~8220723186')
const request = new AdRequest();
request.addKeyword('foobar');
class Screen extends Component {
 
  constructor(props) {
    super(props);
    this.state = {
      currentTime: 0,
      duration: 0,
      isFullScreen: false,
      isLoading: true,
      paused: false,

      screenType: 'content',
    };
  }
 
   componentDidMount = () => {
    firebase.database().ref('/birthday').once('value')
     .then((dataSnapshot) => {
       let newdata = dataSnapshot.val();
     if(dataSnapshot.val())
     {
       let imagesArray = Object.values(newdata);
       this.arrayholder = imagesArray;
       console.log('imagesRaay', imagesArray)
      this.setState({imagesArray});
      this.setState({refreshing : false})
     }
      });

  }

  share = (item) => {
       advert.loadAd(request.build()); 
      advert.on('onAdLoaded', () => {
      console.log('Advert ready to show.');
       });
    setTimeout(() => {
     if (advert.isLoaded()) {
      advert.show();
     } else {
     console.log('error occured')
     }
      }, 1000)
    Share.share({
      message: item.item.name,
      url: 'https://play.google.com/store/apps/details?id=com.blogs',
      title: item.name
    }, {
      // Android only:
      dialogTitle: 'Share the app',
      // iOS only:
      excludedActivityTypes: [
        'com.apple.UIKit.activity.PostToTwitter'
      ]
    })
  }
  
  exitFullScreen = () => {
    alert('Exit full screen');
  };
  
  enterFullScreen = () => {};
  

   renderName = (name) => {
 return name.item.name;
  }

  goBack= () => {
    this.props.navigation.goBack()
  }
  onFullScreen = () => {
    if (this.state.screenType == 'content')
      this.setState({ screenType: 'cover' });
    else this.setState({ screenType: 'content' });
  };
  renderToolbar = () => (
    <View>
      <Text> toolbar </Text>
    </View>
  );
  onSeeking = currentTime => this.setState({ currentTime });
 
  render() {
    return (
      <View
       style={{flex:1}}>
       <View style={styles.toolbar}>
       <TouchableOpacity style={styles.toolbarButton}  onPress={() => this.goBack()}>
        <Image style={{width:30,marginLeft:5,  height:30}} source={require('./images/back.png')}></Image>
        </TouchableOpacity>
        <Text style={styles.toolbarTitle}>BirthDay Quotes</Text>
       <TouchableOpacity style={styles.toolbarButton}>
        <Image style={{width:30,marginLeft:5,  height:30}} source={require('./images/heart.png')}></Image>
        </TouchableOpacity>
        </View> 
        <View style={{flex:1}}>
              <FlatList data={this.state.imagesArray} 
       extraData = {this.state}
       keyExtractor={(item, index) => index.toString()}
       renderItem = { (item, index) => <View style={{marginBottom : moderateScale(10)}}><ImageBackground  source={require('./images/backgroundImage.jpg')}  style={{width:Dimensions.get('window').width, height : moderateScale(250), justifyContent :"center", borderColor : "#bdc3c7"}}><Text style={{fontSize : 20, textAlign:"center", color: "#FFFFFF"}}>{this.renderName(item)}</Text></ImageBackground>
        <View style={styles.ImagesRow}>
        <TouchableOpacity style={styles.commonWidth}>
        </TouchableOpacity>
        <TouchableOpacity style={styles.commonWidth}>
        <Image source={require('./images/download.png')}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.commonWidth} onPress={() => this.share(item)}>
        <Image source={require('./images/shareBlack.png')}/>
        </TouchableOpacity>
        </View></View>}/>
        </View>
 <Banner
       style={{alignSelf:'center',marginLeft:0, marginTop:20}}
    size={"SMALL_BANNER"}
  unitId={"ca-app-pub-1023595993469094/3970201571"}
  request={request.build()}
  onAdLoaded={() => {
    console.log('Advert loaded');
  }} />
        </View>    );
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
  });export default Screen;