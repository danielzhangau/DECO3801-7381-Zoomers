import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, Text, Image, TextInput, View } from 'react-native';

class Inputs extends Component {
  state = {
    username: '',
    password: ''
  }
  handleUsername = (text) => {
      this.setState({ username: text })
  }
  handlePassword = (text) => {
      this.setState({ password: text })
  }
  login = (user, pass) => {
      alert('username: ' + user + ' password: ' + pass)
  }
  render() {
      return (
          <View style = {styles.container}>
              <TextInput
                  style={styles.textInput}
                  underlineColorAndroid = "transparent"
                  placeholder="Your username"
                  autoCapitalize = "none"
                  placeholderTextColor='#787878'
                  onChangeText = {this.handleUsername}
              />
              <TextInput
                  style={styles.textInput}
                  underlineColorAndroid = "transparent"
                  placeholder="Your password"
                  placeholderTextColor='#787878'
                  autoCapitalize = "none"
                  onChangeText = {this.handlePassword}
                  secureTextEntry={true}
              />
              <TouchableOpacity onPress = {() => {
                  if (this.state.username == '' || this.state.password == '') {
                      alert('please make sure your entered your username and password')
                  } else {
                      this.login(this.state.username, this.state.password)
                  }
                  }}>
                  <View style = {{height: 50, width: 200, backgroundColor: 'white', 
                                  alignItems: 'center', justifyContent: 'center', 
                                  borderRadius: 40, marginVertical: 10}}>
                      <Text style = {{color: '#30BB4C', fontFamily: 'Roboto-Bold',
                                  fontSize: 22}}>Check Input</Text>
                  </View>
              </TouchableOpacity>
          </View>
      )
  }
}

const LoginScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image
          source={require('./../img/green_miles.png')}
          style={{width: 200, height: 200}}
      />

      {/* <TextInput
        style={styles.textInput}
        placeholder="Your username"
        placeholderTextColor='#787878'
      />
      <TextInput
        style={styles.textInput}
        placeholder="Your password"
        placeholderTextColor='#787878'
        secureTextEntry={true}
      /> */}
      <Inputs />
      <Text >{"\n"}</Text>
      <TouchableOpacity onPress = {() => {navigation.navigate('Home', { screen: 'HomeScreen' })}}>
          <View style = {{height: 50, width: 200, backgroundColor: 'white', 
                          alignItems: 'center', justifyContent: 'center', 
                          borderRadius: 40, marginVertical: 10}}>
              <Text style = {{color: '#30BB4C', fontFamily: 'Roboto-Bold',
                          fontSize: 22}}>LOG IN</Text>
          </View>
      </TouchableOpacity>
      <Text style={styles.text}>New to here?</Text>
      <TouchableOpacity onPress = {() => {navigation.navigate('Home', { screen: 'SignupScreen' })}}>
          <View style = {{height: 50, width: 200, backgroundColor: 'white', 
                          alignItems: 'center', justifyContent: 'center', 
                          borderRadius: 40, marginVertical: 10}}>
              <Text style = {{color: '#30BB4C', fontFamily: 'Roboto-Bold',
                          fontSize: 22}}>SIGN UP</Text>
          </View>
      </TouchableOpacity>
      <Text >{"\n"}{"\n"}{"\n"}</Text>
      <Text style={styles.textForget}>Forget your username?</Text>
      <Text style={styles.textForget}>Forget your password?</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#068D3C',
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: 'Roboto',
  },
  text: {
      fontSize: 15,
      color: 'white',
  },
  textInput: {
      height: 50,
      width: 300,
      fontSize: 20,
      borderColor: '#707070',
      borderWidth: 1,
      backgroundColor: '#FFFFFF',
      opacity: 0.43,
      color: '#000000',
      marginBottom: 35,
      paddingLeft: 10,
  }, 
  textForget: {
      fontSize: 15,
      color: 'white',
      alignSelf: 'flex-start',
      marginLeft: 40
  }
})

export default LoginScreen;