import React, { useState } from 'react';
import { StyleSheet, Button, Text, Image, TextInput, View } from 'react-native';

const SignupScreen = ({navigation}) => {
  const [text, setText] = useState('');
  return (
    <View style={styles.container}>
      <Image
          source={{uri: "https://raw.githubusercontent.com/danielzhangau/DECO3801-7381-Zoomers/master/img/green%20miles.png"}}
          style={{width: 200, height: 200}}
      />

      <Text style={styles.text}>Your name</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Title"
      />
      <TextInput
        style={styles.textInput}
        placeholder="Family name"
      />
      <TextInput
        style={styles.textInput}
        placeholder="Given name"
      />

      <Text style={styles.text}>Your password</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Enter your password"
        onChangeText={text => setText(text)}
        defaultValue={text}
      />
      {/* just playing around */}
      <Text style={{padding: 10, fontSize: 42}}>
        {text.split(' ').map((word) => word && '🍕').join(' ')}
      </Text>
      <TextInput
        style={styles.textInput}
        placeholder="Confirm your password"
      />

      <Button
        onPress={() => {
          navigation.navigate('Login')
        }}
        title="Sign up"
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
      fontStyle: 'normal',
      fontFamily: 'Roboto',
  },
  text: {
      fontSize: 25,
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

export default SignupScreen;