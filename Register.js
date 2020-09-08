import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import firebase from 'react-native-firebase';
import {ScaledSheet, moderateScale} from 'react-native-size-matters';
import Toast from 'react-native-simple-toast';
import Spinner from 'react-native-loading-spinner-overlay';
const keyboardVerticalOffset = Platform.OS === 'ios' ? 40 : moderateScale(0);
const Banner = firebase.admob.Banner;
const AdRequest = firebase.admob.AdRequest;
const request = new AdRequest();
request.addKeyword('foobar');
export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      visible: false,
    };
  }

  setName = name => {
    this.setState({name: name});
  };

  setEmail = email => {
    this.setState({email: email});
  };

  setPassword = password => {
    this.setState({password: password});
  };

  register = () => {
    if (this.state.name && this.state.email && this.state.password) {
      this.setState({visible: true});
      try {
        firebase
          .auth()
          .createUserWithEmailAndPassword(this.state.email, this.state.password)
          .then(user => {
            this.setState({visible: false});
            console.log('res', res);

            //  this.props.navigation.navigate('Home')
          });
      } catch (error) {
        this.setState({visible: false});
        Toast.show(error.toString(error), Toast.LONG);
      }
    } else {
      this.setState({visible: false});
      Toast.show('Please Enter Valid Details', Toast.LONG);
    }
  };
  render() {
    return (
      <KeyboardAvoidingView
        behavior="position"
        keyboardVerticalOffset={keyboardVerticalOffset}
        style={{flex: 1, backgroundColor: '#487eb0'}}>
        <Spinner
          visible={this.state.visible}
          color="#9b59b6"
          tintColor="#9b59b6"
          animation={'fade'}
          cancelable={false}
          textStyle={{color: '#FFF'}}
        />
        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
          <Image
            style={{margin: moderateScale(20)}}
            source={require('./images/back.png')}
          />
        </TouchableOpacity>
        <View style={styles.centerItems}>
          <Image
            style={styles.imageWidth}
            source={require('./images/shortinspirational.png')}
          />
        </View>
        <View style={styles.textAndTextInput}>
          <Text>Name</Text>
          <TextInput
            onChangeText={text => this.setName(text)}
            placeholder="Enter Name"
            style={styles.textInput}
            placeholderTextColor="white"
            selectionColor={'white'}
          />
        </View>
        <View style={styles.textAndTextInput}>
          <Text>Email</Text>
          <TextInput
            onChangeText={text => this.setEmail(text)}
            placeholder="Enter Email"
            style={styles.textInput}
            placeholderTextColor="white"
            selectionColor={'white'}
          />
        </View>
        <View style={styles.textAndTextInput}>
          <Text>Password</Text>
          <TextInput
            onChangeText={text => this.setPassword(text)}
            placeholder="Enter Password"
            style={styles.textInput}
            placeholderTextColor="white"
            selectionColor={'white'}
          />
        </View>
        <TouchableOpacity
          onPress={() => this.register()}
          style={{
            marginTop: 20,
            backgroundColor: '#0097e6',
            borderRadius: 10,
            width: '30%',
            alignSelf: 'center',
            height: 50,
            justifyContent: 'center',
          }}>
          <Text style={{textAlign: 'center', color: 'white', fontSize: 20}}>
            Register
          </Text>
        </TouchableOpacity>

        <Banner
          style={{alignSelf: 'center', marginLeft: 0, marginTop: 20}}
          size={'SMALL_BANNER'}
          unitId={'ca-app-pub-3476542526287283/2902186623'}
          request={request.build()}
          onAdLoaded={() => {
            console.log('Advert loaded');
          }}
        />
      </KeyboardAvoidingView>
    );
  }
}

const styles = ScaledSheet.create({
  imageWidth: {
    width: '280@s', // = scale(100)
    height: '170@vs', // = verticalScale(200) // = Math.round(moderateScale(2))
  },
  textAndTextInput: {
    width: '80%',
    alignSelf: 'center',
    marginTop: moderateScale(30),
  },
  itemsCenter: {
    alignItems: 'center',
  },
  textStyle: {
    color: '#ffffff',
    marginTop: moderateScale(20),
  },
  textInput: {
    borderBottomWidth: 1,
    borderBottomColor: '#FFFFFF',
    marginTop: moderateScale(-10),
    width: '100%',
  },
  centerItems: {
    alignItems: 'center',
    marginTop: moderateScale(20),
  },
  row: {
    padding: '10@ms0.3', // = moderateScale(10, 0.3)
    height: '50@ms', // = moderateScale(50)
  },
});
