import React from 'react';
import { StyleSheet, Text, Image, TouchableOpacity, ImageBackground } from 'react-native';

export default function LoadingScreen({ navigation }) {
    const loading_text = "Get Rewarded for All Your Public Transport Travel"
    return (
        <TouchableOpacity onPress={() => { navigation.navigate('Home', { screen: 'LoginScreen' }) }} style={styles.container}>
            {/* we make our background blur in here */}
            <ImageBackground blurRadius={15} source={require('./../assets/images/small_green.jpg')} style={styles.backgroundImage} >
                {/* our logo */}
                <Image
                    source={require('./../assets/images/green_miles.png')}
                    style={{ width: 290, height: 290, marginTop: 80 }}
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
        alignItems: 'center',
    },
    text: {
        width: 282,
        height: 64,
        fontSize: 22,
        marginTop: 30,
        fontFamily: 'Roboto-Bold',
        textAlign: 'center',
        color: '#009900',
        textShadowColor: '#808080',
        textShadowOffset: { width: 1, height: 4 },
        textShadowRadius: 4,
    }
})