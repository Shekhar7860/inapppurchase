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
  ImageBackground,
} from 'react-native';
import firebase from 'react-native-firebase';
import {ScaledSheet, moderateScale} from 'react-native-size-matters';
import Toast from 'react-native-simple-toast';
const keyboardVerticalOffset = Platform.OS === 'ios' ? 40 : moderateScale(0);
import Spinner from 'react-native-loading-spinner-overlay';
const Banner = firebase.admob.Banner;
const AdRequest = firebase.admob.AdRequest;
const request = new AdRequest();
request.addKeyword('foobar');
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      visible: false,
    };
  }

  componentDidMount = () => {
    console.log('dggdgdgdg');
  };
  takeMe = () => {
    if (this.state.email && this.state.password) {
      this.setState({visible: true});
      try {
        firebase
          .auth()
          .signInWithEmailAndPassword(this.state.email, this.state.password)
          .then(res => {
            console.log('res', res.user);
            this.setState({visible: false});
            // this.props.navigation.navigate('Home')
          });
      } catch (error) {
        Toast.show(error.toString(error), Toast.LONG);
      }
    }
    this.setState({visible: false});
    Toast.show('Please Enter Email & Password Both', Toast.LONG);
  };

  signUp = () => {
    console.log('signUp');
    this.props.navigation.navigate('Register');
  };

  setEmail = email => {
    this.setState({email: email});
  };

  setPassword = password => {
    this.setState({password: password});
  };

  LoginGuest = () => {
    this.props.navigation.navigate('Home');
  };

  render() {
    return (
      <View
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
        <View style={styles.centerItems}>
          <Image
            style={styles.imageWidth}
            source={require('./images/shortinspirational.png')}
          />
        </View>

        <View style={styles.textAndTextInput}>
          <Text>Email</Text>
          <TextInput
            placeholder="Enter Email"
            style={styles.textInput}
            placeholderTextColor="white"
            selectionColor={'white'}
            onChangeText={text => this.setEmail(text)}
          />
        </View>
        <View style={styles.textAndTextInput}>
          <Text>Password</Text>
          <TextInput
            placeholder="Enter Password"
            onChangeText={text => this.setPassword(text)}
            style={styles.textInput}
            placeholderTextColor="white"
            selectionColor={'white'}
          />
        </View>
        <TouchableOpacity
          onPress={() => this.takeMe()}
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
            Login
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.itemsCenter}
          onPress={() => this.signUp()}>
          <Text style={styles.textStyle}>Not A Member? Sign Up </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.itemsCenter}
          onPress={() => this.LoginGuest()}>
          <Text style={styles.textStyle}>Login As Guest </Text>
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
      </View>
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
