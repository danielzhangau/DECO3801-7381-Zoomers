import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, ImageBackground } from 'react-native';

export default function RewardAvailableScreen({navigation}) {
    return (
        <ImageBackground blurRadius={30} source={require('./../assets/images/small_green2.jpg')} style={{ flex: 1 }}>
            <View style={{
                    flex: 1,
                    // flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'stretch',
                }}>
                {/* the top km number button */}
                <View style={{height: 105, backgroundColor: '#068D3C', alignItems: 'center', justifyContent: 'center' }} >
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
                    <TouchableOpacity onPress = {() => {navigation.navigate('Reward', {screen: 'RewardScreen'})}}>
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
                <View style={{height: 56, flexDirection: 'row', justifyContent: 'space-between'}} >
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
                <View style={{height: "65%", alignItems: 'center'}} >
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
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    text: {
        fontFamily: 'Roboto-Bold',
        fontSize: 20,
        color: 'white',
        alignSelf: 'flex-start',
        marginLeft: 10,
        marginBottom: 10,
        textShadowColor: '#3B3A3A',
        textShadowOffset: {width: 0, height: 3},
        textShadowRadius: 4,
    },
    textSmall: {
        fontFamily: 'Roboto',
        fontSize: 20,
        color: 'white',
        textShadowColor: '#3B3A3A',
        textShadowOffset: {width: 0, height: 3},
        textShadowRadius: 4,
    },
})
