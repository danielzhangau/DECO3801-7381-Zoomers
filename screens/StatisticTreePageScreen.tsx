import React from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';

const StatisticTreeScreen = (navigation) => {
    return (
      <View style={styles.container}>
        <Image
          source={require('./../img/tree.png')}
          style={{width: 60, height: 70}}
        />
        <Text>{"\n"}</Text>
        <Text style={styles.textBig}>1</Text>
        <Text style={styles.textBig}>trees saved</Text>
        <Text>{"\n"}</Text>
        <TouchableOpacity onPress = {() => {navigation.navigate('Signup')}}>
            <Text style = {styles.textUnderline}>How world change?</Text>
        </TouchableOpacity>
      </View>
    );
};

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#D0ECC9',
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: 'Roboto',
  },
  textBig: {
      fontFamily: 'Roboto-Bold',
      fontSize: 45,
      fontStyle: 'normal',
      textShadowColor: '#A8A6A6',
      textShadowOffset: {width: 0, height: 3},
      textShadowRadius: 4,
      color: '#309200',
      marginBottom: 15
  },
  textUnderline: {
    fontFamily: 'Roboto-Bold',
    fontSize: 25,
    textDecorationLine: 'underline',
    color: '#309200',
    marginBottom: 20
  }
})

export default StatisticTreeScreen;