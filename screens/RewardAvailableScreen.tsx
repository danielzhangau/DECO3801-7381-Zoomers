import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';

const RewardAvailableScreen = ({navigation}) => {
    return (
        <View style={{
                flex: 1,
                // flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'stretch',
            }}>
            {/* the top km number button */}
            <View style={{height: 100, backgroundColor: '#068D3C', alignItems: 'center', justifyContent: 'center' }} >
                <TouchableOpacity onPress = {() => {navigation.navigate('Home')}}>
                    <View style = {{height: 70, width: 250, backgroundColor: 'white', 
                                    alignItems: 'center', justifyContent: 'center', 
                                    borderRadius: 40, marginVertical: 30}}>
                        <Text style = {{color: 'black', fontFamily: 'Roboto-Bold',
                                    fontSize: 30}}>92km</Text>
                    </View>
                </TouchableOpacity>
            </View>
            {/* the top reward purchased switch buttons */}
            <View style={{height: 65, backgroundColor: '#068D3C', flexDirection: 'row', justifyContent: 'space-between'}} >
                <TouchableOpacity onPress = {() => {navigation.navigate('Reward')}}>
                    <View style = {{height: 50, width: 170, alignItems: 'center', justifyContent: 'center'}}>
                        <Text style = {{color: 'white', fontFamily: 'Roboto-Bold',
                                    fontSize: 20}}>Browse Rewards</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress = {() => {navigation.navigate('Reward')}}>
                    <View style = {{height: 50, width: 170, alignItems: 'center', justifyContent: 'center'}}>
                        <Text style = {{color: 'white', fontFamily: 'Roboto-Bold',
                                    fontSize: 20}}>Available(0)</Text>
                    </View>
                </TouchableOpacity>
            </View>
            {/* the four mode switch (online, instore and expiry) buttons */}
            <View style={{height: 56, backgroundColor: '#DFECDC', flexDirection: 'row', justifyContent: 'space-between'}} >
                <TouchableOpacity onPress = {() => {navigation.navigate('Reward')}}>
                    <View style = {{height: 25, width: 90, alignItems: 'center', justifyContent: 'center', 
                                    backgroundColor: 'white', borderRadius: 40, marginVertical: 18, borderWidth: 1, borderColor: 'black' }}>
                        <Text style = {{color: 'black', fontFamily: 'Roboto', fontSize: 17}}>View All</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress = {() => {navigation.navigate('Reward')}}>
                    <View style = {{height: 25, width: 90, alignItems: 'center', justifyContent: 'center', 
                                    backgroundColor: 'white', borderRadius: 40, marginVertical: 18, borderWidth: 1, borderColor: 'black' }}>
                        <Text style = {{color: 'black', fontFamily: 'Roboto', fontSize: 17}}>Online</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress = {() => {navigation.navigate('Reward')}}>
                    <View style = {{height: 25, width: 90, alignItems: 'center', justifyContent: 'center', 
                                    backgroundColor: 'white', borderRadius: 40, marginVertical: 18, borderWidth: 1, borderColor: 'black' }}>
                        <Text style = {{color: 'black', fontFamily: 'Roboto', fontSize: 17}}>In-store</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress = {() => {navigation.navigate('Reward')}}>
                    <View style = {{height: 25, width: 90, alignItems: 'center', justifyContent: 'center', 
                                    backgroundColor: 'white', borderRadius: 40, marginVertical: 18, borderWidth: 1, borderColor: 'black' }}>
                        <Text style = {{color: 'black', fontFamily: 'Roboto', fontSize: 17}}>History</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={{height: "65%", backgroundColor: '#DFECDC', alignItems: 'center'}} >
                <Text >{"\n"}</Text>
                <Text style={styles.text}>PURCHASED</Text>
                
                <View style={{width: '95%', height: 40, alignItems: 'center', justifyContent: 'center', marginVertical: 25}} >
                    <Text style={styles.textSmall}>You currently don't have any rewards.</Text>
                </View>
                <TouchableOpacity onPress = {() => {navigation.navigate('Reward', { screen: 'RewardScreen' })}}>
                    <View style = {{height: 50, width: 200, backgroundColor: '#068D3C', 
                                    alignItems: 'center', justifyContent: 'center', 
                                    borderRadius: 40, marginVertical: 10}}>
                        <Text style = {{color: 'white', fontFamily: 'Roboto-Bold',
                                    fontSize: 22}}>Redeem now</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        fontFamily: 'Roboto-Bold',
        fontSize: 20,
        color: 'black',
        alignSelf: 'flex-start',
        marginLeft: 10,
        marginBottom: 10,
    },
    textSmall: {
        fontFamily: 'Roboto',
        fontSize: 20,
        color: 'black',
    },
  })

export default RewardAvailableScreen;