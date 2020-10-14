import React from 'react';
import { StyleSheet, Text, Image, TouchableOpacity, ImageBackground } from 'react-native';

const LoadingScreen = ({navigation}) => {
    const loading_text = "Get Rewarded for All Your Public Transport Travel"
    return (
        <TouchableOpacity onPress = {() => {navigation.navigate('Home', { screen: 'LoginScreen' })}} style={styles.container}>
            <ImageBackground source={require('./../img/small_green.jpg')} style={styles.backgroundImage}>
                <Image
                    source={require('./../img/green_miles.png')}
                    // source={{uri: "https://raw.githubusercontent.com/danielzhangau/DECO3801-7381-Zoomers/master/img/green_miles.png"}}
                    style={{width: 290, height: 290, marginTop: 80}}
                />
                <Text style={styles.text}>{loading_text}</Text>
            </ImageBackground>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
    },
    backgroundImage: {
        flex: 1,
        resizeMode: "cover",
        alignItems: 'center', 
        width: '100%',
    },
    text: {
        width: 282, 
        height: 64,
        fontSize: 22,
        marginTop: 30,
        fontFamily: 'Roboto-Bold',
        textAlign: 'center', 
        color: '#3EA50B',
        textShadowColor: '#A8A6A6',
        textShadowOffset: {width: 0, height: 3},
        textShadowRadius: 4,
    }
})
export default LoadingScreen;