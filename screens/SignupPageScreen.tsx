import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, TextInput, ImageBackground } from 'react-native';
import { Dbconnect, test2 } from '../db-connection/mydb.js';

class Inputs extends Component<{ value: string }, {}> {
  state = {
    email: '',
    username: '',
    password: '',
    checkpassword: '',
    error: '',
    loading: false
  }

  // handle textinput to change state
  handleEmail = (text) => {
    this.setState({ email: text })
  }
  handleUsername = (text) => {
    this.setState({ username: text })
  }
  handlePassword = (text) => {
    this.setState({ password: text })
  }
  handlePasswordCheck = (text) => {
    this.setState({ checkpassword: text })
  }
  signUp = (email, pass, passCheck) => {
    if (pass != passCheck) {
      alert('The password your enter is different')
    } else {
      alert('Email: ' + email + ' Password: ' + pass + '\n You are good to SIGNUP!')
    }
  }
  render() {
    return (
      <View style={styles.container}>
        {/* <script src="db-connection/db.js"></script> */}
        <TextInput
          style={styles.textInput}
          underlineColorAndroid="transparent"
          placeholder="Email"
          autoCapitalize="none"
          placeholderTextColor='#787878'
          onChangeText={
            this.handleEmail
          }
        />
        <TextInput
          style={styles.textInput}
          placeholder="Family name (optional)"
          placeholderTextColor='#787878'
        />
        <TextInput
          style={styles.textInput}
          underlineColorAndroid="transparent"
          placeholder="Given name as your username"
          autoCapitalize="none"
          placeholderTextColor='#787878'
          onChangeText={this.handleUsername}
        />
        <Text style={styles.textpassword}>Your password</Text>
        <TextInput
          style={styles.textInput}
          underlineColorAndroid="transparent"
          placeholder="Enter your password"
          autoCapitalize="none"
          secureTextEntry={true}
          placeholderTextColor='#787878'
          onChangeText={
            this.handlePassword
          }
        />
        <TextInput
          style={styles.textInput}
          underlineColorAndroid="transparent"
          placeholder="Confirm your password"
          autoCapitalize="none"
          secureTextEntry={true}
          placeholderTextColor='#787878'
          onChangeText={this.handlePasswordCheck}
        />
        <TouchableOpacity onPress={() => {
          if (this.state.email == '' || this.state.username == '' || this.state.password == '' || this.state.checkpassword == '') {
            alert('please make sure your entered your email, username and password')
          } else {
            this.signUp(this.state.email, this.state.password, this.state.checkpassword)
            var dbconn = new Dbconnect(this.props);
            dbconn.name = this.state.username;
            dbconn.password = this.state.password;
            dbconn.email = this.state.email;
            dbconn.onPostUser();
            dbconn.onGetUsers();
          }
          test2(2);
        }}>

          <View style={{
            height: 50, width: 200, backgroundColor: 'white',
            alignItems: 'center', justifyContent: 'center',
            borderRadius: 40, marginVertical: 30
          }}>
            <Text style={{
              color: '#30BB4C', fontFamily: 'Roboto-Bold',
              fontSize: 22
            }}>Check Input</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}

const SignupScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground blurRadius={20} source={require('./../assets/images/small_green2.jpg')} style={styles.backgroundImage}>
        <Image
          source={require('./../assets/images/green_miles.png')}
          style={{
            width: 200, height: 100, backgroundColor: 'white', borderRadius: 40,
            alignItems: 'center', justifyContent: 'center', marginBottom: 20, marginTop: 10
          }}
        />
        <Text style={styles.text}>Your name</Text>

        <Text >{"\n"}{"\n"}</Text>
        <Inputs value="" />
        <TouchableOpacity onPress={() => { navigation.navigate('Home', { screen: 'LoginScreen' }) }}>
          <View style={{
            height: 50, width: 200, backgroundColor: 'white',
            alignItems: 'center', justifyContent: 'center',
            borderRadius: 40, marginVertical: 30
          }}>
            <Text style={{
              color: '#30BB4C', fontFamily: 'Roboto-Bold',
              fontSize: 22
            }}>SIGN UP</Text>
          </View>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Roboto',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    alignItems: 'center',
    width: '100%',
  },
  text: {
    fontFamily: 'Roboto-Bold',
    fontSize: 25,
    color: 'white',
    alignSelf: 'flex-start',
    marginLeft: 50,
    textShadowColor: '#3B3A3A',
    textShadowOffset: { width: 0, height: 3 },
    textShadowRadius: 4
  },
  textpassword: {
    fontFamily: 'Roboto-Bold',
    fontSize: 25,
    color: 'white',
    marginTop: 15,
    marginRight: 110,
    textShadowColor: '#3B3A3A',
    textShadowOffset: { width: 0, height: 3 },
    textShadowRadius: 4
  },
  textInput: {
    height: 45,
    width: 300,
    fontSize: 20,
    borderColor: '#707070',
    borderWidth: 1,
    marginTop: 10,
    backgroundColor: '#FFFFFF',
    opacity: 0.43,
    color: '#000000',
    paddingLeft: 10,
  }
})

export default SignupScreen;
