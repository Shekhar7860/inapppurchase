import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Image,
  Share,
  ImageBackground,
  FlatList,
  Dimensions,
} from 'react-native';
import YouTube from 'react-native-youtube';
import firebase from 'react-native-firebase';
import {ScaledSheet, moderateScale} from 'react-native-size-matters';
const Banner = firebase.admob.Banner;
const AdRequest = firebase.admob.AdRequest;

const advert = firebase
  .admob()
  .interstitial('ca-app-pub-3476542526287283/1938257612');
const request = new AdRequest();
request.addKeyword('foobar');
export default class Benefits extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imagesArray: [1, 2, 3],
    };
  }

  componentDidMount = () => {
    firebase
      .database()
      .ref('/god')
      .once('value')
      .then(dataSnapshot => {
        let newdata = dataSnapshot.val();
        if (dataSnapshot.val()) {
          let imagesArray = Object.values(newdata);
          this.arrayholder = imagesArray;
          console.log('imagesRaay', imagesArray);
          this.setState({imagesArray});
          this.setState({refreshing: false});
        }
      });
  };

  renderName = name => {
    return name.item.name;
  };

  goBack = () => {
    this.props.navigation.goBack();
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <View style={styles.toolbar}>
          <TouchableOpacity
            style={styles.toolbarButton}
            onPress={() => this.goBack()}>
            <Image
              style={{width: 30, marginLeft: 5, height: 30}}
              source={require('./images/back.png')}
            />
          </TouchableOpacity>
          <Text style={styles.toolbarTitle}>God Quotes</Text>
          <TouchableOpacity style={styles.toolbarButton}>
            <Image
              style={{width: 30, marginLeft: 5, height: 30}}
              source={require('./images/heart.png')}
            />
          </TouchableOpacity>
        </View>
        <View style={{flex: 1}}>
          <FlatList
            data={this.state.imagesArray}
            extraData={this.state}
            keyExtractor={(item, index) => index.toString()}
            renderItem={(item, index) => (
              <View style={{marginBottom: moderateScale(10)}}>
                <ImageBackground
                  source={require('./images/backgroundImage.jpg')}
                  style={{
                    width: Dimensions.get('window').width,
                    height: moderateScale(250),
                    justifyContent: 'center',
                    borderColor: '#bdc3c7',
                  }}>
                  <Text
                    style={{
                      fontSize: 20,
                      textAlign: 'center',
                      color: '#FFFFFF',
                    }}>
                    {this.renderName(item)}
                  </Text>
                </ImageBackground>
                <View style={styles.ImagesRow}>
                  <TouchableOpacity style={styles.commonWidth} />
                  <TouchableOpacity style={styles.commonWidth}>
                    <Image source={require('./images/download.png')} />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.commonWidth}
                    onPress={() => this.share(item)}>
                    <Image source={require('./images/shareBlack.png')} />
                  </TouchableOpacity>
                </View>
              </View>
            )}
          />
        </View>

        <Banner
          style={{alignSelf: 'center', marginLeft: 0, marginTop: 20}}
          size={'SMALL_BANNER'}
          unitId={'ca-app-pub-1023595993469094/8360377884'}
          request={request.build()}
          onAdLoaded={() => {
            console.log('Advert loaded');
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  toolbar: {
    backgroundColor: '#81c04d',
    paddingTop: 20,
    paddingBottom: 10,
    flexDirection: 'row', //Step 1
  },
  toolbarButton: {
    width: 50, //Step 2
    color: '#fff',
    textAlign: 'center',
  },
  toolbarTitle: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    flex: 1,
    fontSize: 20, //Step 3
  },
  ImagesRow: {
    flexDirection: 'row',
    marginHorizontal: moderateScale(30),
    marginTop: moderateScale(10),
  },
  mainContainer: {
    flex: 1, //Step 1
  },
  content: {
    backgroundColor: '#ebeef0',
    flex: 1, //Step 2
  },
  commonWidth: {
    width: moderateScale(130),
  },
  messageBox: {
    alignItems: 'center',
  },
  messageBoxBodyText: {
    margin: 10,
    fontSize: 18,
  },
  messageBoxBodyText2: {
    margin: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
});
