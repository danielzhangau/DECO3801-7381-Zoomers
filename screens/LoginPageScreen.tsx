import React, { useState } from 'react';
import { Button, Text, Image, TextInput, View } from 'react-native';

const LoginScreen = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isSignup, setIsSignup] = useState(true);

  return (
    <View>
      <Image
          source={{uri: "https://raw.githubusercontent.com/danielzhangau/DECO3801-7381-Zoomers/master/img/green%20miles.png"}}
          style={{width: 200, height: 200}}
      />

      <Text>Your name</Text>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1
        }}
        defaultValue="Your username"
      />

      <Text>Your password</Text>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1
        }}
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
          setIsSignup(false);
        }}
        disabled={!isSignup}
        title={isSignup ? "Signup" : "Signup Successful"}
      />
    </View>
  );
}

export default LoginScreen;