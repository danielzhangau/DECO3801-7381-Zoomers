import React from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';

const StatisticScreen = (navigation) => {
    return (
      <View style={styles.container}>
        <Image
          source={require('./../img/green_miles.png')}
          style={{width: 200, height: 100, backgroundColor: 'white', borderRadius: 40, 
                  alignItems: 'center', justifyContent: 'center', marginBottom: 20}}
        />
        <Text style={styles.textBig}>Public Transport Usage</Text>
        <Image
          source={require('./../img/statistic-line.png')}
          style={{width: 320, height: 300}}
        />
        <Text >{"\n"}</Text>
        <TouchableOpacity onPress = {() => {navigation.navigate('Signup')}}>
          <View style = {{height: 50, width: 300, backgroundColor: 'white', 
                          alignItems: 'center', justifyContent: 'center', 
                          borderRadius: 40, marginVertical: 10}}>
              <Text style = {{color: '#30BB4C', fontFamily: 'Roboto-Bold',
                          fontSize: 19}}>See how much tree you saved</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
};

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#068D3C',
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: 'Roboto',
  },
  textBig: {
      fontFamily: 'Roboto-Bold',
      fontSize: 25,
      fontStyle: 'normal',
      textShadowColor: '#3B3A3A',
      textShadowOffset: {width: 0, height: 3},
      textShadowRadius: 4,
      color: 'white',
      marginBottom: 20
  }
})

export default StatisticScreen;