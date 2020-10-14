import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, TextInput, ImageBackground } from 'react-native';
// import { addUser } from '../db-connection/database-add.js';
import * as database from '../db-connection/database-add.js'; 

class Inputs extends Component<{ value: string }, { }> {
  state = {
    username: '',
    password: '',
    checkpassword: ''
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
  signUp = (user, pass, passCheck) => { 
    if (pass != passCheck) {
      alert('The password your enter is different')
    } else {
      alert('Username: ' + user + ' Password: ' + pass + '\n You are good to SIGNUP!')
    }
  }
  render() {
    return (
      <View style = {styles.container}>
        <TextInput
          style={styles.textInput}
          underlineColorAndroid = "transparent"
          placeholder="Given name as your username"
          autoCapitalize = "none"
          placeholderTextColor='#787878' 
          onChangeText = {this.handleUsername}
        />
        <Text style={styles.textpassword}>Your password</Text>
        <TextInput
          style={styles.textInput}
          underlineColorAndroid = "transparent"
          placeholder="Enter your password"
          autoCapitalize = "none"
          secureTextEntry={true}
          placeholderTextColor='#787878'
          onChangeText = {this.handlePassword}
        />
        <TextInput
          style={styles.textInput}
          underlineColorAndroid = "transparent"
          placeholder="Confirm your password"
          autoCapitalize = "none"
          secureTextEntry={true}
          placeholderTextColor='#787878'
          onChangeText = {this.handlePasswordCheck}
        />
        <TouchableOpacity onPress = {() => {
          if (this.state.username == '' || this.state.password == '' || this.state.checkpassword == '') {
            alert('please make sure your entered your username and password')
          } else {
            this.signUp(this.state.username, this.state.password, this.state.checkpassword)
            // addUser(this.state.username, this.state.password)
          }
          // database.addUser(this.state.username, this.state.password)
          // addUser(this.state.username, this.state.password)
          }}>
          <View style = {{height: 50, width: 200, backgroundColor: 'white', 
                        alignItems: 'center', justifyContent: 'center', 
                        borderRadius: 40, marginVertical: 30}}>
            <Text style = {{color: '#30BB4C', fontFamily: 'Roboto-Bold',
                        fontSize: 22}}>Check Input</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}

const SignupScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('./../img/small_green2.jpg')} style={styles.backgroundImage}>
        <Image
            source={require('./../img/green_miles.png')}
            style={{width: 200, height: 100, backgroundColor: 'white', borderRadius: 40, 
                    alignItems: 'center', justifyContent: 'center', marginBottom: 20, marginTop: 10}}
        />
        <Text style={styles.text}>Your name</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Title"
          placeholderTextColor='#787878'
        />
        <TextInput
          style={styles.textInput}
          placeholder="Family name"
          placeholderTextColor='#787878'
        />
        <Text >{"\n"}{"\n"}</Text>
        <Inputs />
        <TouchableOpacity onPress = {() => {navigation.navigate('Home', { screen: 'LoginScreen' })}}>
            <View style = {{height: 50, width: 200, backgroundColor: 'white', 
                            alignItems: 'center', justifyContent: 'center', 
                            borderRadius: 40, marginVertical: 30}}>
                <Text style = {{color: '#30BB4C', fontFamily: 'Roboto-Bold',
                            fontSize: 22}}>SIGN UP</Text>
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
    textShadowOffset: {width: 0, height: 3},
    textShadowRadius: 4
  },
  textpassword: {
    fontFamily: 'Roboto-Bold',
    fontSize: 25,
    color: 'white',
    marginTop: 15,
    marginRight: 110,
    textShadowColor: '#3B3A3A',
    textShadowOffset: {width: 0, height: 3},
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