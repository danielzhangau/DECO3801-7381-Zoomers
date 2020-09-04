import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, Button, Text, Image, TextInput, View } from 'react-native';

const LoginScreen = ({navigation}) => {
  const [isLogin, setIsLogin] = useState(true);
  // const [isSignup, setIsSignup] = useState(true);

  return (
    <View style={styles.container}>
      <Image
          source={{uri: "https://raw.githubusercontent.com/danielzhangau/DECO3801-7381-Zoomers/master/img/green%20miles.png"}}
          style={{width: 200, height: 200}}
      />

      <TextInput
        style={styles.textInput}
        defaultValue="Your username"
      />
      <TextInput
        style={styles.textInput}
        defaultValue="Your password"
      />
      <TouchableOpacity onPress = {() => {navigation.navigate('Home')}}>
          <View style = {{height: 50, width: 200, backgroundColor: 'white', 
                          alignItems: 'center', justifyContent: 'center', 
                          borderRadius: 40, marginVertical: 10}}>
              <Text style = {{color: '#30BB4C', fontFamily: 'Roboto-Bold',
                          fontSize: 22}}>LOG IN</Text>
          </View>
      </TouchableOpacity>
      <Text style={styles.text}>New to here?</Text>
      <TouchableOpacity onPress = {() => {navigation.navigate('Signup')}}>
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
      color: '#787878',
      marginBottom: 35
  }, 
  textForget: {
      fontSize: 15,
      color: 'white',
      alignSelf: 'flex-start',
      marginLeft: 40
  }
})

export default LoginScreen;