import React, { useState } from 'react';
import { StyleSheet, Button, Text, Image, TextInput, View } from 'react-native';

const LoginScreen = ({navigation}) => {
  const [isLogin, setIsLogin] = useState(true);
  // const [isSignup, setIsSignup] = useState(true);

  return (
    <View style={styles.container}>
      <Image
          source={{uri: "https://raw.githubusercontent.com/danielzhangau/DECO3801-7381-Zoomers/master/img/green%20miles.png"}}
          style={{width: 200, height: 200}}
      />

      <Text style={styles.text}>Your name</Text>
      <TextInput
        style={styles.textInput}
        defaultValue="Your username"
      />

      <Text style={styles.text}>Your password</Text>
      <TextInput
        style={styles.textInput}
        defaultValue="Your password"
      />

      <Button
        onPress={() => {
          setIsLogin(false);
        }}
        disabled={!isLogin}
        title={isLogin ? "Login" : "Login Successful"}
      />

      <Button
        onPress={() => {
          // setIsSignup(false);
          navigation.navigate('Signup')
        }}
        // disabled={!isSignup}
        // title={isSignup ? "Signup" : "Signup Successful"}
        title="Signup"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#068D3C',
      justifyContent: 'center',
      alignItems: 'center',
  },
  text: {
      // fontFamily: Roboto,
      fontSize: 25,
      // fontStyle: medium,
      color: 'white',
  },
  textInput: {
      height: 40,
      width: 300,
      fontSize: 25,
      borderColor: 'white',
      borderWidth: 1
  }
})

export default LoginScreen;