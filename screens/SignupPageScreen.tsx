import React, { useState } from 'react';
import { Text, Image, TextInput, View } from 'react-native';

const SignupScreen = () => {
  const [text, setText] = useState('');
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
        placeholder="Your username"
      />

      <Text>Your password</Text>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1
        }}
        placeholder="Your password"
        onChangeText={text => setText(text)}
        defaultValue={text}
      />
      {/* just playing around */}
      <Text style={{padding: 10, fontSize: 42}}>
        {text.split(' ').map((word) => word && '🍕').join(' ')}
      </Text>
    </View>
  );
}

export default SignupScreen;