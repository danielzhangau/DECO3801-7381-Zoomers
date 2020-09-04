import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, Button, Image, TextInput } from 'react-native';

import { Text, View } from '../components/Themed';

const SignupScreen = ({navigation}) => {
  const [text, setText] = useState('');
  return (
    <View style={styles.container}>
      <Image
          source={{uri: "https://raw.githubusercontent.com/danielzhangau/DECO3801-7381-Zoomers/master/img/green%20miles.png"}}
          style={{width: 200, height: 100, backgroundColor: 'white', borderRadius: 40, 
                  alignItems: 'center', justifyContent: 'center', marginBottom: 20}}
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
      <TextInput
        style={styles.textInput}
        placeholder="Given name"
        placeholderTextColor='#787878'
      />

      <View style={styles.separator} lightColor="#707070" darkColor="#515151" />

      <Text style={styles.text}>Your password</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Enter your password"
        secureTextEntry={true}
        placeholderTextColor='#787878'
      />
      
      <TextInput
        style={styles.textInput}
        placeholder="Confirm your password"
        secureTextEntry={true}
        placeholderTextColor='#787878'
      />

      <TouchableOpacity onPress = {() => {navigation.navigate('Login')}}>
          <View style = {{height: 50, width: 200, backgroundColor: 'white', 
                          alignItems: 'center', justifyContent: 'center', 
                          borderRadius: 40, marginVertical: 30}}>
              <Text style = {{color: '#30BB4C', fontFamily: 'Roboto-Bold',
                          fontSize: 22}}>SIGN UP</Text>
          </View>
      </TouchableOpacity>
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
  separator: {
      marginVertical: 30,
      height: 1,
      width: '80%',
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