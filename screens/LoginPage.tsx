import React from 'react';
import { Text, TextInput, View } from 'react-native';

const Login = () => {
  return (
    <View>
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
    </View>
  );
}

export default Login;