import React from 'react';
import { View } from 'react-native';

const StatisticScreen = () => {
    return (
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
      }}>
        <View style={{height: 50, backgroundColor: 'powderblue'}} >
          
        </View>
        
        <View style={{height: 50, backgroundColor: 'skyblue'}} />
        <View style={{height: 100, backgroundColor: 'steelblue'}} />
      </View>
    );
};

export default StatisticScreen;