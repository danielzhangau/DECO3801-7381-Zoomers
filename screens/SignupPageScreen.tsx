// import client from '../db-connection/database-add';
import React, { useState, Component } from 'react';
import { TouchableOpacity, StyleSheet, Button, Image, TextInput } from 'react-native';

import { Text, View } from '../components/Themed';

class Inputs extends React.Component<{ value: string }, { }> {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      checkpassword: ''
    };
  }
  handleUsername = (text) => {
    this.setState({ username: text })
  }
  handlePassword = (text) => {
    this.setState({ password: text })
  }
  handlePasswordCheck = (text) => {
    this.setState({ checkpassword: text })
  }
  signUp = (user, pass, passCheck) => { 
    if (pass != passCheck) {
      alert('The password your enter is different')
    } else {
      alert('username: ' + user + ' password: ' + pass)
    }
    // this.props.navigation.navigate('Home', { screen: 'HomeScreen' })
    // client.connect((err, client2) => {
    //   if (err) throw err;
    //   // specify the DB's name
    //   const db = client2.db("GreenMiles");
    //   const collection = db.collection("userdata");
    
    //   var myobj = { user: user, password: pass, miles: "37" };
    //   collection.insertOne(myobj, function(err, r) {
    //     if (err) throw err;
    //     console.log('inside insertOne')
    //     // close connection
    //     client2.close();
    //   });
    
    //   console.log("Database created!", db.databaseName, collection.collectionName);
    // });
  }
  render() {
    return (
      <View style = {styles.container}>
        <View style={styles.separator} lightColor="#707070" darkColor="#515151" />
        <TextInput
          style={styles.textInput}
          underlineColorAndroid = "transparent"
          placeholder="Given name as your username"
          autoCapitalize = "none"
          placeholderTextColor='#787878' 
          onChangeText = {this.handleUsername}
        />

        <Text style={styles.textpassword}>Your password</Text>
        <TextInput
          style={styles.textInput}
          underlineColorAndroid = "transparent"
          placeholder="Enter your password"
          autoCapitalize = "none"
          secureTextEntry={true}
          placeholderTextColor='#787878'
          onChangeText = {this.handlePassword}
        />
        <TextInput
          style={styles.textInput}
          underlineColorAndroid = "transparent"
          placeholder="Confirm your password"
          autoCapitalize = "none"
          secureTextEntry={true}
          placeholderTextColor='#787878'
          onChangeText = {this.handlePasswordCheck}
        />
        <TouchableOpacity onPress = {() => {
          if (this.state.username == '' || this.state.password == '' || this.state.checkpassword == '') {
            alert('please make sure your entered your username and password')
          } else {
            //alert('nav to the home page')

            // this.props.navigation.navigate('Home', { screen: 'HomeScreen' }),
            this.signUp(this.state.username, this.state.password, this.state.checkpassword)
          }
          }}>
          <View style = {{height: 50, width: 200, backgroundColor: 'white', 
                        alignItems: 'center', justifyContent: 'center', 
                        borderRadius: 40, marginVertical: 30}}>
            <Text style = {{color: '#30BB4C', fontFamily: 'Roboto-Bold',
                        fontSize: 22}}>Check Input</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}

const SignupScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image
          source={require('./../img/green_miles.png')}
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
      <Inputs />
      {/* <TextInput
        style={styles.textInput}
        placeholder="Given name"
        onChangeText={text => setText(text)}
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
      /> */}

      <TouchableOpacity onPress = {() => {navigation.navigate('Home', { screen: 'LoginScreen' })}}>
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
    marginVertical: 22,
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
  textpassword: {
    fontFamily: 'Roboto-Bold',
    fontSize: 25,
    color: 'white',
    marginTop: 15,
    marginRight: 110,
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