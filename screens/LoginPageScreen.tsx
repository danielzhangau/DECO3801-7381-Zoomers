import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, Text, Image, TextInput, View, ImageBackground } from 'react-native';

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
    alert('username: ' + user + ' password: ' + pass + '\n You are good to LOGIN!')
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
                                borderRadius: 40, marginBottom: 10}}>
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
      <ImageBackground source={require('./../img/small_green2.jpg')} style={styles.backgroundImage}>
        <Image
            source={require('./../img/green_miles.png')}
            style={{width: 200, height: 100, backgroundColor: 'white', borderRadius: 40, 
            alignItems: 'center', justifyContent: 'center', marginBottom: 60, marginTop: 20}}
        />
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
        <Text >{"\n"}</Text>
        <Text style={styles.textForget}>Forget your username?</Text>
        <Text style={styles.textForget}>Forget your password?</Text>
        <Text >{"\n"}</Text>
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