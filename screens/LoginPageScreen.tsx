import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, Button, Text, Image, TextInput, View } from 'react-native';

const LoginScreen = ({navigation}) => {
  const [isLogin, setIsLogin] = useState(true);
  // const [isSignup, setIsSignup] = useState(true);

  return (
    <View style={styles.container}>
      <Image
          source={require('../img/green_miles.png')}
          style={{width: 200, height: 100, backgroundColor: 'white', borderRadius: 40, alignItems: 'center', justifyContent: 'center', marginBottom: 20}}
      />

      <TextInput
        style={styles.textInput}
        placeholder="Your username"
        placeholderTextColor='#787878'
      />
      <TextInput
        style={styles.textInput}
        placeholder="Your password"
        placeholderTextColor='#787878'
        secureTextEntry={true}
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